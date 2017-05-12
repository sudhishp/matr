(function () {
  "use strict";
  $(document).ready(function () {
      var profileDetail = $('.profile-detail'),
        result = $('.result');
    $('.overlay').toggleClass('hide');
    $('#view-profile').click(function(){
     $(".container").addClass('hide');
        $('.profile-wrap').toggleClass('hide');
     
    });
    $('#checker').click(function(){
        $('.loader').toggleClass('hide');
      $('.loader').addClass('open');
      $('.modal').dialog('close');
      setTimeout(function(){
          $('.loader').removeClass('open');
          result.removeClass('hide');
      }, 1000);
    });
    $('#successBtn').click(function(){
        profileDetail.addClass('success');
        $('.overlay').addClass('hide');
        result.addClass('hide');
    });
    $('#validate').click(function(){
        $('.overlay').toggleClass('hide');
      $('.modal').dialog();
    });
 });
})($);