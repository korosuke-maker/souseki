// swiperのスライダーオプション
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',

  // ブラウザ幅によって表示するスライドの枚数や余白を調整する
  // ウィンドウサイズPC時
  // slidesPerView: 3,
  spaceBetween: 20,

  breakpoints:{
    // ウィンドウサイズが768px以上（sp時）
    768: {
      spaceBetween: 40
    },
    // ウィンドウサイズが1200px以上（tab時）
    1200: {
      spaceBetween: 40
    }
  },

  // 一度に表示するスライドの数を指定
  // 自動でうごかす
  autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
		reverseDirection: false,
	},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: 'null',
  },
});


// Q&Aアコーディオン BOXの開閉とiconの挙動
jQuery('.qa-box__q').on('click',function(){
  jQuery(this).next('.qa-box__a').slideToggle(300);
  // iconのバックグラウンドをクリック時に変更する（+ → -）
  jQuery(this).children('.qa-box__icon').toggleClass('is-open');
});

// Q&Aアコーディオン ロード時に1番目と2番目だけ開いておく
jQuery(window).on('load',function(){
  jQuery('.qa__item:first-child .qa-box__a , .qa__item:nth-child(2) .qa-box__a').css('display','block');
  jQuery('.qa__item:first-child .qa-box__icon , .qa__item:nth-child(2) .qa-box__icon').addClass('is-open');
});


//スクロールによって少ししたからふわっと要素出現させる
$(window).scroll(function(){
  $('.scroll-animation').each(function(){
    var scroll = $(window).scrollTop();
    var blockPosition = $(this).offset().top;
    var windowHeight = $(window).height();
    if(scroll > blockPosition - windowHeight + 150){
      $(this).addClass('block-in');
    };
  });


  $('.animation-fadeIn').each(function(){
    var scroll = $(window).scrollTop();
    var blockPosition = $(this).offset().top;
    var windowHeight = $(window).height();
    if(scroll > blockPosition - windowHeight + 150){
      $(this).addClass('fadeIn');
    };
  });
  
});

// main-visualの文に関しては、DOMの読み込みが完了したら、mainvisualの要素をfadeInさせる。
$(document).ready(function () {
  $('.mainvisual__content').addClass('fadeIn');
});

// PC時header__navのスムーススクロール
jQuery('a[href^="#"]').on('click',function(){
  var header = jQuery('.header').innerHeight();
  var id =jQuery(this).attr('href');
  var position = 0;
  if(id !='#'){
    var position =jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
     scrollTop:position
   },
   400);
});

//to-topスクロール量によって、出現を制御
jQuery(window).on('scroll',function(){
  if(jQuery(this).scrollTop() > 100){
    jQuery('.to-top').addClass('is-show');
  }else{
    jQuery('.to-top').removeClass('is-show');
  }

});

// スマホ時ハンバーガーメニューの動き
jQuery('.drawer-icon, .drawer-content__item , .drawer-background').on('click',function(e){
  e.preventDefault();

  // iconをバツ印に
  jQuery('.drawer-icon').toggleClass('is-active');
  // contentを表示
  jQuery('.drawer-content').toggleClass('is-active');
  // backgroundを表示
  jQuery('.drawer-background').toggleClass('is-active');
  //背景を固定
  jQuery('html,body').toggleClass('is-fixed');

  return false;
});



// プライバシーポリシーモーダル

// 開く時の動き
jQuery('.js-open-modal').on('click',function(e){
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).show();
  jQuery('.modal-privacy__content').scrollTop(0);
  jQuery('body, html').css('overflow','hidden');
});

// 閉じる時の動き

jQuery('.js-close-modal').on('click',function(e){
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).hide();
  jQuery('body,html').removeAttr('style');
});


