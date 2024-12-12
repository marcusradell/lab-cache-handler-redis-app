"use client";

import { revalidateAction } from "./actions";

export function Revalidate() {
  return <button onClick={() => revalidateAction()}>Revalidate</button>;
}
