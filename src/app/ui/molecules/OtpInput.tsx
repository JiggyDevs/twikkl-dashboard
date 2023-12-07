"use client";

import {
  ChangeEvent,
  useMemo,
  FocusEvent,
  Dispatch,
  SetStateAction,
} from "react";

import clsx from "clsx";

import { RE_DIGIT } from "@/app/lib/config/platformConstants";

import {
  handleInputfocusToNext,
  inputOnKeyDown,
} from "@/app/lib/utils/helpers";

const OTPComponent = ({
  otp = "",
  setOTP,
}: {
  otp: string;
  setOTP: Dispatch<SetStateAction<string>>;
}) => {
  const valueItems = useMemo(() => {
    const valueArray = otp.split("");

    const items: Array<string> = [];

    for (let i = 0; i < 4; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [otp]);

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const target = e.target;

    let targetValue = target.value.trim();

    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    const nextInputEl = target.nextElementSibling as HTMLInputElement | null;

    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        otp.substring(0, idx) + targetValue + otp.substring(idx + 1);

      setOTP(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      handleInputfocusToNext(target);
    } else if (targetValueLength === 4) {
      setOTP(targetValue);

      target.blur();
    }
  };

  const inputOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    const prevInputEl =
      target.previousElementSibling as HTMLInputElement | null;

    if (prevInputEl && prevInputEl.value === "") {
      return prevInputEl.focus();
    }

    target.setSelectionRange(0, target.value.length);
  };

  return (
    <div className="flex gap-x-4 justify-between">
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={4}
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
          className={clsx(
            "w-14 h-14 text-xl text-center rounded-lg border font-medium border-gray-300 focus:border-twikkl-primary transition-all duration-100",
            digit ? "border-twikkl-primary" : "border-gray-300"
          )}
        />
      ))}
    </div>
  );
};

export default OTPComponent;
