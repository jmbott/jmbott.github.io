
fetch("./info.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector("sq-info").innerHTML = data;
});

/* shrink all squares back to standard */
function shrinkFocus() {
  // console.log(document.querySelectorAll('[id*=-sq]'));
  var sq = document.querySelectorAll('[id*=-sq]'), i;
  for (i = 0; i < sq.length; ++i) {
    $(sq).css("height",250);
    $(sq).css("width",250);
  }
  var sq_title = document.querySelectorAll('[id*=-sq-title]'), i;
  for (i = 0; i < sq_title.length; ++i) {
    $(sq_title).css("height","auto");
    $(sq_title).css("width",200);
  }
}

/* function here to expand based on id inputs */
function expandFocus(id_sq, id_sq_title) {
  shrinkFocus();
  // console.log("expand focus");
  width = $( document ).width() - 50;
  widthEl = width - 50;
  // console.log(document.getElementById(id_sq));
  // console.log(document.getElementById(id_sq_title));
  $("#" + id_sq).css("width",width);
  $("#" + id_sq).css("height","auto");
  $("#" + id_sq_title).css("width",widthEl);
  $("#" + id_sq_title).css("height","auto");
}

/* expand list of ids based on form */
function expand(sq_list) {
  for (let i = 0; i < sq_list.length; i++) {
    $(document).ready(function() {
      $("#" + sq_list[i]).click(function(e){
        expandFocus(sq_list[i],sq_list[i] + "-title");
        e.stopPropagation();
        return false;
      });
    });
  }
}

/* List of ids to cycle through */
ids = ["info-sq","acacia-sq","solar-sq","guzzy-sq","pru-sq",
  "coliberate-sq","iot-sq","senegal-sq","rtc-sq","india-sq","at-sq"];

$(document).ready(function() {
  $(document).click(function(e){
    shrinkFocus();
    return false;
  });
});

expand(ids);
