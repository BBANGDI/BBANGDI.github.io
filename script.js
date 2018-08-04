$(document).ready(function(){
    $("#example").click(function(){
        $(this).next("ul").toggleClass("hide");
    });
});
