/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}



// Test / driver code (temporary)
$(document).ready(function () {


  const createTweetElement = function (tweet) {
    let $tweet = `     
    <article class="tweet">
    <header class="tweet-header">
      <div class="avatar-container">
        <img class="avatar" src=${tweet.user.avatars}>
        <p>${tweet.user.name}</p>
      </div>
      <p>${tweet.user.handle}</p>
    </header>
    <p>${tweet.content.text}</p>
    <footer class="tweet-footer">
      <p>${tweet.created_at}</p>
      <div class="icon-container">
        <div class="icon1">
          <i class="fa-solid fa-flag"></i>
        </div>
        <div class="icon2">
          <i class="fa-solid fa-heart"></i>
        </div>
        <div class="icon3">
          <i class="fa-solid fa-retweet"></i>
        </div>
      </div>
    </footer>
    </article> 
    `

    return $tweet;
  }



  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      $('.tweets').prepend(createTweetElement(tweet));
      $('textarea').filter('[id*=tweet-text]').val('');

    }
  }


  $("#new-tweet-form").on("submit", function (event) {
    event.preventDefault();
    var serializedData = $(this).serialize();
    console.log(serializedData);

    if (serializedData.length > 145) {
      $('#errormessage1').slideDown('slow')
      $('#errormessage2').slideUp('slow')
    }else if (serializedData.length === 5) {
      $('#errormessage2').slideDown('slow')
      $('#errormessage1').slideUp('slow')
    }
    else {
      $('#errormessage1').slideUp('slow')
      $('#errormessage2').slideUp('slow')
      let tweet = {};
      tweet["user"] = {
        "name": "Taylor",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@taylorHandle"
      };
      tweet["content"] = {
        "text": serializedData.substring(5)
      }
      tweet["created_at"] = timeago.format(Date.now());
      renderTweets([tweet]);
    }

      $(function() {
    $('.tweet').hover(function(){
        $(this).css('box-shadow', '5px 10px');
    },
    function(){
        $(this).css('box-shadow', '');
    });
});

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
  });

  $("#load-more-tweets").on('click', function () {
    console.log('Button clicked, performing ajax call...');
    const request = $.ajax('/tweets', { method: 'GET' });
    request.done(function (initialtweetsjson) {
      renderTweets(initialtweetsjson);
    });
  });


});

