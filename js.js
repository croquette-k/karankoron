$(function(){
    
    /* ハンバーガーメニュー */
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
        $("#g-nav").toggleClass('panelactive');
    });

    $("#g-nav a").click(function () {
        $(".openbtn").removeClass('active');
        $("#g-nav").removeClass('panelactive');
    });

    // ページトップ
    $('#page-top').click(function () {
        var scroll = $(window).scrollTop(); //スクロール値を取得
        if(scroll > 0){
            $(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
            $('body,html').animate({
                scrollTop: 0
            }, 2000,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
                $('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
            });	
        }
        return false;//リンク自体の無効化
    });
});


// gsap
gsap.registerPlugin(ScrollTrigger);

gsap.from('.kuma-look', {
    x: '70px',
    duration: 1,
    
    scrollTrigger: {
      trigger: '.kuma-look',
      start: 'center center+=100',
    }
  });

document.querySelectorAll(".fadeup").forEach((item) => {
    gsap.from(
      item,
      {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: 'top center+=100',
          toggleActions: "play none none none", //繰り返し onEnter, onLeave, onEnterBack, onLeaveBack,
        },
      },
    );
  });
  gsap.from(".kuma-cooking", {
    y: 10,
    duration: 0.5,
    repeat: -1, // 無限に繰り返し
    repeatDelay: 0, // 繰り返し時に0.5秒の待機,
    yoyo: true, // 反転
  });
  gsap.from('.kuma-light', {
    y: '50px',
    duration: 0.5,
    opacity: 0,
    ease: "back.out(4)",
    
    scrollTrigger: {
      trigger: '.kuma-light',
      start: 'center center+=100',
    }
  });

  gsap.from(".bird", {
    rotation: 5,
    y: 5,
    x: 5,
    duration: 2,
    repeat: -1, // 無限に繰り返し
    repeatDelay: 0, // 繰り返し時に0.5秒の待機,
    yoyo: true, // 反転
    ease: "Power1.easeInOut"
  });
  gsap.to('.car', {
    left: -150,
    
    scrollTrigger: {
      trigger: '.car',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
