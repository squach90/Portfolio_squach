"use client";

import { Section } from "./Section"
import { YouTubeEmbed } from '@next/third-parties/google'

export const Work = () => {
    return (
        <Section>
            <h2 className="text-3xl lg:text-4xl font-bold">My best work</h2>
            <p className="text-lg text-muted-foreground mt-2 lg:mt-4">
                In this list you can find a Web Site and a Game
            </p>
            <div className="grid grid-cols-2 mt-4 lg:mt-6 gap-2 lg:gap-4">
                <div className="rounded-md overflow-hidden shadow-md">
                <object type="image/svg+xml" data="https://gh-card.dev/repos/squach90/Portfolio.svg?link_target=_blank" style={{ width: '100%', height: '100%' }}></object>
                </div>
                <div className="rounded-md overflow-hidden shadow-md">
                    <object
                        type="image/svg+xml"
                        data="https://gh-card.dev/repos/squach90/Adventure_for_Pico8.svg?fullname=&link_target=_blank"
                        style={{ width: '100%', height: '100%' }}
                    ></object>
                </div>
                <div className="rounded-md overflow-hidden shadow-md">
                    <object
                        type="image/svg+xml"
                        data="https://gh-card.dev/repos/squach90/2PlayerGamesOffline.svg?fullname=&link_target=_blank"
                        style={{ width: '100%', height: '100%' }}
                    ></object>
                </div>
                <div className="rounded-md overflow-hidden shadow-md">
                    <object
                        type="image/svg+xml"
                        data="https://gh-card.dev/repos/squach90/squach90.svg?link_target=_blank"
                        style={{ width: '100%', height: '100%' }}
                    ></object>
                </div>
                <div className="rounded-md overflow-hidden shadow-md">
                <object type="image/svg+xml" data="https://gh-card.dev/repos/squach90/RetroAdventure.svg?link_target=_blank" style={{ width: '100%', height: '100%' }}></object>
                </div>
            </div>
        </Section>
        );
    };