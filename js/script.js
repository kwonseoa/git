$(function () {
  // gnb 스플리팅 호출
  Splitting();

  var prevScrollTop = 0;
  $(document).on("scroll", function () {
    var nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  // 스크롤라
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });

  // svg 애니메이션
  //   $(".svgAni")
  //     .find("#svgAni03")
  //     .each(function (i, path) {
  //       var length = path.getTotalLength();
  //       alert(length);
  //     });

  // .con01 gsap 애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con01",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 1,
        // markers: true,
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#fff", color: "#000", ease: "none", duration: 5 },
      0
    )
    .to(".svgAni path", { stroke: "#000", ease: "none", duration: 5 }, 0)
    .to(".scroll", { opacity: "0", ease: "none", duration: 5 }, 0)
    .fromTo(
      ".video_wrap video",
      { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
      {
        "clip-path": "inset(0% 0% 0% 0% round 0%)",
        ease: "none",
        duration: 10,
      },
      0
    );

  // .con02 gsap 애니메이션
  // title 먼저
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con02",
        start: "0% 100%",
        end: "0% 20%",
        scrub: 1,
      },
    })
    .fromTo(
      ".con02 .title .txt_a",
      { x: "-100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    )
    .fromTo(
      ".con02 .title .txt_b",
      { x: "100%" },
      { x: "0%", ease: "none", duration: 5 },
      0
    );
  // work_list 나타날 때
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".work_list",
        start: "0% 100%",
        end: "0% 100%",
        scrub: 1,
      },
    })
    .to(
      ".wrap",
      { backgroundColor: "#000", color: "#fff", ease: "none", duration: 5 },
      0
    )
    // title 픽스
    .to(".con02 .title", {
      position: "fixed",
      ease: "none",
      left: "0",
      top: "0",
      width: "100%",
      duration: 5,
    })
    // .work_list 에 margin-top 을 적용해서 애니메이션을 자연스럽게
    .fromTo(
      ".work_list",
      { margin: "0 auto" },
      {
        margin: "100vh auto 0",
        position: "relative",
        zIndex: "10",
        duration: 1,
      },
      0
    );

  // .work_list 가 끝날 때 title 글자가 화면밖으로 사라지도록
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".work_list",
        start: "100% 50%",
        end: "100% 0%",
        scrub: 1,
      },
    })
    .to(".con02 .title .txt_a", { x: "-100%", ease: "none", duration: 5 }, 0)
    .to(".con02 .title .txt_b", { x: "100%", ease: "none", duration: 5 }, 0);

  // skill list img 무한루프
  const $list = $(".loop_list .list");
  $list.append($list.html()); // 자기 자신을 복제해서 붙이기

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con03",
        start: "0% 50%",
        end: "20% 50%",
        markers: true,
        // scrub: 1,
      },
    })
    .to(".loop_list", {
      transform: "rotate(5deg) translate(0%, 400px) scale(1.1)",
      opacity: "1",
      ease: "none",
      // duration: 5,
    });
});
