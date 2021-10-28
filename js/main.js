// 'use strict';

// for IE11
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

(function ($) {

  // scrollPos スクロール位置を記憶しておく
  var scrollPosMenuSp,scrollPosMenuSp2;
  $(window).on('load scroll',function(){
    scrollPosMenuSp = $(this).scrollTop();
  });

  // js-hamButton js-fixedLogo
  // 200pxスクロールしたらハンバーガーボタンとロゴに　-is-fixed をつけて固定
  const $hamButton = $('.js-hamButton');
  const $fixedLogo = $('.js-fixedLogo');
  $(window).on("load scroll",function(e){
    const $scrollVal = $(window).scrollTop();
    const isHome = $('body').hasClass('home');

    const docHeight = $(document).height();
    const dispHeight = $(window).height();
    const dispHeightHalf = $(window).height() / 2;

    if( !isHome ){
      if ($scrollVal > 200) {
        fixedHeaderShow();
      } else {
        fixedHeaderHide();
      }
    }else{
      if($scrollVal > $(window).innerHeight()) {
        fixedHeaderShow();
      } else {
        fixedHeaderHide();
      }
    }

    function fixedHeaderShow(){
      if($scrollVal > docHeight-dispHeight-dispHeightHalf-200) {
        $fixedLogo.removeClass('-is-fixed').fadeOut();
      } else {
        $hamButton.addClass('-is-fixed').fadeIn();
        $hamButton.find('.hamButtonA').fadeIn();
        $fixedLogo.addClass('-is-fixed').fadeIn();
      }
    }
    function fixedHeaderHide(){
      $hamButton.find('.hamButtonA').hide();
      $hamButton.removeClass('-is-fixed').fadeOut();
      $fixedLogo.removeClass('-is-fixed').fadeOut();
    }

  });


  // ハンバーガーボタンをクリックしたらメニューを開く
  const $hamButtonA = $('.js-hamMenu').find('.hamButtonA');
  const $hamButtonAMenu = $('.js-hamButtonMenu').find('.hamButtonA');

  $hamButtonA.on('click', function(){
    if ($hamButtonA.hasClass('-is-open')) {
      $('body').css('overflow','auto');
      if(!$('#wrapper').length){
        $('.js-scroll-container').wrap('<div id=wrapper>');
      }
      $('#wrapper').css('position','');
      $('#wrapper').css('top','');
      $('#wrapper').css('width','auto');
      $(window).scrollTop(scrollPosMenuSp2);

      $hamButtonAMenu.removeClass('-is-open');
      $('.hamMenu').removeClass('-is-open');
      $hamButtonA.removeClass('-is-open');
      $('.hamMenuBg').fadeOut('fast');
    } else {
      $('body').css('overflow','hidden');
      $('#wrapper').css('position','fixed');
      scrollPosMenuSp2 = scrollPosMenuSp;
      let hWsize = $(window).width();
      $('#wrapper').css('top','-'+scrollPosMenuSp+'px').css('width',hWsize);

      if (!$hamButtonAMenu.hasClass('-is-open')) {
        $hamButtonAMenu.addClass('-is-open');
      }

      $hamButtonA.addClass('-is-open');
      $('.hamMenu').addClass('-is-open');
      $('.hamMenuBg').fadeIn('fast');
    }
    return false;
  });

  // メニュー内のハンバーガーボタンをクリックしたらメニューを閉じる
  $hamButtonAMenu.on('click', function(){
    hamMenuClose();
    return false;
  });

  // hamMenuLv1_a、hamMenu_aをクリックしたらメニューを閉じる
  $('.js-hamMenuWin .hamMenuLv1_a, .js-hamMenuWin .hamMenu_a, .hamMenuBg').on('click', function(){
    hamMenuClose();
  });

  // .hamMenu のメニューを閉じる
  function hamMenuClose(){
    $('body').css('overflow','auto');
    $('#wrapper').css('position','');
    $('#wrapper').css('top','');
    $('#wrapper').css('width','auto');
    $(window).scrollTop(scrollPosMenuSp2);

    $hamButtonAMenu.removeClass('-is-open');
    $hamButtonA.removeClass('-is-open');
    $('.hamMenu').removeClass('-is-open');
    $('.hamMenuBg').fadeOut('fast');
  }


  // スマホ表示でメニュー内の＋をタップで下層が表示される
  $('.js-hamMenuAcc .hamMenu_dtA').on('click', function(){
    if ($(this).parents('.hamMenu_block').hasClass('-is-open')) {
      $(this).parents('.hamMenu_block').removeClass('-is-open');
      $(this).parents('.hamMenu_dt').next('.hamMenu_dd').slideUp('fast');
    } else {
      $(this).parents('.hamMenu_block').addClass('-is-open');
      $(this).parents('.hamMenu_dt').next('.hamMenu_dd').slideDown('fast');
    }
    return false;
  });

  // IE11でもstickyを効かせる
  let elements = $('.js-sticky');
  Stickyfill.add(elements);

  // .js-sideTabの高さ半分を上方にマイナスして縦中央に合わせる等の位置調整
  const $sideTab = $('.js-sideTab');
  const $sideTabH = ($sideTab.innerHeight() / 2);
  $sideTab.find('.sideTab').css('margin-top', -$sideTabH );
  $('.contentsArea .contentsArea_side').css('padding-top', $sideTabH );

  // sideMenu
  // .js-sideMenuの高さ半分を上方にマイナスして縦中央に合わせる等の位置調整
  const $sideMenu = $('.js-sideMenu');
  const $sideMenuH = ($sideMenu.innerHeight() / 2);
  $sideMenu.find('.sideMenu').css('margin-top', -$sideMenuH );
  $('.contentsArea .contentsArea_side').css('padding-top', $sideMenuH );
  // 200pxスクロールしたら.js-sideMenuをフェードイン
  $(window).on("load scroll",function(e){
    const $scrollVal = $(window).scrollTop();
    const isHome = $('body').hasClass('home');

    if( !isHome ){
      if ($scrollVal > 200) {
        $sideMenu.addClass('-is-show');
      } else {
        $sideMenu.removeClass('-is-show');
      }
    }else{
      if ($scrollVal > $(window).innerHeight() ) {
        $sideMenu.addClass('-is-show');
      } else {
        $sideMenu.removeClass('-is-show');
      }
    }
  });

  // .js-sideMenuのリンクをクリック該当箇所にスクロール
  var navLink = $('.sideMenu .sideMenu_content .sideMenu_a');
  var contentsArr = new Array();
  function currentCheck() {
    let windowScrolltop = $(window).scrollTop();
    for (var i = 0; i < contentsArr.length; i++) {
      if(contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
        navLink.parents('.sideMenu_content').removeClass('-current');
        navLink.eq(i).parents('.sideMenu_content').addClass('-current');
        i == contentsArr.length;
      }
    };
  }
  $(window).on('load resize scroll', function() {
    for (var i = 0; i < navLink.length; i++) {
      let targetContents = navLink.eq(i).attr('href');
      if(targetContents.charAt(0) == '#') {
        let targetContentsTop = $(targetContents).offset().top - 50;
        let targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
        contentsArr[i] = [targetContentsTop, targetContentsBottom]
      }
    };
    currentCheck();
  });
  navLink.click(function() {
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

  // トップページの動き
  if ($('body').hasClass('home')) {
    $('.js-splash').find('.splash_line').addClass('-is-show');

    setTimeout(function(){
      $('.js-splash').find('.splash_image').addClass('-is-hide');
    },800);

    setTimeout(function(){
      $('.js-splash').addClass('-is-hide');

      $('.header_nav, .header_logo').addClass('-is-show');
      $('#jsFvScroll').addClass('-is-show');
    },1600);

    $('.js-pageLoadedRequireImage').delay(1600).queue(function(next) {
      $('.js-pageLoadedRequireImage').get(0).play();
      next();
    });

  }

  // 下層ページのメインビジュアルを表示
  $('.js-mainVisual').addClass('-is-show');
  $('.js-skewIn').addClass('-is-show');


  // IEの右固定メニュー
  // スムーススクロールを切るとガタつく

  // if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
  // $('body').on("mousewheel", function () {
  // event.preventDefault();
  //   let wd = event.wheelDelta;
  //   let csp = window.pageYOffset;
  //   window.scrollTo(0, csp - wd);
  // });
  // }

})(jQuery);
