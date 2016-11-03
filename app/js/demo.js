(function($) {
      "use strict";

      $(document).ready(function(){
      
               $('#demo-wrapper ul li, #demo-wrapper p').click(function(){
                         var color_scheme = $(this).attr('data-path');
                         $('#color-switcher').attr('href',color_scheme);
               });
               
               $('#open-switcher').click(function(){
                         $('#open-switcher').css("display","none");
                         $('#demo-colors').animate({ 'left': '0px' }, 200, 'linear', function(){
                                   $('#close-switcher').fadeIn(200);
                         });
               });
               
               $('#close-switcher').click(function(){
                         $('#close-switcher').css("display","none");
                         $('#demo-colors').animate({ 'left': '-202px' }, 200, 'linear', function(){
                                   $('#open-switcher').fadeIn(200);
                         });
               });

      });

})(jQuery);
