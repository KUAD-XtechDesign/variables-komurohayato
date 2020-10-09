$(function(){
  
  
  $("#button01").on("click",function(){
    $("#content").text("モンスト10連爆死した〜！！");
  })

  $("#button02").on("click",function(){
    $("#content").html("<h2>htmlタグも使えるよ</h2>");
  })

  $("#button03").on("click",function(){
    $("#content").append("<p>追加</p>");
  })

  //ここからjavascriptの話

  let txt1 = "お昼ご飯を食べました。";
  let txt2 = "いま授業中です。";
  let txt3 = "めちゃ眠たいです"
  let num1 = 100;
  let num2 = 50;

  $("#button04").on("click",function(){
    $("#content").text(txt1 + txt2 + txt3);
  })

  $("#button05").on("click",function(){
    $("#content").text(num1 + num2);
  })
  

});