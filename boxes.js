$(document).ready(function() {
  alert("Ready for DOM Manipulation!");

  $('#secretBox').css("background-color", "white");
  $('#secretBox').append('<h1>secret box!</h1>');
  $('#row1 > div').removeClass("boxType1 boxType2");
  $('#row1 > div').addClass("boxType3");
  $('#row4 > div').last().css("display", "none");
  $('.boxType1').css("background-color", "white");
  $('#row2 > div').first().removeClass("boxType2");
  $('#row2 >div:eq(1)').removeClass("boxType3");
  $('.box').not('#secretBox').css("width", "2px");

  $('body > div').on('click', function() {
    console.log(event.pageX);
    console.log(event.pageY);
  });


  $('.boxType1').wrap("<a href='http://www.galvanize.com'></a>");
  $('a').on('click', function() {
    alert("You can't leave this page! Mwahaha");
    return false;
  });

  $('.box').on('click', function() {
    if ($(this).hasClass('clicked')) {
      $(this).css("background-image", "");
      $(this).removeClass('clicked');
    } else {
      $(this).css("background-image", "url(http://www.placekitten.com/155/155)");
      $(this).addClass('clicked');
    }
  });

  $(this).on('click', function() {
    if ($(this).height() < '200px') {
      $(this).css('background', 'white');
      $(this).parent().parent().css('background', 'black');
    } else {
        $(this).css('background', 'limegreen');
      }
  });
});
