myApp.controller("homeCtrl",function($scope,$stateParams,$state){
  document.getElementById("option1").addEventListener("click", function(){
    console.log("option1");
  });
  document.getElementById("option2").addEventListener("click", function(){
    console.log("option2");
  });
});//closing
///////////////
// jQuery /////
///////////////
$( document ).ready(function() {
  var clickBool = false;
  $('.pop-out-menu').hide();
  $('.material-icons').on('click',function(){
    console.log("fired");
    if(clickBool){
      $('.pop-out-menu').show('animated');
      clickBool = !clickBool;
    }else{
      $('.pop-out-menu').hide('animated');
      clickBool = !clickBool;
    }
  });
  $("#close").on("click",function(){
    $('.pop-out-menu').hide('animated');
    clickBool = !clickBool;
  });
});
///////////////
// jQuery /////
///////////////
