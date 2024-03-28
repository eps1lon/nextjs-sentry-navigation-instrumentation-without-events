import { setTimeout } from "node:timers/promises";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Page2({ params }: { params: { slug: string } }) {
  await setTimeout(1500);
  return `Post: ${params.slug}`;
}
