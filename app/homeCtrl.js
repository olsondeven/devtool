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
  var menClickBoo = false;
  $('.pop-out-menu').hide();
  $('.material-icons').on('click',function(){
    // console.log("fired");
    if(menClickBoo){
      $('.pop-out-menu').show('animated');
      menClickBoo = !menClickBoo;
    }else{
      $('.pop-out-menu').hide('animated');
      menClickBoo = !menClickBoo;
    }
  });
  $("#close").on("click",function(){
    $('.pop-out-menu').hide('animated');
    menClickBoo = !menClickBoo;
  });
});
///////////////
// jQuery /////
///////////////
