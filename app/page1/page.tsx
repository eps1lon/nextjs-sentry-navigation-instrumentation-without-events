import { setTimeout } from "node:timers/promises";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page1() {
  await setTimeout(1000);
  return "Page1";
}
