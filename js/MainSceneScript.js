//MainSceneのjs
//画像の上にマウスをホバーさせた際のフェード
//画面繊維

window.onload = function(){
  $('body').fadeIn(500);
  $("#work-img01").fadeIn(500);
  $("#work-img02").fadeIn(2000);
  $("#work-img03").fadeIn(1000);
  $("#work-img04").fadeIn(2000);
  $("#work-img05").fadeIn(500);
  $("#work-img06").fadeIn(1200);
  $("#work-img07").fadeIn(1200);
  $("#work-img08").fadeIn(800);
  $("#work-img09").fadeIn(1200);
  $("#work-img10").fadeIn(1200);
  $("#work-img11").fadeIn(1200);
  $("#work-img12").fadeIn(800);




  //---Titleの出現エフェクト
  $("#work-img01").mouseover(
    function(){
      $("#work-des01").fadeIn();
    }
  );

  $("#work-img01").mouseout(
    function(){
      $("#work-des01").fadeOut();
    }
  );

  $("#work-img02").mouseover(
    function(){
      $("#work-des02").fadeIn();
    }
  );
  $("#work-img02").mouseout(
    function(){
      $("#work-des02").fadeOut();
    }
  );
  $("#work-img03").mouseover(
    function(){
      $("#work-des03").fadeIn();
    }
  );
  $("#work-img03").mouseout(
    function(){
      $("#work-des03").fadeOut();
    }
  );
  $("#work-img04").mouseover(
    function(){
      $("#work-des04").fadeIn();
    }
  );
  $("#work-img04").mouseout(
    function(){
      $("#work-des04").fadeOut();
    }
  );

  $("#work-img05").mouseover(
    function(){
      $("#work-des05").fadeIn();
    }
  );
  $("#work-img05").mouseout(
    function(){
      $("#work-des05").fadeOut();
    }
  );

  $("#work-img06").mouseover(
    function(){
      $("#work-des06").fadeIn();
    }
  );
  $("#work-img06").mouseout(
    function(){
      $("#work-des06").fadeOut();
    }
  );

  $("#work-img07").mouseover(
    function(){
      $("#work-des07").fadeIn();
    }
  );
  $("#work-img07").mouseout(
    function(){
      $("#work-des07").fadeOut();
    }
  );

  $("#work-img08").mouseover(
    function(){
      $("#work-des08").fadeIn();
    }
  );
  $("#work-img08").mouseout(
    function(){
      $("#work-des08").fadeOut();
    }
  );

  $("#work-img09").mouseover(
    function(){
      $("#work-des09").fadeIn();
    }
  );
  $("#work-img09").mouseout(
    function(){
      $("#work-des09").fadeOut();
    }
  );
  $("#work-img10").mouseover(
    function(){
      $("#work-des10").fadeIn();
    }
  );
  $("#work-img10").mouseout(
    function(){
      $("#work-des10").fadeOut();
    }
  );
  $("#work-img11").mouseover(
    function(){
      $("#work-des11").fadeIn();
    }
  );
  $("#work-img11").mouseout(
    function(){
      $("#work-des11").fadeOut();
    }
  );


  $("#work-img12").mouseover(
    function(){
      $("#work-des12").fadeIn();
    }
  );
  $("#work-img12").mouseout(
    function(){
      $("#work-des12").fadeOut();
    }
  );

  $("#work-img13").mouseover(
    function(){
      $("#work-des13").fadeIn();
    }
  );
  $("#work-img13").mouseout(
    function(){
      $("#work-des13").fadeOut();
    }
  );

  $("#work-mutek").mouseover(
    function(){
      $("#work-des-mutek").fadeIn();
    }
  );
  $("#work-mutek").mouseout(
    function(){
      $("#work-des-mutek").fadeOut();
    }
  );

  //Rhizomatics
  $("#work-rzm").mouseover(
    function(){
      $("#work-des-rzm").fadeIn();
    }
  );
  $("#work-rzm").mouseout(
    function(){
      $("#work-des-rzm").fadeOut();
    }
  );

  //ces
  $("#work-ces").mouseover(
    function(){
      $("#work-des-ces").fadeIn();
    }
  );
  $("#work-ces").mouseout(
    function(){
      $("#work-des-ces").fadeOut();
    }
  );

  //fluid_vj01
  $("#work-fluid-vj01").mouseover(
    function(){
      $("#work-des-fluid-vj01").fadeIn();
    }
  );
  $("#work-fluid-vj01").mouseout(
    function(){
      $("#work-des-fluid-vj01").fadeOut();
    }
  );


  //propagation
  $("#work-propagation").mouseover(
    function(){
      $("#work-des-propagation").fadeIn();
    }
  );
  $("#work-propagation").mouseout(
    function(){
      $("#work-des-propagation").fadeOut();
    }
  );
  $('#work-img01').click(function() {
    location.href = "../html/AttitudeRecognition.html";
  })
  $('#work-img02').click(function() {
      location.href = "Mystar.html";
  })
  $('#work-img03').click(function() {
      location.href = "../html/WhiteCube.html";
  })
  $('#work-img04').click(function() {
      location.href = "../html/VJ01.html";
  })
  $('#work-img05').click(function() {
      location.href = "../html/CO.html";
  })
  //チンアナゴ
  $('#work-img06').click(function() {
      location.href = "../html/Tinanago.html";
  })
  $('#work-img07').click(function() {
      location.href = "../html/DanDanLanthanum.html";
  })

  $('#work-img09').click(function() {
      location.href = "../html/FureFure.html";
  })
  $('#work-img10').click(function() {
      location.href = "../html/LED.html";
  })
  $('#work-img11').click(function() {
      location.href = "../html/Gan.html";
  })
  $('#work-img12').click(function() {
    location.href = "../html/crane.html";
  })
  //BurnNow 
  $('#work-img13').click(function() {
    location.href = "../html/Opening.html";
  })
  //Rembrandt
  $('#work-mutek').click(function() {
    location.href = "../html/fudousan.html";
  })
  //rzm_year_end_party_2020
  $('#work-rzm').click(function() {
    location.href = "../html/ProjectionMapping.html";
  })

  //ces
  $('#work-ces').click(function() {
    location.href = "../html/MakeUp.html";
  })

  //fluid_vj
  $('#work-fluid-vj01').click(function() {
    location.href = "../html/ChikyugiAR.html";
  })
  //propagation
  $('#work-propagation').click(function() {
    location.href = "../html/BiwakoAR.html";
  })

}
