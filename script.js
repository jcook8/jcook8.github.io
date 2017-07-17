$('a.navlink').mouseenter( function (){$(this).fadeTo(100, 1)}).mouseleave( function (){$(this).fadeTo(200, 0.5)});
$('#submit-button').click(submitButtonFadeAnimation);

// mouseenter( function (){$(this).fadeTo(100, 1)}).mouseleave( function (){$(this).fadeTo(200, 0.8)})
function submitButtonFadeAnimation(){
  $('#submit-button').fadeTo(50, 0.65);
  $('#submit-button').fadeTo(100, 1);
}

function placeCommentOnPage(){
  $('#insert-comments').append().html("<section class='new-comment'><h3 class='new-comment-username'></h3><p class='new-comment-content'></p></section>");
}

function changeClass(){
  $('.new-comment').removeClass().addClass('listed-comment');
  $('.new-comment-username').removeClass().addClass('listed-comment-username');
  $('.new-comment-content').removeClass().addClass('listed-comment-content');
  for (var i = 0; i < $('listed-comment').length; i++){
    return i;
  }
  $('.listed-comment').removeClass().addClass('listed-comment' + "-" + String(i));
}

function changeClassIncrementationSoThatNewCommentsGetTheirOwnSection(){
  for (var i = 0; i < $('.listed-comment').length; i++){
//    var newCommentClassNumber = "listed-comment" + '-' + String(i);
//    var newCommentClass = "'" + newCommentClassNumber + "'";
    return i;
  }
}

function addComment(){
  var newUserName = $('input.compose-comment').val();
  var newUserComment = $('textarea.compose-comment').val();
  placeCommentOnPage();
  changeClass();
  changeClassIncrementationSoThatNewCommentsGetTheirOwnSection();
  $('.listed-comment-username').append(newUserName);
  $('.listed-comment-content').append(newUserComment);
}

function handleKey(event){
  if (event.keyCode == 13) {
    addComment();
    submitButtonFadeAnimation();
    event.preventDefault();
  }
}

function submitComment (){
  $('#submit-button').click(addComment);
  $('#compose-comment').on('keypress', handleKey);
}

$(document).ready(submitComment);
