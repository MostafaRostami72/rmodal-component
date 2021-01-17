import styled, {keyframes} from 'styled-components';

export const SlideInBottomAnimate = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-50%, 100%, 0);
        transform: translate3d(-50%, 100%, 0)
    }
    to {
        opacity: 1;
        -webkit-transform: translate(-50%, 50%);
        transform: translate(-50%, -50%);
    }
`;

export const SlideInBottomAnimateMobile = keyframes`
    0% {
        bottom: 0;
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
    to {
        bottom: 0;
        opacity: 1;
        -webkit-transform: translate(0, 0%);
        transform: translate(0, 0%);
    }
`;

export const SlideOutBottomAnimate = keyframes`
    0% {
        bottom: 50%;
        opacity: 1;
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
    }
    to {
        bottom: 0;
        opacity: 0;
        -webkit-transform: translate3d(-50%, 100%, 0);
        transform: translate3d(-50%, 100%, 0)
    }
`;

export const SlideOutBottomAnimateMobile = keyframes`
    0% {
        bottom: 0;
        opacity: 1;
        -webkit-transform: translate(0, 0%);
        transform: translate(0, 0%);
    }
    to {
        bottom: 0;
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
`;