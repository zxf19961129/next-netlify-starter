// 图片浮动效果
$(document).ready(function() {
    setInterval(function() {
        $('.right-panel img').animate({right: '+=40px'}, 2000, 'swing').animate({right: '-=40px'}, 2000, 'swing');
    }, 4000);
});
