$( document ).ready(function() {
    var url_string   = window.location.href;
      var url = new URL(url_string);
      var lang = url.searchParams.get("lang");
    if(lang == "en"){
      $("#activo").find("img").attr("src","img/english.png");
      $("#inactivo").attr("href",'index2.php?lang=es');
      $("#inactivo").find("img").attr("src","img/spanish.png");
    }else{
      $("#activo").find("img").attr("src","img/spanish.png");
      $("#inactivo").attr("href",'index2.php?lang=en');
      $("#inactivo").find("img").attr("src","img/english.png");
    }

    $(".cont").click(function(){
      $(".enviar").click();
    });

});
