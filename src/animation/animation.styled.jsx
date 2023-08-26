import { keyframes } from "styled-components";

export const animateMargin = keyframes`
  
  0% {
        margin-left: calc(70vw - 110px);

  }

  100% {
    margin-left: 0px;
  }
`

export const animateMarginRight = keyframes`
  
  0% {
        margin-top: calc(100vw - 110px);

  }

  100% {
    margin-top: 0px;
  }
`


export const leftAnimation = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const downAnimation = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};


export const upAnimation = {
  hidden: {
    y: -300,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const rightAnimation = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const featureAnimation = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
}


export const textAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: ({
    x: 0,
    opacity: 1,

  }),
}


export const visibleAnimation = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
}


export const scaleAnimation = {
  hidden: {
scale: 1.0,
  },
  visible: (custom) => ({
scale: 1.1,
    transition: { delay: 1},
  }),
}