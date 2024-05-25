const arr = ["Shubham", "Jhil", "Autumn", "Kolaboti"];
let count = 0;
$(document).ready(function () {
  $("#textChange").on("click", function () {
    $("#textChange").text(arr[count]);
    // console.log(count);
    count > arr.length - 1 ? (count = 0) : count++;
    console.log(count);
  });
});
