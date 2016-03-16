// $(document).ready(function () {
//            var totalItems = $('.item').length;
//            var currentIndex = $('div.active').index() + 1;
//            $('.num').html('' + currentIndex + '/' + totalItems + '');
//
//            $('#myCarousel').bind('slid.bs.carousel', function () 
//			{
//                currentIndex = $('div.active').index() + 1;
//                $('.num').html('' + currentIndex + '/' + totalItems + '');
//            });
//        });

 $(document).ready(function () 
{
    var currentIndex = $('div.active').index();
	updateDescription(currentIndex);
			
    $('#myCarousel').bind('slid.bs.carousel', function () 
	{
        currentIndex = $('div.active').index();
		updateDescription(currentIndex);
    });
			
//	$(window).on('resize', function () 
//	{
//		var winHeight = $(window).height();
//		$('.vertical-align-center').css('margin-top', winHeight + "px"); //set max height				
//	}).resize();
	
});