"use strict";
let w;
$( document ).ready(function() {
  $('.modal').modal();

  var config = {
    apiKey: "AIzaSyA1K8MD0kErN7_1yHz8UyDcReKTQK5VESo",
    authDomain: "panel-e957f.firebaseapp.com",
    databaseURL: "https://panel-e957f.firebaseio.com",
    projectId: "panel-e957f",
    storageBucket: "",
    messagingSenderId: "800679341255"
  };
  firebase.initializeApp(config);

    var vista1 = firebase.database().ref().child('vista1');
    vista1.on('value', function(snap) {
      const x = snap.val();
      const titulos = x.titulos;
      const nosotros = x.nosotros;
      const parallax = x.parallax;
      const contactenos = x.contactenos;
      let servicios = x.servicios;
      let proyectos = x.proyectos;
      let equipo = x.equipo;
      let i =0;

      console.log(titulos);
      $("#titulo1").val(titulos.titulo)
      $("#titulo1").siblings("label").addClass("active")
      $("#titulo2").val(titulos.titulo2)
      $("#titulo2").siblings("label").addClass("active")
      $("#titulo3").val(titulos.titulo3)
      $("#titulo3").siblings("label").addClass("active")
      $("#titulo4").val(titulos.titulo4)
      $("#titulo4").siblings("label").addClass("active")

      const length = servicios.length
      $("#num-servicios").text(length);
      console.log(length)
      let ret = `<ul class="collection black">`

      for (let i = 0; i < length; i++) {
        let li = `
        <li class="collection-item avatar">\
          <i class="material-icons circle">folder</i>\
          <div class="cotainer-i-servicios">\
              ${Inputs("linea1",servicios[i].linea1)}
              ${Inputs("linea2",servicios[i].linea2)}
              ${Inputs("linea3",servicios[i].linea3)}
              ${Inputs("img",servicios[i].img)}
            <textarea maxlength="216" class="i-servicios">${servicios[i].texto}</textarea>\
          </div>
          </p>\
          <a href="#!" id="${i}" class="secondary-content r3"><i class="material-icons">edit</i></a>\
          <a href="#!" class="secondary-content"><i class="material-icons">close</i></a>\
        </li>`
        ret+=li
      }
      ret+="</ul>";
      $("#servicios").html(ret);

/*
      $(".cartas").html(Ret(servicios,"","card",3));
      $("#equipo").html(Ret(equipo,"our","equipo",4));

      $("#nosotros-titulo").text(nosotros.titulo);
      $("#nosotros-p1").text(nosotros.p1);
      $("#nosotros-p2").text(nosotros.p2);
      $("#nosotros-img").text(nosotros.img);
      $("#parallax-titulo").text(parallax.titulo);
      $("#parallax-texto1").text(parallax.texto1);
      $("#parallax-texto2").text(parallax.texto2);
      $("#parallax-negrita1").text(parallax.negrita1);
      $("#parallax-negrita2").text(parallax.negrita2);
      let ret = ""
      for (let i = 0; i < proyectos.length; i++) {
        ret += Proyectos(proyectos[i]);
      }

      $(".telefono").text(contactenos.telefono);
      $(".address").html(`<strong>Dirección</strong>${contactenos.direccion}`);
      $(".email-in").text(contactenos.correo);
      $(".telefono").text(contactenos.telefono);
      $(".p-contact").text(contactenos.texto);*/
    });


    //$(".update-titulos").click(updateTitulos());
    $(".update-titulos").on("click",function(){
      updateTitulos();
    });

    $(document).on("click",".r3",function(){
      let padre = ($(this).siblings(".cotainer-i-servicios"));
      let array = []
      padre.children().each(function(index,val){
        if(index != 4)
          array.push($(val).find("input").val());
      });
      array.push($(padre).find("textarea").val())
      updateServicios(array,$(this).attr("id"));
    });

});

function updateServicios(x,index){
  var serviciosRef = firebase.database().ref(`vista1/servicios/${index}`);
  serviciosRef.update ({
    "linea1": x[0],
    "linea2": x[1],
    "linea3": x[2],
    "img": x[3],
    "texto": x[4]
  },function(callback){
    Mensaje("Datos guardados correctamente");
  });
};

    function Inputs(id,texto){
     return  `<div class="input-field">\
        <input id="${id}" type="text" value="${texto}" maxlength="16" class="i-servicios">\
        <label for="${id}" class="active"> ${id}</label>\
      </div>`;
    }

    function Mensaje(texto){
      Materialize.toast(texto, 4000);
    }

    function updateTitulos(){
      var titulosRef = firebase.database().ref("vista1/titulos");
      let tit1 = $($(".i-titulos")[0]).val();
      let tit2 = $($(".i-titulos")[1]).val();
      let tit3 = $($(".i-titulos")[2]).val();
      let tit4 = $($(".i-titulos")[3]).val();

      titulosRef.update ({
         "titulo": tit1,
         "titulo2": tit2,
         "titulo3": tit3,
         "titulo4": tit4
      },function(callback){
        Mensaje("Datos guardados correctamente");
      });
    };
