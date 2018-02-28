
$(document).ready(function () {

    //if the Your Character Div is Empty then append the box clicked to it and append all other boxes to the Your Enemies Div 

    $(".obi").on("click", function () {
        if (!$('#yourCharacterDiv').html().length) {
            $("#yourCharacterDiv").append($(".obi"))
            $(".obi").css({ 'float': 'none' });
            $("#yourEnemiesDiv").append($(".luke, .sidius, .maul"))
            $("#bottom").css({ 'clear': 'both' })
            $(".luke, .sidius, .maul").css("background-color", "red")
        } else {
            $("#defenderDiv").append($(".obi"))
            $(".obi").css({ 'float': 'none' })
            $(".obi").css("background-color", "black")
            $(".obi").css("color", "white")
        }
    })

    $(".luke").on("click", function () {
        if (!$('#yourCharacterDiv').html().length) {
            $("#yourCharacterDiv").append($(".luke"))
            $(".luke").css({ 'float': 'none' });
            $("#yourEnemiesDiv").append($(".obi, .sidius, .maul"))
            $("#bottom").css({ 'clear': 'both' });
            $(".obi, .sidius, .maul").css("background-color", "red")
        } else {
            $("#defenderDiv").append($(".luke"))
            $(".luke").css({ 'float': 'none' });
            $(".luke").css("background-color", "black")
            $(".luke").css("color", "white")
        }
    })

    $(".sidius").on("click", function () {
        if (!$('#yourCharacterDiv').html().length) {
            $("#yourCharacterDiv").append($(".sidius"))
            $(".sidius").css({ 'float': 'none' });
            $("#yourEnemiesDiv").append($(".luke, .obi, .maul"))
            $("#bottom").css({ 'clear': 'both' });
            $(".obi, .luke, .maul").css("background-color", "red")
        } else {
            $("#defenderDiv").append($(".sidius"))
            $(".sidius").css({ 'float': 'none' });
            $(".sidius").css("background-color", "black")
            $(".sidius").css("color", "white")
        }
    })

    $(".maul").on("click", function () {
        if (!$('#yourCharacterDiv').html().length) {
            $("#yourCharacterDiv").append($(".maul"))
            $(".maul").css({ 'float': 'none' });
            $("#yourEnemiesDiv").append($(".luke, .obi, .sidius"))
            $("#bottom").css({ 'clear': 'both' });
            $(".obi, .luke, .sidius").css("background-color", "red")
        } else {
            $("#defenderDiv").append($(".maul"))
            $(".maul").css({ 'float': 'none' });
            $(".maul").css("background-color", "black")
            $(".maul").css("color", "white")
        }
    })
});







