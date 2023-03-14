//jshint esversion:6

exports.getDate = function () {
    var today = new Date();
    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }
    var day = today.toLocaleDateString("en-US", options);
    return day;
}
exports.getDay = function () {
    let today = new Date();
    let options = {
        weekday: "long"
    }
    var day = today.toLocaleDateString("en-US", options);
    return day;
}