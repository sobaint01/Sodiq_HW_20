$("#project").hover( function(){
   $(".navChildproject").slideToggle();
});

$("#about").hover( function(){
  $(".navChildabout").slideToggle();
});

$("#resume").hover( function(){
  $(".navChildresume").slideToggle();
});

$("#contact").hover( function(){
  $(".navChildcontact").slideToggle();
});

$("#searchIcon").hover ( function(){
  $(".searchform").css("display","flex" );
  
});

$("#formCloser").onClick ( function(){
  $("searchform").css("display","none" );
  
});
//burger toggle

//$(".burgerIcon").on("click")( function(){
 //$(".navChildburger","display","flex").slideToggle();
//});

//$("button").click( function(){
 // $('.animate').animate( {left: '250px'}, 1000 );
//});

