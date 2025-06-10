$(function () {
  $(document).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
  });

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
        // onLeave: () => {
        //   gsap.set(".con02 .title .txt_a, .con02 .title .txt_b", {
        //     display: "none",
        //   });
        // },
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
        markers: true,
      },
    })
    .to(".con02 .title .txt_a", { x: "-100%", ease: "none", duration: 5 }, 0)
    .to(".con02 .title .txt_b", { x: "100%", ease: "none", duration: 5 }, 0);

  // .con02와 .work_list 구간에서 title 글자 display 관리
  ScrollTrigger.create({
    trigger: ".con02", // 이 요소가 스크롤 트리거 시작점의 기준이 돼요
    start: "top bottom", // .con02의 맨 위가 화면 맨 아래에 닿을 때 시작!
    endTrigger: ".work_list", // 이 요소가 스크롤 트리거 끝점의 기준이 돼요
    end: "bottom top", // .work_list의 맨 아래가 화면 맨 위에 닿을 때 끝!

    onEnter: () => {
      // 스크롤을 내려서 트리거 구간에 진입할 때
      gsap.set(".con02 .title .txt_a, .con02 .title .txt_b", {
        display: "block",
      });
    },
    onLeave: () => {
      // 스크롤을 내려서 트리거 구간을 벗어날 때
      gsap.set(".con02 .title .txt_a, .con02 .title .txt_b", {
        display: "none",
      });
    },
    onEnterBack: () => {
      // 스크롤을 올려서 트리거 구간에 다시 진입할 때
      gsap.set(".con02 .title .txt_a, .con02 .title .txt_b", {
        display: "block",
      });
    },
    onLeaveBack: () => {
      // 스크롤을 올려서 트리거 구간을 완전히 벗어날 때 (맨 위로 갈 때)
      gsap.set(".con02 .title .txt_a, .con02 .title .txt_b", {
        display: "none",
      });
    },
  });

  // skill list img 무한루프
  const $list = $(".loop_list .list");
  $list.append($list.html()); // 자기 자신을 복제해서 붙이기

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con03",
        start: "0% 50%",
        end: "20% 50%",
        // markers: true,
        // scrub: 1,
      },
    })
    .to(".loop_list", {
      transform: "rotate(5deg) translate(5%, 400px) scale(1.1)",
      opacity: "1",
      ease: "none",
      // duration: 5,
    });

  // con04
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".content_wrap",
        start: "0% 0%",
        end: "100% 0%",
        scrub: 1,
        pin: true,
        markers: true,
      },
    })
    .to(".content_wrap h1", { opacity: "1", ease: "none", duration: "10" }, 5)
    .to(
      ".content_wrap img",
      { scale: "0.4", ease: "none", duration: "10", opacity: "0.3" },
      5
    );

  gsap.utils.toArray(".con04 .obj").forEach(function (obj) {
    //toArray() => 배열로 만드는 메소드
    gsap.timeline({
      scrollTrigger: {
        trigger: obj,
        start: "50% 100%",
        toggleClass: { targets: obj, className: "active" },
        scrub: 1,
      },
    });
  });

  gsap.utils.toArray(".con04 .text_box").forEach(function (txt) {
    //toArray() => 배열로 만드는 메소드
    gsap.timeline({
      scrollTrigger: {
        trigger: txt,
        start: "50% 80%",
        end: "100% 0%",
        toggleClass: { targets: txt, className: "active" },
        scrub: 1,
        markers: true,
      },
    });
  });

  // menu_open
  $(".menu_open").on("click", function () {
    $(".gnb").toggleClass("on");
    $(this).toggleClass("on");
    $("body").toggleClass("on"); // 스크롤 방지
  });
});
