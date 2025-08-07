import { Suspense } from "react";
import Archive from "./archive";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default async function ArchivePage({ searchParams }) {
  return (
    <div className="bg-white py-6 px-4 md:px-[160px]">
      <div className="relative text-black">
        <h1 className="font-nunito-sans text-center text-4xl font-bold leading-normal text-[var(--Black-500,#1F1F1F)] dark:text-white">
          All content
        </h1>

        {searchParams ? (
          <Archive searchParams={searchParams} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
