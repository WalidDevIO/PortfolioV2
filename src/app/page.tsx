import { LandingTyped } from "@/components/landing/landing-typed";
import { LandingCorpus } from "@/components/landing/landing-corpus";

export default function Home() {

  return (
    <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto my-4 w-full">
      <LandingTyped />
      <LandingCorpus />
    </div>
  );
}