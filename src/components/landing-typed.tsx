"use client"

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const LandingTyped = () => {
    const text = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typed = new Typed(text.current, {
            strings: ["Passionate", "Self-taught", "Web expert", "Full-stack developer", "Advanced programmer", "Curiosity-driven", "Innovator"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">I'm <span ref={text} />.</h2>
        </div>
    );
};
