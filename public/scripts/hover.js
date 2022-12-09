$(document).ready(function () {


  var originalColors = [];

  // Changes color on hover
      $(function() {
          $('.icon1').hover(function(){
              originalColors[$(this).index('.icon1')] = $(this).css('color');
              $(this).css('color', 'white');
          },
          function(){
             $(this).css('color', originalColors[$(this).index('.icon1')]);
          });
      });


      var originalColors = [];

      // Changes color on hover
          $(function() {
              $('.icon2').hover(function(){
                  originalColors[$(this).index('.icon2')] = $(this).css('color');
                  $(this).css('color', 'white');
              },
              function(){
                 $(this).css('color', originalColors[$(this).index('.icon2')]);
              });
          });
    

          var originalColors = [];

          // Changes color on hover
              $(function() {
                  $('.icon3').hover(function(){
                      originalColors[$(this).index('.icon3')] = $(this).css('color');
                      $(this).css('color', 'white');
                  },
                  function(){
                     $(this).css('color', originalColors[$(this).index('.icon3')]);
                  });
              });
        

})