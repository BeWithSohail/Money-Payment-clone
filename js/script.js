$(document).ready(function() {
   // Banner Height as per window height Home Page
       var window_height = $(window).height();
         $('.banner-bg') .css({'height': ($(window_height))});
         $(window).bind('resize', function(){
         $('.banner-bg') .css({'height': ($(window).height())});
        });

    // Phone Verification if input value is less than 6 or greater than 6
    $('.field-otp-section input').on('input change', function() {
        if($(this).val().length >= 6) {
            $('#btn-verify').prop('disabled', false);
        } else {
            $('#btn-verify').prop('disabled', true);
        }
    });
    $('.field-otp-section2 input').on('input change', function() {
        if($(this).val().length >= 6) {
            $('#btn-verify2').prop('disabled', false);
        } else {
            $('#btn-verify2').prop('disabled', true);
        }
    });

    // Phone Verification if input value is less than 6 or greater than 6
    $('.btn-check-eligibilty').click(function(){    
        var input_value = $('.check-eligibilty-section input');   
        if(input_value.length !== 10){
            alert("Please enter valid 10 digit mobile number");
        }
        location.href = 'offers.html';     
    });

        // footer scroll to top animation
         $('#ScrollTop').click(function() {
            $("html, body").animate({ scrollTop: 0 }, 4000);
            return false;
        });
    

        // Append second modal on first modal 
           $("#show-second-generate-modal").click(function(){
           $('#phone-verification').modal('hide');
           $('#phone-verification-resent-otp').modal('show');
          });

          //Scroll Top Next Section 
            $("#got-to-top").click(function() {
                $('html, body').animate({
                    scrollTop: $("#section-2-scrolltop").offset().top
                }, 1000);
            });

}); 
