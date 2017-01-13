$(document).ready(function(){

   var $tweetControls = $('#tweet-controls');
   var $tweetCompose = $('.tweet-compose');
   var $charCount = $('#char-count');
   var $tweetButton = $('#tweet-submit');
   var $tweetWindow = $('#stream');
   var $tweetText = $tweetCompose.val();
   var $tweetActions = $('.tweet-actions');
   var $theTweet = $('#tweet');

   var charCount; 
   var newTweet = {};

   $tweetControls.hide();
   $tweetActions.hide();
   $tweetCompose.on('click', function(){
      $tweetControls.fadeIn('fast', 'linear');
   });

   $theTweet.on('hover', function(){
      $tweetActions.show();
   });


   $tweetCompose.on('keyup', function(e){
      charCount = $tweetText.length;
      $tweetText = $tweetCompose.val();
      
      $charCount.html(140-charCount);
      if(charCount > 140){
         $charCount.addClass('warning-color');
         $tweetButton.prop('disabled', true);
      } else {
         $charCount.removeClass('warning-color');
         $tweetButton.prop('disabled', false);
      }
      console.log(charCount);
   });

   $tweetButton.on('click', function(){
      $tweetWindow.prepend('<div class="tweet">'+
			'<div class="content">'+
				'<img class="avatar" src="img/alagoon.jpg" />'+
				'<strong class="fullname">John Person</strong>'+
				'<span class="username">@MrPersonMan</span>'+
            '<p class="tweet-text">' + $tweetText + '</p>'+
            '<div class="tweet-actions">'+
               '<ul>'+
                  '<li><span class="icon action-reply"></span> Reply</li>'+
                  '<li><span class="icon action-retweet"></span> Retweet</li>'+
                  '<li><span class="icon action-favorite"></span> Favorite</li>'+
                  '<li><span class="icon action-more"></span> More</li>'+
               '</ul>'+
            '</div>'+
            '<div class="stats">'+
               '<div class="retweets">'+
                  '<p class="num-retweets">30</p>'+
                  '<p>RETWEETS</p>'+
               '</div>'+
               '<div class="favorites">'+
                  '<p class="num-favorites">6</p>'+
                 '<p>FAVORITES</p>'+
               '</div>'+
								'<div class="users-interact">'+
									'<div>'+
										'<img src="img/alagoon.jpg" />'+
										'<img src="img/vklimenko.jpg" />'+
									'</div>'+
								'</div>'+
								'<div class="time">'+
									'1:04 PM - 19 Sep 13'+
								'</div>'+
							'</div>'+
							'<div class="reply">'+
								'<img class="avatar" src="img/alagoon.jpg" />'+
								'<textarea class="tweet-compose" placeholder="Reply to'+'@mybff"/></textarea>'+
							'</div>'+
						'</div>'+
					'</div><!-- .tweet -->'
               );
      $tweetActions.hide();
   });


});