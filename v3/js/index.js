function generateBaseHTML(e) {
  var data_slide_section = 0,
    data_slide_section_tab = 1,
    html = "";

  var sections = $("h2");
  sections.each(function () {
    // get section title
    var txt_title = $(this).text(),
      txt_tab_titles = "",
      txt_content = "",
      tabs = $(this).nextUntil("h2");

    // get section content - if no tabs
    if (tabs.filter("h3").length == 0) {
      var fullHtml = "";
      tabs.each(function () {
        fullHtml += $(this)[0].outerHTML;
      });

      txt_content +=
        '<div class="subslide__content subslide--active" data-slide="' +
        data_slide_section.toString() +
        data_slide_section_tab.toString() +
        '">' +
        fullHtml +
        "</div>";
    } else if ($(this).text() != "Neo Holy Empire") {
      // get section content - if tabs exist
      txt_tab_titles = '<div class="subslider__navi">';
      tabs.filter("h3").each(function (index, element) {
        // get tab titles
        if (data_slide_section_tab == 0) {
          txt_tab_titles +=
            '<a href="#" class="subslide-nav active" data-slide="';
        } else {
          txt_tab_titles += '<a href="#" class="subslide-nav" data-slide="';
        }
        txt_tab_titles +=
          data_slide_section.toString() +
          data_slide_section_tab.toString() +
          '">' +
          $(this).text() +
          "</a>";

        // get tab content
        var content = $(this).nextUntil("h3");
        if (index + 1 == tabs.filter("h3").length) {
          content = $(this).nextUntil("h2");
        }

        var fullHtml = "";
        content.each(function () {
          fullHtml += $(this)[0].outerHTML;
        });

        txt_content +=
          '<div class="subslide__content subslide--active" data-slide="' +
          data_slide_section.toString() +
          data_slide_section_tab.toString() +
          '">' +
          fullHtml +
          "</div>";
        data_slide_section_tab++;
      });
      txt_tab_titles += "</div>";
      data_slide_section_tab = 1;
    } else if ($(this).text() == "Neo Holy Empire") {
      // church faction has 2 levels of tabs

      // get section content - if tabs exist
      txt_tab_titles = '<div class="subslider__navi">';
      tabs.filter("h3").each(function (index, element) {
        var fullHtml = "";

        // get 1st level tab title (h3) + content
        if (data_slide_section_tab == 0) {
          txt_tab_titles +=
            '<a href="#" class="subslide-nav active" data-slide="';
        } else {
          txt_tab_titles += '<a href="#" class="subslide-nav" data-slide="';
        }
        txt_tab_titles +=
          data_slide_section.toString() +
          data_slide_section_tab.toString() +
          '">' +
          $(this).text() +
          "</a>";

        // get tab content
        var content = $(this).nextUntil("h4");
        content.each(function () {
          fullHtml += $(this)[0].outerHTML;
        });


        // executor distribution chart
        if (data_slide_section_tab > 1) {
          fullHtml += '<div id="chartContainer"></div>';
        }

        txt_content +=
          '<div class="subslide__content subslide--active" data-slide="' +
          data_slide_section.toString() +
          data_slide_section_tab.toString() +
          '">' +
          fullHtml +
          "</div>";

        data_slide_section_tab++;

        var tabs_lv2 = $(this).nextUntil("h3");
        // get 2nd level tab titles (h4) + content
        tabs_lv2.filter("h4").each(function (index, element) {
          fullHtml = "";

          txt_tab_titles +=
            '<a href="#" class="subslide-nav" data-slide="' +
            data_slide_section.toString() +
            data_slide_section_tab.toString() +
            '">' +
            $(this).text() +
            "</a>";

          // get tab content
          var content = $(this).nextUntil("h4");

          if (index + 1 == tabs_lv2.filter("h4").length) {
            content = $(this).nextUntil("h3");
          }

          content.each(function () {
            fullHtml += $(this)[0].outerHTML;
          });
          txt_content +=
            '<div class="subslide__content subslide--active" data-slide="' +
            data_slide_section.toString() +
            data_slide_section_tab.toString() +
            '">' +
            fullHtml +
            "</div>";

          data_slide_section_tab++;
        });
        txt_tab_titles += "<br><br>";
      });
      txt_tab_titles += "</div>";
      data_slide_section_tab = 1;
    }

    // make page default on History section
    if (data_slide_section == 1) {
      html +=
        '<div class="flex__container flex--active" data-slide="';
    } else {
      html +=
        '<div class="flex__container animate--start" data-slide="';
    }

    var subtitle = 'Fate/Starry Night';
    if (data_slide_section == 5) {
      subtitle = '<strong>S</strong>entient <strong>E</strong>mbedded <strong>R</strong>eal-time <strong>V</strong>erbose <strong>A</strong>pproximatio<strong>N</strong> <strong>T</strong>echnology';
    }
    html +=
      data_slide_section.toString() +
      '"><div class="flex__item flex__item--left"><div class="flex__content"><p class="text--sub">' + subtitle + '</p><h1 class="text--big">' +
      txt_title +
      "</h1>" +
      txt_tab_titles +
      txt_content +
      '</p></div></div><div class="flex__item flex__item--right"></div></div>';

    data_slide_section++;
  });

  $("#slider__warpper").html(html);
}


$("#testt").load('Fate_Starry%20Night%20Lore%20Site.html', function() {
  generateBaseHTML();
  document.addEventListener("load", generateBaseHTML);





  $(".slide-nav").on("click", function (e) {
    e.preventDefault();
    // get current slide
    var current = $(".flex--active").data("slide"),
      // get button data-slide
      next = $(this).data("slide");

    $(".slide-nav").removeClass("active");
    $(this).addClass("active");

    if (current === next) {
      return false;
    } else {
      $(".slider__warpper")
        .find(".flex__container[data-slide=" + next + "]")
        .addClass("flex--preStart");
      $(".flex--active").addClass("animate--end");
      setTimeout(function () {
        $(".flex--preStart")
          .removeClass("animate--start flex--preStart")
          .addClass("flex--active");
        $(".animate--end")
          .addClass("animate--start")
          .removeClass("animate--end flex--active");
      }, 500);

      $(".subslide-nav").removeClass("active");
      $(".slider__warpper")
        .find(".flex__container[data-slide=" + next + "]")
        .find(".subslide-nav[data-slide=" + next + "1" + "]")
        .addClass("active");
      $(".subslide--active").removeClass("subslide--active");
      $(".slider__warpper")
        .find(".flex__container[data-slide=" + next + "]")
        .find(".subslide__content[data-slide=" + next + "1" + "]")
        .addClass("subslide--active");
    }
  });

  $(".subslide-nav").on("click", function (e) {
    e.preventDefault();
    // get current slide
    var current = $(".subslide--active").data("slide"),
      // get button data-slide
      next = $(this).data("slide");

    $(".subslide-nav").removeClass("active");
    $(this).addClass("active");

    if (current === next) {
      return false;
    } else {
      $(".subslide--active").removeClass("subslide--active");
      $(".flex__content")
        .find(".subslide__content[data-slide=" + next + "]")
        .addClass("subslide--active");
    }
  });




  window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer",
  {
    backgroundColor: null,
    width: 700,
    title: {
      text: "Distribution Overview"
    },
    animationEnabled: false,
    data: [
    {
      type: "pyramid",
      //valueRepresents: "area",
      indexLabelFontSize: 12,
      indexLabelFontFamily: "Arial",
      dataPoints: [
          { y: 600, indexLabel: "Law Enforcement", color: "#aaaaaa" },
          { y: 200, indexLabel: "Instructors and Scouts for Promising Executor Candidates", color: "#bbbbbb" },
          { y: 100, indexLabel: "Bodyguards for Distinguished Church Personnel", color: "#cccccc" },
          { y: 90, indexLabel: "Executors", color: "#dddddd" }
          /*{ y: 50, indexLabel: "Executors w/o Command Spells", color: "#dddddd" },
          { y: 40, indexLabel: "Executors w/ Command Spells", color: "#ffffff" }*/
      ]
    }
    ]
  });
  chart.render();

  }



})


