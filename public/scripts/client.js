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
    }
  }


  $("#new-tweet-form").on("submit", function (event) {
    event.preventDefault();
    var serializedData = $(this).serialize();
    console.log(serializedData);

    if (serializedData.length > 145 || serializedData.length === 5) {
      $('#errormessage').slideDown('slow')
    } else {
      $('#errormessage').slideUp('slow')
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
  });

  $("#load-more-tweets").on('click', function () {
    console.log('Button clicked, performing ajax call...');
    const request = $.ajax('/tweets', { method: 'GET' });
    request.done(function (initialtweetsjson) {
      renderTweets(initialtweetsjson);
    });
  });


});

