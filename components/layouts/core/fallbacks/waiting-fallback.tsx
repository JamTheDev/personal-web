import { FunctionComponent, useEffect } from "react";
import Spinner from "../spinner";
import anime from 'animejs';

const WaitingFallback: FunctionComponent = () => {

    useEffect(() => {

        const timeline = anime.timeline({
            targets: [".animated-text span"],
            delay: anime.stagger(15),
            duration: 400,
            loop: true
        })

        timeline.add({
            translateY: '-10px',
            easing: "easeOutSine",
        })

        timeline.add({
            translateY: "0",
            easing: "easeInSine",
        })

        anime({
            targets: [".animated-text .dot"],
            opacity: [0, 1],
            duration: 300,
            delay: anime.stagger(200),
            loop: true
        })
    });

    return (
        <>
            <div className="
            absolute
            w-full h-full
            
            flex
            flex-col
            justify-center items-center
            ">

                <Spinner className="h-24 w-24 p-3" />

                <div className="flex flex-row relative animated-text font-bold gap-1 text-xl">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                </div>
            </div>
        </>
    )
}

export default WaitingFallback