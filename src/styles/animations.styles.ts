import { keyframes } from "@emotion/react";

export const fadeIn: string = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
        visibility: visible;
    }
`;

export const translateUp: string = keyframes`
    0% {
        transform: translateY(5rem);
    }
`;

export const translateDown: string = keyframes`
    0% {
        transform: translateY(-5rem);
    }
`;

export const translateLeft: string = keyframes`
    0% {
        transform: translateX(5rem);
    }
`;

export const translateRight: string = keyframes`
    0% {
        transform: translateX(-5rem);
    }
`;

export const mobileTranslateUp: string = keyframes`
    0% {
        transform: translateY(0.5rem);
    }
`;

export const mobileTranslateDown: string = keyframes`
    0% {
        transform: translateY(-0.5rem);
    }
`;

export const mobileTranslateLeft: string = keyframes`
    0% {
        transform: translateX(0.5rem);
    }
`;

export const mobileTranslateRight: string = keyframes`
    0% {
        transform: translateX(-0.5rem);
    }
`;
