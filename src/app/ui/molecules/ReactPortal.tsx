"use client";

import { ReactNode, useLayoutEffect, useState } from "react";

import { createPortal } from "react-dom";

const createWrapperandAppendToBody = (wrapperId: string) => {
  if (!document) return null;

  const wrapperElement = document.createElement("div");

  wrapperElement.setAttribute("id", wrapperId);

  document.body.appendChild(wrapperElement);

  return wrapperElement;
};

const ReactPortal = ({
  children,
  wrapperId,
}: {
  children: ReactNode;
  wrapperId: string;
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperandAppendToBody(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
