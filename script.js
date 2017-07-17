$('a.navlink').mouseenter( function (){$(this).fadeTo(100, 1)}).mouseleave( function (){$(this).fadeTo(200, 0.5)});
$('#submit-button').click(submitButtonFadeAnimation);

function submitButtonFadeAnimation(){
  $('#submit-button').fadeTo(50, 0.65);
  $('#submit-button').fadeTo(100, 1);
}

function placeCommentBoxOnPage(){
  $("<section class='new-comment'><h3 class='new-comment-username'></h3><p class='new-comment-content'></p></section>").appendTo('#insert-comments');
}

var commentNumberArray = [0];
function changeClass(){
  if ( $('.new-comment')[0]){
    $('.new-comment').removeClass().addClass('new-comment' + "-" + (commentNumberArray.length - 1));
    commentNumberArray.push(0);
  }
  if ( $('.new-comment-username')[0]){
    $('.new-comment-username').removeClass().addClass('new-comment-username' + "-" + (commentNumberArray.length - 1));
    commentNumberArray.push(0);
  }
  if ( $('.new-comment-content')[0]){
    $('.new-comment-content').removeClass().addClass('new-comment-content' + "-" + (commentNumberArray.length - 1));
    commentNumberArray.push(0);
  }
}

function addComment(){
  var newUserName = $('#user-name-input').val();
  var newUserComment = $('#user-comment-input').val();
  placeCommentBoxOnPage();
  $('.new-comment-username').append(newUserName);
  $('.new-comment-content').append(newUserComment);
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
  $('#compose-comment').on('keypress', handleKey);
}

$(document).ready(submitComment);
