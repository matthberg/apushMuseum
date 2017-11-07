$(document).ready(function(){
    $("figure").click(function(){
        $(this).removeClass("small").addClass("fill").attr('id','active');
    });
});