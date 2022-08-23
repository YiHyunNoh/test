$(document).ready(function() {
   $('main').pagepiling();

   const bcolor = ['#ef652a','#264de4','#ffde25',
   '#0868ac','#001e36','#ff9a00'];

   $('.main_skill li').each(function(i) {
      $(this).easyPieChart({
         trackColor : '#dedede', barColor : bcolor[i], 
         scaleColor : 'transparent', size : 250, lineWidth : 30,
         lineCap : 'butt', animate : 5000,
      });
   });

   $('#graphic2 ul').masonry({
      itemSelector: '#graphic2 li',
      //columnWidth: 50
      //horizontalOrder : true
      fitWidth: true
   });

   $('#coding ul').slick({
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: true,
      centerMode: true
   });

   lightbox.option({
      fitImagesInViewport: false,
      disableScrolling: true,
      wrapAround: true
   });
});
