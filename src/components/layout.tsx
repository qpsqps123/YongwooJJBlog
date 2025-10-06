import { RefContext } from "@/context/ref-context";
import { LayoutProps } from "@/types/components/layout";
import React, { useContext, useEffect } from "react";
import * as classes from "./layout.module.scss";

export default function Layout({ children }: LayoutProps) {
  const { $displayedCursorRef, actualCursorXRef, actualCursorYRef, displayedCursorXRef, displayedCursorYRef } =
    useContext(RefContext);

  useEffect(() => {
    const handleActualCursorPositionInDocument = (event: MouseEvent) => {
      // ref 객체와 current 속성이 모두 유효할 때만 값을 할당합니다.
      if (actualCursorXRef?.current !== undefined) actualCursorXRef.current = event.pageX;
      if (actualCursorYRef?.current !== undefined) actualCursorYRef.current = event.pageY;
    };

    const handleDisplayedCursorSticksToTargetElement = () => {
      const displayedCursorDot = $displayedCursorRef?.current?.firstElementChild as HTMLElement;

      if (displayedCursorDot) {
        displayedCursorDot.style.transform = `scale3D(2.5, 2.5, 1)`;
      }
    };

    const handleDisplayedCursorDeviateFromTargetElement = () => {
      const displayedCursorDot = $displayedCursorRef?.current?.firstElementChild as HTMLElement;

      if (displayedCursorDot) {
        displayedCursorDot.style.transform = `scale3D(1, 1, 1)`;
      }
    };

    document.addEventListener("mousemove", handleActualCursorPositionInDocument);

    const targetElements = document.querySelectorAll("a, button");
    targetElements.forEach((element) => {
      const targetElement = element as HTMLElement;
      targetElement.addEventListener("mouseenter", handleDisplayedCursorSticksToTargetElement);
      targetElement.addEventListener("mouseleave", handleDisplayedCursorDeviateFromTargetElement);
    });

    let animationFrameId: number;
    const rAF = () => {
      if (
        actualCursorXRef?.current !== undefined &&
        actualCursorYRef?.current !== undefined &&
        displayedCursorXRef?.current !== undefined &&
        displayedCursorYRef?.current !== undefined &&
        $displayedCursorRef?.current
      ) {
        const dx = actualCursorXRef.current - displayedCursorXRef.current;
        const dy = actualCursorYRef.current - displayedCursorYRef.current;

        displayedCursorXRef.current += dx * 0.4;
        displayedCursorYRef.current += dy * 0.4;

        $displayedCursorRef.current.style.transform = `translate3D(${displayedCursorXRef.current}px, ${displayedCursorYRef.current}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(rAF);
    };
    rAF();

    return () => {
      document.removeEventListener("mousemove", handleActualCursorPositionInDocument);
      targetElements.forEach((element) => {
        const targetElement = element as HTMLElement;
        targetElement.removeEventListener("mouseenter", handleDisplayedCursorSticksToTargetElement);
        targetElement.removeEventListener("mouseleave", handleDisplayedCursorDeviateFromTargetElement);
      });
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div>
      {children}
      <div className={classes.displayedCursor} ref={$displayedCursorRef} aria-hidden="true">
        <div className={classes.displayedCursorDot}></div>
      </div>
    </div>
  );
}
