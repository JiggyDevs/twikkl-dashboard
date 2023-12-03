import { KeyboardEvent } from "react";

export const handleInputfocusToNext = (target: HTMLElement) => {
  const nextElementSibling =
    target.nextElementSibling as HTMLInputElement | null;

  if (nextElementSibling) {
    nextElementSibling.focus();
  }
};

export const handleInputfocusToPrev = (target: HTMLElement) => {
  const previousElementSibling =
    target.previousElementSibling as HTMLInputElement | null;

  if (previousElementSibling) {
    previousElementSibling.focus();
  }
};

export const inputOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  const { key } = e;
  const target = e.target as HTMLInputElement;

  if (key === "ArrowRight" || key === "ArrowDown") {
    e.preventDefault();
    return handleInputfocusToNext(target);
  }

  if (key === "ArrowLeft" || key === "ArrowUp") {
    e.preventDefault();
    return handleInputfocusToPrev(target);
  }

  const targetValue = target.value;

  target.setSelectionRange(0, 4);

  if (e.key !== "Backspace" || targetValue !== "") {
    return;
  }

  handleInputfocusToPrev(target);
};
