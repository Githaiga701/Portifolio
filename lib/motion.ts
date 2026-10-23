export const motionTokens = {
  duration: {
    fast: 0.15,
    base: 0.25,
    medium: 0.4,
    slow: 0.7,
  },
  ease: [0.22, 1, 0.36, 1] as const,
  spring: {
    type: "spring" as const,
    stiffness: 280,
    damping: 22,
    mass: 0.7,
  },
  stagger: 0.075,
};

export function reveal(delay = 0, distance = 18) {
  return {
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-72px" },
    transition: {
      duration: motionTokens.duration.medium,
      delay,
      ease: motionTokens.ease,
    },
  };
}

export function heroReveal(delay = 0, distance = 22) {
  return {
    initial: { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: motionTokens.duration.slow,
      delay,
      ease: motionTokens.ease,
    },
  };
}
