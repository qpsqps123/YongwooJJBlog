import { RefContext } from "@/context/ref-context";
import { LayoutProps } from "@/types/components/layout";
import React, { useContext, useEffect, useState } from "react";
import * as classes from "./layout.module.scss";

export default function Layout({ children }: LayoutProps) {
  const { $displayedCursorRef, $actualCursorXRef, $actualCursorYRef, $displayedCursorXRef, $displayedCursorYRef } =
    useContext(RefContext);

  const handleActualCursorPositionInDocument = (event: MouseEvent) => {
    if ($actualCursorXRef) $actualCursorXRef.current = event.pageX;

    if ($actualCursorYRef) $actualCursorYRef.current! = event.pageY;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleActualCursorPositionInDocument);

    const rAF = () => {
      if ($actualCursorXRef && $actualCursorYRef) {
        if ($displayedCursorXRef && $displayedCursorYRef) {
          $displayedCursorXRef.current -= ($displayedCursorXRef.current - $actualCursorXRef.current) * 0.4;
          $displayedCursorYRef.current -= ($displayedCursorYRef.current - $actualCursorYRef.current) * 0.4;

          if ($displayedCursorRef) {
            $displayedCursorRef.current!.style.transform = `translate3D(${$displayedCursorXRef.current}px, ${$displayedCursorYRef.current}px, 0)`;
          }
        }
      }
      requestAnimationFrame(rAF);
    };
    rAF();
  }, []);

  return (
    <div>
      {children}
      <div className={classes.displayedCursor} ref={$displayedCursorRef}>
        <div className={classes.displayedCursorDot}></div>
      </div>
    </div>
  );
}
