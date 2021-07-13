$("#all-btn").click(() => {
    $("#graphic").css("display", "none")
    $("#marketing").css("display", "none")
    $("#web").css("display", "none")
    $("#all").css("display", "block")
})
$("#web-btn").click(() => {
    $("#all").css("display", "none")
    $("#graphic").css("display", "none")
    $("#marketing").css("display", "none")
    $("#web").css("display", "block")
})
$("#gra-btn").click(() => {
    $("#all").css("display", "none")
    $("#marketing").css("display", "none")
    $("#web").css("display", "none")
    $("#graphic").css("display", "block")
})
$("#mark-btn").click(() => {
    $("#all").css("display", "none")
    $("#web").css("display", "none")
    $("#graphic").css("display", "none")
    $("#marketing").css("display", "block")
})