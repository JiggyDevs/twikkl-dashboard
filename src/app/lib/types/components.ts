import { HTMLAttributes, ReactNode } from "react";

export interface ButtonAttributes extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  disable?: boolean;
  maxWidth?: string;
}

export interface InputAttributes extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  type?: string;
  suffix?: ReactNode;
  mxWt?: string;
  border?: string;
  extraInfo?: {
    label: string;
    to?: string;
  };
}

export interface SelectValueType {
  label: string;
  value: any;
}

export interface SelectValueAttributes {
  initialValue?: SelectValueType;
  onValueUpdate?: (value: any) => void;
  options: SelectValueType[];
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  id?: string;
  required?: boolean;
}
