$(".flip").click(function(){
    $(this).parents(".card").toggleClass("flipped");
  });
  $(".clickcard").click(function(){
    $(this).toggleClass("flipped");
  });