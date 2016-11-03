google.load("jquery", "1.3.1");
google.setOnLoadCallback(function()
{
    // Apply some CSS3 to keep the CSS file CSS 2.1 valid
    $("h1").css("text-shadow", "0px 2px 6px #000");
    $("h2 a").css("text-shadow", "0px 2px 6px #000");

    // Color changer
    $(".colorpink").click(function(){
        $("link").attr("href", "pink.css");
        return false;
    });
    
    $(".colorgreen").click(function(){
        $("link").attr("href", "green.css");
        return false;
    });
    
    $(".colororange").click(function(){
        $("link").attr("href", "orange.css");
        return false;
    });
	$(".coloraqua").click(function(){
        $("link").attr("href", "aqua.css");
        return false;
    });

});