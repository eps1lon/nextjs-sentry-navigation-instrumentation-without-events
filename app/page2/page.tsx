import { setTimeout } from "node:timers/promises";

export default async function Page2() {
  await setTimeout(2000);
  return "Page2";
}
