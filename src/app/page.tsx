import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-16">
    <Header />
    <Hero />
    <div className="fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-orange-500 blur-[150px] md:blur-[350px] opacity-50 left-0 top-0"></div>
    <div className="fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full bg-violet-500 blur-[150px] md:blur-[350px] opacity-50 right-0 bottom-0"></div>
  </div>
  );
}
