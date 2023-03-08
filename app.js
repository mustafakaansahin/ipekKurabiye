function loaded() {
    $('#circle').width("500px");
    $('#circle').height("500px");
    $('#circle').css("font-size", "2rem");
    $('#circletext').css("opacity", "1");
    $('#buttons').css("opacity", "1");
    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

