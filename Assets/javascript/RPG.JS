
$(document).ready(function () {

    //an array of my characters Obi, Luke, Sidius, Maul
    //if the array is full or .length = 4, then any character clicked is added to the Your Character Empty Div && the other charcaters are added to the Enemies Available to Attack Empty Div 

    //if the Your Character Empty Div is Empty then  

    $(".obi").on("click", function () {
        if ($('#yourCharacterDiv').html().length) {
            $("#yourEnemiesDiv").append($(".obi"))
            $(".obi").css({ 'float': 'none' });
        } else {
            $("#yourCharacterDiv").append($(".obi"))
            $(".obi").css({ 'float': 'none' });
        }
    })

    $(".luke").on("click", function () {
        if ($('#yourCharacterDiv').html().length) {
            $("#yourEnemiesDiv").append($(".luke"))
            $(".luke").css({ 'float': 'none' });
        } else {
            $("#yourCharacterDiv").append($(".luke"))
            $(".luke").css({ 'float': 'none' });
        }
    })

    $(".sidius").on("click", function () {
        if ($('#yourCharacterDiv').html().length) {
            $("#yourEnemiesDiv").append($(".sidius"))
            $(".sidius").css({ 'float': 'none' });
        } else {
            $("#yourCharacterDiv").append($(".sidius"))
            $(".sidius").css({ 'float': 'none' });
        }
    })

    $(".maul").on("click", function () {
        if ($('#yourCharacterDiv').html().length) {
            $("#yourEnemiesDiv").append($(".maul"))
            $(".maul").css({ 'float': 'none' });
        } else {
            $("#yourCharacterDiv").append($(".maul"))
            $(".maul").css({ 'float': 'none' });
        }
    })


    //if the if the Your Character Empty Div includes something then any character clicked is added to the Enemies Available to Attack Empty Div



});







