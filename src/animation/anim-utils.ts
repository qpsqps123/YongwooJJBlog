import gsap from "gsap";

export const preventClick = (targetArr: HTMLElement[], preventTime: number) => {
  targetArr.forEach((target) => {
    gsap.from(target, {
      pointerEvents: "none",
      duration: preventTime,
    });
  });
};
