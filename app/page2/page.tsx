import { setTimeout } from "node:timers/promises";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page2() {
  await setTimeout(2000);
  return "Page2";
}
