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
  emoji?: string;
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
export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  label: string;
  width?: number;
};

export type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

export type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
};

export interface ModalStateAttribute {
  type: null | string;
  data: null | any;
  isEnabled: boolean;
}
