import gsap from "gsap";

export const animSideMenuPop = (targetArr: HTMLElement[]) => {
  const tl = gsap.timeline();

  tl.add("target0", 0);
  tl.add("target1", 0.2);
  tl.add("target2", 0.4);

  tl.fromTo(targetArr[0], { opacity: 0 }, { opacity: 1, duration: 0.3 }, "target0")
    .fromTo(
      targetArr[0],
      { display: "block", rotation: 0, y: 0, ease: "power4.out" },
      { rotation: -380, y: 55, duration: 0.7 },
      "target0"
    )
    .add("reaction0", ">target0")
    .to(targetArr[0], { rotation: -350, duration: 0.2 }, "reaction0")
    .to(targetArr[0], { rotation: -360, duration: 0.2 }, ">reaction0")
    .to(targetArr[0], { y: 52.5, duration: 0.1 }, "reaction0")
    .to(targetArr[0], { y: 50, duration: 0.1 }, ">reaction0");

  tl.fromTo(targetArr[1], { opacity: 0 }, { opacity: 1, duration: 0.3 }, "target1")
    .fromTo(
      targetArr[1],
      { display: "block", rotation: 0, y: -50, ease: "power4.out" },
      { rotation: -380, y: 55, duration: 0.7 },
      "target1"
    )
    .add("reaction1", ">target1")
    .to(targetArr[1], { rotation: -350, duration: 0.2 }, "reaction1")
    .to(targetArr[1], { rotation: -360, duration: 0.2 }, ">reaction1")
    .to(targetArr[1], { y: 52.5, duration: 0.1 }, "reaction1")
    .to(targetArr[1], { y: 50, duration: 0.1 }, ">reaction1");

  tl.fromTo(targetArr[2], { opacity: 0 }, { opacity: 1, duration: 0.3 }, "target2")
    .fromTo(
      targetArr[2],
      { display: "block", rotation: 0, y: 0, ease: "power4.out" },
      { rotation: 760, y: 155, duration: 0.7 },
      "target2"
    )
    .add("reaction2", ">target2")
    .to(targetArr[2], { rotation: 700, duration: 0.2 }, "reaction2")
    .to(targetArr[2], { rotation: 720, duration: 0.2 }, ">reaction2")
    .to(targetArr[2], { y: 152.5, duration: 0.1 }, "reaction2")
    .to(targetArr[2], { y: 150, duration: 0.1 }, ">reaction2");
};

export const animSideMenuFadeAway = (targetArr: HTMLElement[]) => {
  const tl = gsap.timeline();

  tl.add("target0", 0);
  tl.add("target1", 0.1);
  tl.add("target2", 0.2);

  tl.fromTo(
    targetArr[0],
    { display: "block", rotation: 0, y: 50, ease: "power4.out", opacity: 1 },
    { rotation: 0, y: 0, duration: 1, opacity: 0, display: "none" },
    "target0"
  );

  tl.fromTo(
    targetArr[1],
    { display: "block", rotation: 0, y: 50, ease: "power4.out", opacity: 1 },
    { rotation: 0, y: -50, duration: 1, opacity: 0, display: "none" },
    "target1"
  );

  tl.fromTo(
    targetArr[2],
    { display: "block", rotation: 0, y: 150, ease: "power4.out", opacity: 1 },
    { rotation: 0, y: 0, duration: 1, opacity: 0, display: "none" },
    "target2"
  );
};
