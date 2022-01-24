// Colapse nav class
function show() {
  var element = document.getElementById("menu");
  element.classList.toggle("show");
}

// Popover
document.addEventListener("DOMContentLoaded", function(){
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function(element){
      return new bootstrap.Popover(element);
  });
});