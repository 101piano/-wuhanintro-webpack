
var $=require('jquery');

var Carousel=require('../tools/carousel.js'),
    LazyLoad=require('../tools/lazyload.js'),
    GoTop=require('../tools/gotop.js'),
    GoWhere=require('../tools/gowhere.js'),
    WaterFall=require('../tools/waterfall.js');

  new GoTop();
  
  new Carousel($('#header .carousel'));
  LazyLoad.init($('.historical-sites ul img').not('.loaded'),function($img){
    showImg($img);
  });
  LazyLoad.init($('.historical-sites ul p').not('.loaded'),showText);
  
  GoWhere.init($('.loadmore'),$('.three-towns'));
  GoWhere.init($('.navul li').eq(0),$('.three-towns'));
  GoWhere.init($('.navul li').eq(1),$('.snacks'));
  GoWhere.init($('.navul li').eq(2),$('.historical-sites'));
  GoWhere.init($('.navul li').eq(3),$('.events'));
  GoWhere.init($('.navul li').eq(4),$('.contacts'));

  var parameters={
    pageIndex:1,
    pageCount: 8
  };
 
 new WaterFall(parameters,$('.container'));
  
  
  
  function showImg($img){
    var imgUrl=$img.attr('data-src');
    $img.attr('src',imgUrl);
    $img.addClass('loaded');
  }
  
  function showText($text){
    $text.animate({
      'opacity': 1
    },500);
    $text.addClass('loaded');
  }

  








