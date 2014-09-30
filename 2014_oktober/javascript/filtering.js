// FILTERING SCRIPT
    var schoenen = "?schoenen";
    var fashion = "?fashion";
    var junior = "?junior";
    var outdoor = "?outdoor";
    var fietsen = "?fietsen";
    var jackWolfskin = "?jackWolfskin";
    var lookbook = "?lookbook";
    var energie = "?energie";

    var navFix = "navFix";

    var testArray = location.search.split("&");
    var testParam = testArray[0];

    var paramArray = ["?schoenen", "?fashion", "?junior", "?outdoor", "?fietsen", "?jackWolfskin", "?energie"];
    var classArray = [".schoenen", ".fashion", ".junior", ".outdoor", ".fietsen", ".jackWolfskin", ".energie"];

    // // URL PARAMETER
    // function filter(paramArray, classArray){
    //   //LOOPING THROUGH THE PARAM ARRAY
    //   for(i=0; i<paramArray.length; i++){
    //     var testParam = paramArray[i];
    //     function urlParam(testParam){
    //       var urlSuffix = location.search;
    //       urlArray = urlSuffix.split("&");

    //       if(testParam === urlArray[0]){
    //         alert(testParam);
    //         imagesLoaded(container, function() {
    //           msnry.layout();
    //           onLayout();
    //         });
    //       }
    //     }
    //   }
    // }

    // filter();

    if (testParam === schoenen) {
      $(".fashion, .junior, .outdoor, .fietsen, .actie, .energie, .lookbook .hiddenLook").hide();
      $(".schoenen").show();
      $(".hiddenLook").hide();
      $("li#schoenen").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === fashion) {
      $(".schoenen, .junior, .outdoor, .fietsen, .actie, .energie, .lookbook, .hiddenLook").hide();
      $(".fashion").show();
      $(".hiddenLook").hide();
      $("li#fashion").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === junior) {
      $(".schoenen, .fashion, .outdoor, .fietsen, .actie, .energie, .lookbook, .hiddenLook").hide();
      $(".junior").show();
      $(".hiddenLook").hide();
      $("li#junior").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === outdoor) {
      $(".schoenen, .fashion, .junior, .fietsen, .actie, .energie, .lookbook, .hiddenLook").hide();
      $(".outdoor").show();
      $("li#outdoor").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === fietsen) {
      $(".schoenen, .fashion, .junior, .outdoor, .actie, .energie, .lookbook, .hiddenLook").hide();
      $(".fietsen").show();
      $("#fietsen").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === jackWolfskin) {
      $(".schoenen, .fashion, .junior, .outdoor, .fietsen, .energie, .lookbook, .sfeer, .hiddenLook").hide();
      $(".actie").show();
      $("#jackWolfskin").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === lookbook) {
      $(".schoenen, .fashion, .junior, .outdoor, .fietsen, .energie, .actie, .sfeer").hide();
      $(".lookbook").show();
      $(".hiddenLook").show();
      $("#lookbook").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === energie) {
      $(".schoenen, .fashion, .junior, .outdoor, .fietsen, .actie, .lookbook, .hiddenLook").hide();
      $(".energie").show();
      $(".hiddenLook").hide();
      $("#energie").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else {
      $(".schoenen, .fashion, .junior, .outdoor, .fietsen, .actie, .energie, .lookbook").show();
      $(".hiddenLook").hide();
      $("#alleFolderProducten").addClass("active");

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    }

    // Click Events


    $("#schoenen").click(function() {
      // $(".fashion, .junior, .outdoor, .fietsen, .actie, .energie, .lookbook").hide();
      // $(".schoenen").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = schoenen;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#fashion").click(function() {
      // $(".schoenen, .junior, .outdoor, .fietsen, .actie, .energie, .lookbook").hide();
      // $(".fashion").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = fashion;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#junior").click(function() {
      // $(".schoenen, .fashion, .outdoor, .fietsen, .actie, .energie, .lookbook").hide();
      // $(".junior").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = junior;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#outdoor").click(function() {
      // $(".schoenen, .fashion, .junior, .fietsen, .actie, .energie, .lookbook").hide();
      // $(".outdoor").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = outdoor;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#fietsen").click(function() {
      // $(".schoenen, .fashion, .junior, .outdoor, .actie, .energie, .lookbook").hide();
      // $(".fietsen").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = fietsen;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#jackWolfskin").click(function() {
      // $(".schoenen, .fashion, .junior, .outdoor, .fietsen, .energie, .lookbook, .sfeer").hide();
      // $(".actie").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = jackWolfskin;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#lookbook").click(function() {
      // $(".schoenen, .fashion, .junior, .outdoor, .fietsen, .energie, .actie, .sfeer").hide();
      // $(".lookbook").show();
      // $(".hidden").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = lookbook;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#energie").click(function() {
      // $(".schoenen, .fashion, .junior, .outdoor, .fietsen, .actie, .lookbook").hide();
      // $(".energie").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = energie;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#alleFolderProducten").click(function() {
      // $(".schoenen, .fashion, .junior, .outdoor, .fietsen, .actie, .energie, .lookbook").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = "";

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    // $(".hiddenLook").hide();

    imagesLoaded(container, function() {
      msnry.layout();
    });