import { RefContext } from "@/context/ref-context";
import { LayoutProps } from "@/types/components/layout";
import React, { useContext } from "react";
import * as classes from "@/styles/base/_base.scss";

export default function Layout({ children }: LayoutProps) {
  const { $displayedCursorRef } = useContext(RefContext);
  return (
    <div>
      {children}
      <div className={classes.displayedCursor} ref={$displayedCursorRef}></div>
    </div>
  );
}
