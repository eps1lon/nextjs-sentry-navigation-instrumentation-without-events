import { setTimeout } from "node:timers/promises";

export default async function Page1() {
  await setTimeout(2000);
  return "Page1";
}
