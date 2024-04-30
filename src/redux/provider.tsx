"use client";

import { Provider } from "react-redux";
import { Store } from "redux";
import { store } from "./store";
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store as Store}>{children}</Provider>;
}
