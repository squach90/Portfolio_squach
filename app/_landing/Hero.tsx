"use client";

import { PropsWithChildren, useState } from "react";
import { Section } from "./Section";
import classNames from "classnames";
import { CustomIcons } from "./icons/CustomIcon";
import { Button } from "@/components/ui/button";


export const Hero = () => {

    const [isScrolling, setIsScrolling] = useState(false);

    const scrollToSection = () => {
        setIsScrolling(true);
        const section = document.getElementById('calcom');
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
        setIsScrolling(false);
        }, 1000); // Durée de l'animation en millisecondes
    };

    return (
        <Section classNames="flex flex-col gap-2 lg:gap-4">
            <h1 className="text-4xl lg:text-5xl font-bold">Hey, I am squach90 👋</h1>
            <p className="text-muted-foreground">I am{" "}<Code className="whitespace-nowrap"><CustomIcons className="inline mb-0.5 mr-0.5" name="terminal" size={12} />Junior Programmer</Code>{" "} and I have created a <Code>Game</Code> and <Code>Web Site</Code> for fun and chalenge. </p>

            <div className="mt-4 lg:mt-6 flex items-center flex-wrap gap-4">
                <Button onClick={scrollToSection} size="lg" className="w-fit">
                    Schedule a call
                </Button>
                <a href="https://github.com/squach90" target="_blank">
                    <Button size="lg" variant="ghost" className="w-fit">
                        <CustomIcons name="github" size={20} className="mr-2 text-foreground" />
                        @squach90
                    </Button>
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <Button size="lg" variant="ghost" className="w-fit">
                        <CustomIcons name="twitter" size={20} className="mr-2 text-foreground" />
                        @squach90
                    </Button>
                </a>
            </div>

        </Section>
    );
};

export const Code = (props: PropsWithChildren<{ className?: string }> ) => {
    return (
        <span className="px-1 rounded-md inline-flex text-foreground items-center -mx-0.5 bg-accent/20 border-accent border py-1">
            {props.children}
        </span>
    )
}



export default Hero;
