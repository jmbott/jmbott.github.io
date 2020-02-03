/* jshint esversion: 6 */

/* store expanded square id identifier */
let expanded = null;

/* list of sq id identifiers to cycle through */
ids = ["info","acacia","solar","guzzy","pru","coliberate","iot","senegal",
  "rtc","india","at"];

/* get page from pages directory */
const get_page = (page) => {
  // console.log("get_page");
  fetch("./pages/" + page + ".html")
  .then(response => {
    return response.text();
  })
  .then(data => {
    document.querySelector("sq-" + page).innerHTML = data;
  })
  .catch((error) => {
    console.warn(error);
  });
};

/* add a link to the indicated id that on click will expand the element to
   nearly the window size and scroll to just above the element */
const link_expand = (id) => {
  // console.log("link_expand");
  $(document).ready(function() {
    $("#" + id + "-sq").click(function(e){
      expand_focus(id, id + "-sq",id + "-sq-title",id + "-sq-hide");
      e.stopPropagation(); // bubbling propagation by default
      // animate the transition
      /* $([document.documentElement, document.body]).animate({
          scrollTop: $("#" + id + "-sq").offset().top - 20
      }, 1000); */
      // don't animate the transition
      $([document.documentElement, document.body]).scrollTop(
        $("#" + id + "-sq").offset().top - 20
      );
      return false;
    });
  });
};

/* shrink all squares back to standard */
const shrink_focus = () => {
  // console.log("shrink_focus");
  // console.log(document.querySelectorAll('[id*=-sq]'));
  let sq = document.querySelectorAll('[id$=-sq]'), i;
  for (i = 0; i < sq.length; ++i) {
    $(sq[i]).css("height",250);
    $(sq[i]).css("width",250);
    // console.log(sq[i].id.slice(0,-3));
    // link_expand(sq[i].id.slice(0,-3));
  }
  let sq_title = document.querySelectorAll('[id*=-sq-title]'), j;
  for (j = 0; j < sq_title.length; ++j) {
    $(sq_title[j]).css("height","auto");
    $(sq_title[j]).css("width",200);
    $(sq_title[j]).css("display","inline-grid");
  }
  let sq_hide = document.querySelectorAll('[id*=-sq-hide]'), k;
  for (k = 0; k < sq_hide.length; ++k) {
    $(sq_hide[k]).css("display","none");
  }
  expanded = null;
};

/* get the width to set elements to */
const get_width = () => {
  width = window.innerWidth - 50;
  if (width > 1150) {width = 1150;}
  if (width < 250) {width = 250;}
  widthEl = width - 50;
  return width;
};

/* function here to expand based on id inputs */
const expand_focus = (id, id_sq, id_sq_title, id_sq_hide) => {
  // console.log("expand_focus");
  shrink_focus();
  width = get_width();
  // console.log(document.getElementById(id_sq));
  // console.log(document.getElementById(id_sq_title));
  get_page(id);
  $("#" + id_sq).css("width",width);
  $("#" + id_sq).css("height","auto");
  // $("#" + id_sq_title).css("width",widthEl);
  // $("#" + id_sq_title).css("height","auto");
  $("#" + id_sq_title).css("display","none");
  $("#" + id_sq_hide).css("display","inline-grid");
  $("#" + id_sq_hide).css("margin","auto");
  $("#" + id_sq_hide).css("width","auto");
  // $("#" + id_sq_hide).addClass("hide-id"); // cleaner?

  expanded = id_sq;

  // allow browser to redraw - https://stackoverflow.com/a/4575011/6669558
  setInterval(add_links, 0);

};

const add_links = () => {
  $("#contact").attr("href","mailto:millerbott@gmail.com");
  $('#contact').unbind().click(function(e) {
    document.location = 'mailto:millerbott@gmail.com';
  });
  $("#github").attr("href","https://github.com/jmbott");
  $('#github').unbind().click(function(e) {
    document.location = 'https://github.com/jmbott';
  });
  $("#linkedin").attr("href","https://www.linkedin.com/in/jmb2341");
  $('#linkedin').unbind().click(function(e) {
    document.location = 'https://www.linkedin.com/in/jmb2341';
  });
  // $("#resume").attr("href","asssets/docs/resume.pdf");
  // $('#resume').unbind().click(function(e) {
  //   document.location = 'asssets/docs/resume.pdf';
  // });
  $("#acacia-irrigation").attr("href","https://qsel.columbia.edu/acacia-irrigation-project/");
  $('#acacia-irrigation').unbind().click(function(e) {
    document.location = 'https://qsel.columbia.edu/acacia-irrigation-project/';
  });
  $("#shared-solar").attr("href","https://qsel.columbia.edu/shared-solar/");
  $('#shared-solar').unbind().click(function(e) {
    document.location = 'https://qsel.columbia.edu/shared-solar/';
  });
  $("#coliberate-project").attr("href","https://gitlab.com/open-coliberate");
  $('#coliberate-project').unbind().click(function(e) {
    document.location = 'https://gitlab.com/open-coliberate';
  });
  $("#guzzy-project").attr("href","https://guzzy.ca/");
  $('#guzzy-project').unbind().click(function(e) {
    document.location = 'https://guzzy.ca/';
  });
  $("#ti-pru").attr("href","https://processors.wiki.ti.com/index.php/PRU-ICSS");
  $('#ti-pru').unbind().click(function(e) {
    document.location = 'https://processors.wiki.ti.com/index.php/PRU-ICSS';
  });
  // $("#pru-src").attr("href","");
  // $('#pru-src').unbind().click(function(e) {
  //   document.location = '';
  // });
  $("#iot-radio-src").attr("href","https://github.com/jmbott/iot-radio-network");
  $('#iot-radio-src').unbind().click(function(e) {
    document.location = 'https://github.com/jmbott/iot-radio-network';
  });
  $("#iot-radio-project").attr("href","https://iotcolumbia2017jsjc.weebly.com/");
  $('#iot-radio-project').unbind().click(function(e) {
    document.location = 'https://iotcolumbia2017jsjc.weebly.com/';
  });
  $("#ds1307").attr("href","assets/docs/DS1307.pdf");
  $('#ds1307').unbind().click(function(e) {
    document.location = 'assets/docs/DS1307.pdf';
  });
};

/* add links to expand list of ids based on form */
const expand = (sq_list) => {
  // console.log("expand");
  for (let i = 0; i < sq_list.length; i++) {
    link_expand(sq_list[i]);
  }
};

/* add on click to background that shrinks elements to standard */
$(document).ready(function() {
  $(document).click(function(e){
    shrink_focus();
    return false;
  });
});

/* delay resize trigger - https://stackoverflow.com/a/5926068/6669558 */
let rtime;
let timeout = false;
let delta = 200;

$(window).resize(function() {
  rtime = new Date();
  if (timeout === false) {
    timeout = true;
    setTimeout(resize_end, delta);
  }
});

const resize_end = () => {
  if (new Date() - rtime < delta) {
    setTimeout(resize_end, delta);
  } else {
    timeout = false;
    correct_width();
  }
};

/* add resize trigger to expanded square id that adjusts the width */
const correct_width = () => {
  // console.log("resize",expanded);
  if (expanded != null) {
    width = get_width();
    console.log(width);
    $("#" + expanded).css("width",width);
  }
};

/* add links to all listed ids */
expand(ids);
