import { RefContext } from "@/context/ref-context";
import { LayoutProps } from "@/types/components/layout";
import React, { useContext, useEffect, useState } from "react";
import * as classes from "./layout.module.scss";

export default function Layout({ children }: LayoutProps) {
  const { $displayedCursorRef, $actualCursorXRef, $actualCursorYRef } = useContext(RefContext);

  const handleActualCursorPositionSettingInDocument = (event: MouseEvent) => {
    console.log(event);
    if ($actualCursorXRef) $actualCursorXRef.current = event.clientX;

    if ($actualCursorYRef) $actualCursorYRef.current! = event.clientY;
    console.log($actualCursorXRef, $actualCursorYRef);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleActualCursorPositionSettingInDocument);
  }, []);

  return (
    <div>
      {children}
      <div className={classes.displayedCursor} ref={$displayedCursorRef}>
        123
      </div>
    </div>
  );
}
