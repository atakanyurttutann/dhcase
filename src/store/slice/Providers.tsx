"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import React, { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren<{ ati?: string }>> = ({
  children,
  ati,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
