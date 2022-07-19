/* jshint esversion: 8 */

/* store expanded square id identifier */
let expanded = null;

/* list of sq id identifiers to cycle through */
ids = ["info","irr-detect","acacia","solar","guzzy","pru","coliberate",
  "iot","ceramics","senegal","rtc","india","at"];

/* get page/project content from pages directory */
const get_page = async (page) => {
  // console.log("get_page");
  await fetch("./pages/" + page + ".html")
  .then(response => {
    return response.text();
  })
  .then(data => {
    document.querySelector("sq-" + page).innerHTML = data;
  })
  .catch((error) => {
    console.warn(error);
  });
  return false;
};

const scroll = (id) => {
  // animate the transition
  /* $([document.documentElement, document.body]).animate({
      scrollTop: $("#" + id + "-sq").offset().top - 20
  }, 1000); */
  // don't animate the transition
  $('html, body').scrollTop(
    $("#" + id + "-sq").position().top - 10
  );
};

/* add a link to the indicated id that on click will expand the element to
   nearly the window size and scroll to just above the element */
const link_expand = async (id) => {
  // console.log("link_expand");
  $("#" + id + "-sq").click(function(e){
    e.stopPropagation(); // bubbling propagation by default
    expand_focus(id, id + "-sq",id + "-sq-title",id + "-sq-hide");
    // scroll(id);
    return false;
  });
};

/* shrink all squares back to standard */
const shrink_focus = async () => {
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
  // for (let i = 0; i < ids.length; i++) {
  //   link_expand(ids[i]);
  // }
  expanded = null; // reset what square is expanded
};

/* get the width to set elements to */
const get_width = () => {
  width = window.innerWidth - 50;
  if (width > 1150) {width = 1150;}
  if (width < 250) {width = 250;}
  widthEl = width - 50;
  return width;
};

/* setup css and mark expanded unit */
const display_swap = async (width, id_sq, id_sq_title, id_sq_hide) => {
  // console.log("display_swap");
  $("#" + id_sq).css("width",width);
  $("#" + id_sq).css("height","auto");
  // $("#" + id_sq_title).css("width",widthEl);
  // $("#" + id_sq_title).css("height","auto");
  $("#" + id_sq_title).css("display","none");
  $("#" + id_sq_hide).css("display","inline-grid");
  $("#" + id_sq_hide).css("margin","auto");
  $("#" + id_sq_hide).css("width","auto");
  // $("#" + id_sq_hide).addClass("hide-id"); // cleaner?
  // $("#" + id_sq).unbind();

  expanded = id_sq;
};

/* function here to expand based on id inputs */
const expand_focus = async (id, id_sq, id_sq_title, id_sq_hide) => {
  // console.log("expand_focus");
  shrink_focus();
  width = get_width();

  /* get page, load, setup, add links */
  await get_page(id);
  await display_swap(width, id_sq, id_sq_title, id_sq_hide);
  await add_links();
  scroll(id);
};

/* add links after render, use click events, href for clarity */
const add_links = () => {
  // console.log("add_links");
  $(".project").unbind().click(function(e){
    e.stopPropagation(); // bubbling propagation by default
  });
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
  // $("#stackoverflow").attr("href","https://stackoverflow.com/users/6669558/jmb2341");
  // $('#stackoverflow').unbind().click(function(e) {
  //   document.location = 'https://stackoverflow.com/users/6669558/jmb2341';
  // });
  // $("#resume").attr("href","asssets/docs/bott-resume.pdf");
  // $('#resume').unbind().click(function(e) {
  //   document.location = 'assets/docs/bott-resume.pdf';
  // });
  $("#irr-detect-paper").attr("href","https://ieeexplore.ieee.org/document/9342946");
  $('#irr-detect-paper').unbind().click(function(e) {
    document.location = 'https://ieeexplore.ieee.org/document/9342946';
  });
  $("#acacia-irrigation").attr("href","https://qsel.columbia.edu/acacia-irrigation-project/");
  $('#acacia-irrigation').unbind().click(function(e) {
    document.location = 'https://qsel.columbia.edu/acacia-irrigation-project/';
  });
  $("#acacia-web").attr("href","http://acaciairrigation.org/");
  $('#acacia-web').unbind().click(function(e) {
    document.location = 'http://acaciairrigation.org/';
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
  $("#ti-pru").attr("href","https://software-dl.ti.com/processor-sdk-linux/esd/docs/08_00_00_21/common/PRU-ICSS/Overview.html");
  $('#ti-pru').unbind().click(function(e) {
    document.location = 'https://software-dl.ti.com/processor-sdk-linux/esd/docs/08_00_00_21/common/PRU-ICSS/Overview.html';
  });
  $("#lab-site").attr("href","https://mplab.ee.columbia.edu/");
  $('#lab-site').unbind().click(function(e) {
    document.location = 'https://mplab.ee.columbia.edu/';
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
  $("#adjective-ceramics").attr("href","https://www.instagram.com/adjectiveceramics/");
  $('#adjective-ceramics').unbind().click(function(e) {
    document.location = 'https://www.instagram.com/adjectiveceramics/';
  });
  $("#ds1307").attr("href","assets/docs/DS1307.pdf");
  $('#ds1307').unbind().click(function(e) {
    document.location = 'assets/docs/DS1307.pdf';
  });
  $("#at-trail").attr("href","https://www.appalachiantrail.org/home/explore-the-trail");
  $('#at-trail').unbind().click(function(e) {
    document.location = 'https://www.appalachiantrail.org/home/explore-the-trail';
  });

  // photo page carousels
  $("#at-12").attr("src","assets/photos/at/1.jpg");
  $('.at.next').unbind().click(function(e) {
    next("at-12"); // id and # of photos
    e.stopPropagation(); // bubbling propagation by default
  });
  $(".at.back").unbind().click(function(e) {
    back("at-12");
    e.stopPropagation(); // bubbling propagation by default
  });

  $("#india-6").attr("src","assets/photos/india/1.jpg");
  $('.india.next').unbind().click(function(e) {
    next("india-6"); // id and # of photos
    e.stopPropagation(); // bubbling propagation by default
  });
  $(".india.back").unbind().click(function(e) {
    back("india-6");
    e.stopPropagation(); // bubbling propagation by default
  });

  $("#senegal-7").attr("src","assets/photos/senegal/1.jpg");
  $('.senegal.next').unbind().click(function(e) {
    next("senegal-7"); // id and # of photos
    e.stopPropagation(); // bubbling propagation by default
  });
  $(".senegal.back").unbind().click(function(e) {
    back("senegal-7");
    e.stopPropagation(); // bubbling propagation by default
  });

  $(document).keydown(function(e) {
    e = e || window.event;
    let id;
    if (expanded == "at-sq") {id = "at-12";}
    else if (expanded == "india-sq") {id = "india-6";}
    else if (expanded == "senegal-sq") {id = "senegal-7";}
    else {return;}
    switch (e.keyCode) {
      case 39:
        // console.log(39);
        next(id);
        break;
      case 37:
        // console.log(37);
        back(id);
        break;
    }
    e.stopPropagation(); // bubbling propagation by default
  });
};

/* flip to the next photo, up to quantity */
const next = (id) => {
  let current_src = $("#" + id).attr("src");
  //console.log(current_src.split("/")[2]); // folder
  let num = current_src.split("/")[3].split(".")[0];
  let folder = id.split("-")[0];
  let quantity = id.split("-")[1];
  // console.log(num,quantity);
  if (num == quantity) {
    $("#" + id).attr("src","assets/photos/" + folder + "/1.jpg");
  }
  else {
    num = parseInt(num) + 1;
    $("#" + id).attr("src","assets/photos/" + folder + "/" + num + ".jpg");
    // console.log($("#" + id).attr("src"));
  }
};

/* cycle back through pictures, number based on id name */
const back = (id) => {
  let current_src = $("#" + id).attr("src");
  let num = current_src.split("/")[3].split(".")[0];
  let folder = id.split("-")[0];
  let quantity = id.split("-")[1];
  if (num == 1) {
    $("#" + id).attr("src","assets/photos/" + folder + "/" + quantity + ".jpg");
  }
  else {
    num = parseInt(num) - 1;
    $("#" + id).attr("src","assets/photos/" + folder + "/" + num + ".jpg");
  }
};

/* add links to expand list of ids based on form */
const expand = async (sq_list) => {
  // console.log("expand");
  $(document).ready(function() {
    for (let i = 0; i < sq_list.length; i++) {
      link_expand(sq_list[i]);
    }
  });
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
    // console.log(width);
    $("#" + expanded).css("width",width);
  }
};

/* add links to all listed ids */
expand(ids);
