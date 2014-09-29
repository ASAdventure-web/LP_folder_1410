// FILTERING SCRIPT
    var dames = "?dames";
    var heren = "?heren";
    var junior = "?junior";
    var uitrusting = "?uitrusting";
    var fietsen = "?fietsen";
    var acties = "?acties";
    var lookbook = "?lookbook";
    var groenePrijzen = "?groeneprijzen";

    var navFix = "navFix";

    testArray = location.search.split("&");
    var testParam = testArray[0];

    var paramArray = ["?dames", "?heren", "?junior", "?uitrusting", "?fietsen", "?acties", "?groenePrijzen"];
    var classArray = [".dames", ".heren", ".junior", ".uitrusting", ".fietsen", ".acties", ".groenePrijzen"];

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

    if (testParam === dames) {
      $(".heren, .junior, .uitrusting, .fietsen, .actie, .groenePrijzen, .lookbook .hiddenLook").hide();
      $(".dames").show();
      $(".hiddenLook").hide();
      $("li#dames").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === heren) {
      $(".dames, .junior, .uitrusting, .fietsen, .actie, .groenePrijzen, .lookbook, .hiddenLook").hide();
      $(".heren").show();
      $(".hiddenLook").hide();
      $("li#heren").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === junior) {
      $(".dames, .heren, .uitrusting, .fietsen, .actie, .groenePrijzen, .lookbook, .hiddenLook").hide();
      $(".junior").show();
      $(".hiddenLook").hide();
      $("li#junior").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === uitrusting) {
      $(".dames, .heren, .junior, .fietsen, .actie, .groenePrijzen, .lookbook, .hiddenLook").hide();
      $(".uitrusting").show();
      $("li#uitrusting").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === fietsen) {
      $(".dames, .heren, .junior, .uitrusting, .actie, .groenePrijzen, .lookbook, .hiddenLook").hide();
      $(".fietsen").show();
      $("#fietsen").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === acties) {
      $(".dames, .heren, .junior, .uitrusting, .fietsen, .groenePrijzen, .lookbook, .sfeer, .hiddenLook").hide();
      $(".actie").show();
      $("#acties").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === lookbook) {
      $(".dames, .heren, .junior, .uitrusting, .fietsen, .groenePrijzen, .actie, .sfeer").hide();
      $(".lookbook").show();
      $(".hiddenLook").show();
      $("#lookbook").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else if (testParam === groenePrijzen) {
      $(".dames, .heren, .junior, .uitrusting, .fietsen, .actie, .lookbook, .hiddenLook").hide();
      $(".groenePrijzen").show();
      $(".hiddenLook").hide();
      $("#groenePrijzen").addClass("active");
      window.location.hash = navFix;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    } else {
      $(".dames, .heren, .junior, .uitrusting, .fietsen, .actie, .groenePrijzen, .lookbook").show();
      $(".hiddenLook").hide();
      $("#alleFolderProducten").addClass("active");

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    }

    // Click Events


    $("#dames").click(function() {
      // $(".heren, .junior, .uitrusting, .fietsen, .actie, .groenePrijzen, .lookbook").hide();
      // $(".dames").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = dames;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#heren").click(function() {
      // $(".dames, .junior, .uitrusting, .fietsen, .actie, .groenePrijzen, .lookbook").hide();
      // $(".heren").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = heren;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#junior").click(function() {
      // $(".dames, .heren, .uitrusting, .fietsen, .actie, .groenePrijzen, .lookbook").hide();
      // $(".junior").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = junior;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#uitrusting").click(function() {
      // $(".dames, .heren, .junior, .fietsen, .actie, .groenePrijzen, .lookbook").hide();
      // $(".uitrusting").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = uitrusting;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#fietsen").click(function() {
      // $(".dames, .heren, .junior, .uitrusting, .actie, .groenePrijzen, .lookbook").hide();
      // $(".fietsen").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = fietsen;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#acties").click(function() {
      // $(".dames, .heren, .junior, .uitrusting, .fietsen, .groenePrijzen, .lookbook, .sfeer").hide();
      // $(".actie").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = acties;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#lookbook").click(function() {
      // $(".dames, .heren, .junior, .uitrusting, .fietsen, .groenePrijzen, .actie, .sfeer").hide();
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

    $("#groenePrijzen").click(function() {
      // $(".dames, .heren, .junior, .uitrusting, .fietsen, .actie, .lookbook").hide();
      // $(".groenePrijzen").show();
      // $(this).siblings().removeClass("active");
      // $(this).addClass("active");
      location.search = groenePrijzen;

      imagesLoaded(container, function() {
        msnry.layout();
        onLayout();
      });
    });

    $("#alleFolderProducten").click(function() {
      // $(".dames, .heren, .junior, .uitrusting, .fietsen, .actie, .groenePrijzen, .lookbook").show();
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