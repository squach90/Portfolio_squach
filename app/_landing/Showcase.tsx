import { Section } from "./Section";
import { Code } from "./Hero";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CustomIcons } from "./icons/CustomIcon";

export const Showcase = () => {
    return (
        <Section>
            <h2 className="text-3xl lg:text-4xl font-bold">7 days to create 1 Game</h2>
            <p className="text-lg text-muted-foreground mt-2 lg:mt-4">
                It's the story of <Link href="https://youtube.com/@c3a5m7"><Code>Adventure Pico8</Code></Link>. I created a simple game in 7 days non-stop as a challenge.
            </p>
            <br />
            <div
                className="absolute inset-x-0 top-10 -z-10 transform-gpu overflow-hidden blur-3xl"
                aria-hidden="true"
            >
            <div
                className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/3 translate-y-[8rem] bg-gradient-to-tr from-[#8cbe9c] to-[#2518d4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}
                ></div>
            </div>
            <div className="rounded-md overflow-hidden shadow-md">
                <Image
                    src="/pico8adventure.png"
                    alt="Game showcase"
                    width={1920}
                    height={1080}
                    className="w-full h-auto mt-0 lg:mt-0"
                    quality={100} // Ensure high-quality image rendering
                    priority={true} // Load image as a priority for better rendering
                />
            </div>
            <div className="mt-4 lg:mt-6 flex items-center flex-wrap gap-4">
                <a href="https://louxi90.itch.io/adventure-online" target="_blank">
                    <Button size="lg" className="w-fit items-center flex">
                        Test this game
                    </Button>
                </a>
                <a href="https://louxi90.itch.io/adventure-online" target="_blank">
                    <Button size="lg" variant="ghost" className="w-fit items-center flex">
                        <CustomIcons name="itchio" size={20} className="mr-2 text-foreground" />
                        View the page
                    </Button>
                </a>
                <a href="https://github.com/squach90/Adventure_for_Pico8" target="_blank">
                    <Button size="lg" variant="ghost" className="w-fit items-center flex">
                        <CustomIcons name="github" size={20} className="mr-2 text-foreground" />
                        Source Code
                    </Button>
                </a>
            </div>
        </Section>
    );
};