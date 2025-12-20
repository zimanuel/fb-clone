"use client";

import React from "react";
import { Provider } from "react-redux";
import App from "../components/app";
import { store } from "../store/store";

export default function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <App>{children}</App>
    </Provider>
  );
}
