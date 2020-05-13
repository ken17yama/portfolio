$(window).load(function () {
  //ローディング
  $(".case").css("display", "block");
  $("#load")
    .delay(1500)
    .queue(function (next) {
      $(this).css("opacity", "0");
      $('#container').removeClass('stop');
      next();
    });
  $("#load")
    .delay(1000)
    .queue(function (next) {
      $(this).css("display", "none");
      next();
    });
});

$(function () {
  if (
    DeviceMotionEvent &&
    DeviceMotionEvent.requestPermission &&
    typeof DeviceMotionEvent.requestPermission === 'function'
  ) {
    DeviceMotionEvent.requestPermission();
  }
  if (
    DeviceOrientationEvent &&
    DeviceOrientationEvent.requestPermission &&
    typeof DeviceOrientationEvent.requestPermission === 'function'
  ) {
    DeviceOrientationEvent.requestPermission();
  }

  // パララックス
  var scene = document.getElementById("scene");
  var parallax = new Parallax(scene, {
    scalarX: 2, //レイヤーの横移動の幅
    scalarY: 2, //レイヤーの縦移動の幅
    frictionX: 0.2, //移動の速度 0～1
    frictionY: 0.2, //移動の速度 0～1
    originX: 0.5, //マウス入力の横軸初期値,デフォルト0.5
    originY: 0.8 //マウス入力の縦軸初期値,デフォルト0.5
  });

  $(window).scroll(function () {
    $(".fade").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5) {
        $(this).addClass("active");
      }
    });
  });

  $(window).scroll(function () {
    var treePos = $('.stage3-tree').offset().top;
    var cardPos = $('.stage4-card').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > treePos - windowHeight + windowHeight / 2) {
      $(".stage3-tree").each(function (i) {
        var delay = 100;
        var $this = $(this);
        $this.delay(i * delay).queue(function (next) {
          $this.addClass("active");
          next();
        });
      });
    }
    if (scroll > cardPos - windowHeight + windowHeight / 2) {
      $(".stage4-card").each(function (i) {
        var delay = 100;
        var $this = $(this);
        $this.delay(i * delay).queue(function (next) {
          $this.addClass("active");
          next();
        });
      });
    }
  });

});
