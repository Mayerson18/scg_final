$( document ).ready(function() {
    var url_string   = window.location.href;
      var url = new URL(url_string);
      var lang = url.searchParams.get("lang");
    if(lang == "en"){
      $("#activo").attr("src","img/english.png");
      $("#inactivo").parent().attr("href",'index.html?lang=es');
      $("#inactivo").attr("src","img/spanish.png");
    }else(lang == "es"){
      $("#activo").attr("src","img/spanish.png");
      $("#inactivo").parent().attr("href",'index.html?lang=en');
      $("#inactivo").attr("src","img/english.png");
    }

    if(lang == "es"){
      console.log("es");
    }
    else if(lang== "en")
      Cookies.set('googtrans','/es/en');

    $(".cont").click(function(){
      $(".enviar").click();
    });

});
