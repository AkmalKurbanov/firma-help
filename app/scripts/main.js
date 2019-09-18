(function ($) {
  $(window).on('load', function () {
    $('.modalScroll-js').mCustomScrollbar({
      scrollButtons: {
        enable: true
      }
    });
  });
})(jQuery);



$('.agree-js').on('click', function () {
  $('#offer').hide();
});
$('.agree-js2').on('click', function () {
  $('#confidentiality').hide();
});
$('.agree-js3').on('click', function () {
  $('#agree').hide();
  Cookies.set('modal', 'show', {expires: 7});
  $('body').removeClass('bodyScroll');
});

if (!Cookies.get('modal')) {
  $('.modal-agree').show();
  $('body').addClass('bodyScroll');
}






