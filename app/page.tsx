import classNames from "classnames";
import { Hero } from "./_landing/Hero";
import { Work } from "./_landing/Work";
import { Showcase } from "./_landing/Showcase";
import { CalCom } from "./_landing/CalCom";
import { Footer } from "./_landing/Footer";
import { Analytics } from '@vercel/analytics/react';


export default function Home({  }) {
  return (
    <div>
      <Analytics/>
      <main className="h-full">
      <div
        className="absolute inset-x-0 top-10 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/3 translate-y-[6rem] bg-gradient-to-tr from-[#8cbe9c] to-[#2518d4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        ></div>
        <div
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/3 translate-y-0 bg-gradient-to-tr from-[#8cbe9c] to-[#2518d4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          ></div>
        </div>

      </div>
      <Hero />
      <Work />
      <Showcase />
      <CalCom />
      <Footer />
    </main>
    </div>
  );
}
