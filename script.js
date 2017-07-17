$('div.site-header').html("<nav class='site-navigation'> \
  <a href='home.html' class='navlink' id='home-nav'>Home</a>\
  <a href='aboutme.html' class='navlink' id='about-me-nav'>About Me</a>\
  <h2 class='navlink' id='web-title'><a href='home.html' >Jesse's Blog</a></h2>\
  <a href='games.html' class='navlink' id='games-nav'>Games</a>\
  <a href='gallery.html' class='navlink' id='gallery-nav'>Gallery</a>\
</nav>");




$('a.navlink').mouseenter( function (){$(this).fadeTo(100, 1)}).mouseleave( function (){$(this).fadeTo(200, 0.5)});
$('#submit-button').click(submitButtonFadeAnimation);

function submitButtonFadeAnimation(){
  $('#submit-button').fadeTo(50, 0.65);
  $('#submit-button').fadeTo(100, 1);
}

function placeCommentBoxOnPage(){
  $("<section class='new-comment'><h3 class='new-comment-username'></h3><p class='new-comment-content'></p></section>").appendTo('.insert-comments');
}

var newCommentArray = [0];
var newUserNameArray = [0];
var newContentArray = [0];
function changeClass(){
  if ( $('.new-comment')[0]){
    $('.new-comment').removeClass().addClass('new-comment' + "-" + (newCommentArray.length - 1));
    newCommentArray.push(0);
  }
  if ( $('.new-comment-username')[0]){
    $('.new-comment-username').removeClass().addClass('new-comment-username' + "-" + (newUserNameArray.length - 1));
    newUserNameArray.push(0);
  }
  if ( $('.new-comment-content')[0]){
    $('.new-comment-content').removeClass().addClass('new-comment-content' + "-" + (newContentArray.length - 1));
    newContentArray.push(0);
  }
}

function addComment(){
  var newUserName = $('#user-name-input').val();
  var newUserComment = $('#user-comment-input').val();
  placeCommentBoxOnPage();
  $('.new-comment-username').text(newUserName);
  $('#user-name-input').val('');
  $('.new-comment-content').text(newUserComment);
  $('#user-comment-input').val('');
  changeClass();
}

function handleKey(event){
  if (event.keyCode == 13) {
    addComment();
    submitButtonFadeAnimation();
    return false;
  }
}

function submitComment (){
  $('#submit-button').click(addComment);
  $('.compose-comment').on('keypress', handleKey);
}

$(document).ready(submitComment);
