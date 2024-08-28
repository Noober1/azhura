import { ReactNode } from "react";

export type LayoutComponent = (props: {
  children: ReactNode;
  [key: string]: unknown;
}) => ReactNode;

export type PageWithParam = (props: {
  params: { [key: string]: string };
}) => ReactNode;
