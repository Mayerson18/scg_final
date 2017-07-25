"use strict";
let w;
$( document ).ready(function() {
  $('.breadcrumb').click(function(){
    $('.breadcrumb').removeClass("active");
    $(this).addClass("active");
    const id = $(this).data("id");
    $(`#${id}`).removeClass("esconder");
    $(`#${id}`).siblings("div").addClass("esconder");
  });
  var tits = ["ALQUILER DE OFICINAS","OFICINAS FISICAS","OFICINAS TEMPORALES","OFICINAS VIRTUALES","VIRTUAL ORO","VIRTUAL PLATINUM"]
  $(".i-titulos2").each(function(index,val){
    $(val).val(tits[index]);
  })
  var ser2 = ["Servicio personalizado a clientes","Línea telefónica exclusiva","Desvío / transferencias de llamadas","Apartado postal en Costa Rica y en USA","Servicio de mensajería","Servicio de Fax"]
  $(".i-servicios2").each(function(index,val){
    $(val).val(ser2[index]);
  });
  var oficinasTemporales = ["Tiene una reunión de última hora ¿No tiene oficina actualmente? ¿Desea privacidad y confort? ","Oficinas y salas de reuniones lujosamente amobladas.","Ambiente de alta tecnología.","Líneas telefónicas y de fax únicas para cada cliente.","Servicios de contestador de llamadas personalizado.","Acceso a internet de alta velocidad."]
  $(".i-oficinasTemporales").each(function(index,val){
    $(val).val(oficinasTemporales[index]);
  });
  var oficinasVirtuales = ["Este novedoso concepto de oficina es una opción para la operación de su empresa, accediendo a manejarla efectivamente desde el lugar donde se encuentre. Con este formato usted podrá utilizar la dirección física de SCG-Business Center, como domicilio de su empresa, para la recepción de documentación y traslado. Cuenta con los servicios de recepción y redirección de llamadas, atención a clientes y/o visitas, disposición de las salas de reuniones y oficinas."]
  $(".i-oficinasVirtuales").each(function(index,val){
    $(val).val(oficinasVirtuales[index]);
  });
  var virtualOro = ["Domicilio físico de su empresa en SCG Business Centre","Toma y reporte de mensajes","Descuentos en salas y oficinas","Atención de visitas","Recepción de paquetes y documentos"]
  $(".i-virtualOro").each(function(index,val){
    $(val).val(virtualOro[index]);
  });
  var virtualPlatinum = ["Domicilio físico de su empresa en SCG Business Centre","Toma y reporte de mensajes","Descuentos en salas y oficinas","Atención de visitas","Recepción de paquetes y documentos"]
  $(".i-virtualPlatinum").each(function(index,val){
    $(val).val(virtualPlatinum[index]);
  });


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

      $("#titulo1").val(titulos.titulo)
      $("#titulo1").siblings("label").addClass("active")
      $("#titulo2").val(titulos.titulo2)
      $("#titulo2").siblings("label").addClass("active")
      $("#titulo3").val(titulos.titulo3)
      $("#titulo3").siblings("label").addClass("active")
      $("#titulo4").val(titulos.titulo4)
      $("#titulo4").siblings("label").addClass("active")

      $("#titulo").val(nosotros.titulo)
      $("#titulo").siblings("label").addClass("active")
      $("#parrafo1").val(nosotros.p1)
      $("#parrafo1").siblings("label").addClass("active")
      $("#parrafo2").val(nosotros.p2)
      $("#parrafo2").siblings("label").addClass("active")
      $("#imagen").val(nosotros.img)
      $("#imagen").siblings("label").addClass("active")

      $("#principal").val(parallax.titulo)
      $("#principal").siblings("label").addClass("active")
      $("#texto1").val(parallax.texto1)
      $("#texto1").siblings("label").addClass("active")
      $("#texto2").val(parallax.texto2)
      $("#texto2").siblings("label").addClass("active")
      $("#negrita1").val(parallax.negrita1)
      $("#negrita1").siblings("label").addClass("active")
      $("#negrita2").val(parallax.negrita2)
      $("#negrita2").siblings("label").addClass("active")

      let length = servicios.length
      $("#num-servicios").text(length);
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
          <a href="#!" id="${i}" class="secondary-content r3 edit-servicios"><i class="material-icons">edit</i></a>\
          <a href="#!" data-id="${i}" class="secondary-content borrar-servicios"><i class="material-icons">close</i></a>\
        </li>`
        ret+=li
      }
      ret+=`</ul><div class="relative"><a id="add-servicio" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"> add</i></a></div>`;
      $("#servicios").html(ret);

      length = equipo.length
      $("#num-equipo").text(length);
      ret = `<ul class="collection black">`
      for (let i = 0; i < length; i++) {
        let li = `
        <li class="collection-item avatar">\
          <i class="material-icons circle">folder</i>\
          <div class="cotainer-i-equipo">\
              ${Inputs("cargo",equipo[i].cargo)}
              ${Inputs("nombre",equipo[i].nombre)}
              ${Inputs("texto",equipo[i].texto)}
          </div>
          </p>\
          <a href="#!" id="${i}" class="secondary-content r3 edit-equipo"><i class="material-icons">edit</i></a>\
          <a href="#!" data-id="${i}" class="secondary-content borrar-equipo"><i class="material-icons">close</i></a>\
        </li>`
        ret+=li
      }
      ret+=`</ul><div class="relative"><a id="add-equipo" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"> add</i></a></div>`;
      $("#equipo").html(ret);

      length = proyectos.length
      $("#num-proyectos").text(length);
      ret = `<ul class="collection black">`
      for (let i = 0; i < length; i++) {
        let li = `
        <li class="collection-item avatar">\
          <i class="material-icons circle">folder</i>\
          <div class="cotainer-i-proyectos">\
              ${Inputs("imagenes",proyectos[i].img)}
              ${Inputs("imagenPrincipal",proyectos[i].src)}
              ${Inputs("titulo",proyectos[i].titulo)}
              ${Inputs("texto",proyectos[i].texto)}
          </div>
          </p>\
          <a href="#!" id="${i}" class="secondary-content r3 edit-proyectos"><i class="material-icons">edit</i></a>\
          <a href="#!" data-id="${i}" class="secondary-content borrar-proyectos"><i class="material-icons">close</i></a>\
        </li>`
        ret+=li
      }
      ret+=`</ul><div class="relative"><a id="add-proyectos" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"> add</i></a></div>`;
      $("#proyectos").html(ret);

    });

    $(document).on("click",".edit-servicios",function(){
      let padre = ($(this).siblings(".cotainer-i-servicios"));
      let array = []
      padre.children().each(function(index,val){
        if(index != 4)
          array.push($(val).find("input").val());
      });
      array.push($(padre).find("textarea").val())
      updateServicios(array,$(this).attr("id"));
    });

    $(document).on("click","#add-servicio",function(){
      addServicios();
    });

    $(document).on("click",".borrar-servicios",function(){
      removeServicios($(this).attr("data-id"));
    });

    $(document).on("click",".edit-equipo",function(){
      let padre = ($(this).siblings(".cotainer-i-equipo"));
      let array = []
      padre.children().each(function(index,val){
        array.push($(val).find("input").val());
      });
      updateEquipo(array,$(this).attr("id"));
    });

    $(document).on("click","#add-equipo",function(){
      addEquipo();
    });

    $(document).on("click",".borrar-equipo",function(){
      removeEquipo($(this).attr("data-id"));
    });

    $(document).on("click",".edit-proyectos",function(){
      let padre = ($(this).siblings(".cotainer-i-proyectos"));
      let array = []
      padre.children().each(function(index,val){
        array.push($(val).find("input").val());
      });
      updateProyectos(array,$(this).attr("id"));
    });

    $(document).on("click","#add-proyectos",function(){
      addProyectos();
    });

    $(document).on("click",".borrar-proyectos",function(){
      removeProyectos($(this).attr("data-id"));
    });




    $(".update-titulos").on("click",function(){
      updateTitulos();
    });

    $(".update-nosotros").on("click",function(){
      updateNosotros();
    });

    $(".update-parallax").on("click",function(){
      updateParallax();
    });
});

function addServicios(){
  var serviciosRef = firebase.database().ref(`vista1/servicios`);
  let temporal;
  serviciosRef.on('value', function(snap) {
    temporal= snap.val();
  })
  let tam = temporal.length;
  let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
  let objeto = {
    "id": abc[tam],
    "img": "",
    "imgModal": "",
    "linea1": "",
    "linea2": "",
    "linea3": "",
    "texto": "",
    "textoModal": ""
  }
  temporal.push(objeto);
  serviciosRef.set (temporal);
};

function removeServicios(id){
  var serviciosRef = firebase.database().ref(`vista1/servicios/${id}`);
  serviciosRef.remove ();
};

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

function removeEquipo(id){
  var equipoRef = firebase.database().ref(`vista1/equipo/${id}`);
  equipoRef.remove ();
};

function updateEquipo(x,index){
  var equipoRef = firebase.database().ref(`vista1/equipo/${index}`);
  equipoRef.update ({
    "cargo": x[0],
    "nombre": x[1],
    "texto": x[2]
  },function(callback){
    Mensaje("Datos guardados correctamente");
  });
};

function addEquipo(){
  var equipoRef = firebase.database().ref(`vista1/equipo`);
  let temporal;
  equipoRef.on('value', function(snap) {
    temporal= snap.val();
  })
  let tam = temporal.length;
  let objeto = {
    "cargo": "",
    "nombre": "",
    "texto": ""
  }
  temporal.push(objeto);
  equipoRef.set (temporal);
};

function removeProyectos(id){
  var proyectosRef = firebase.database().ref(`vista1/proyectos/${id}`);
  proyectosRef.remove ();
};

function updateProyectos(x,index){
  var proyectosRef = firebase.database().ref(`vista1/proyectos/${index}`);
  proyectosRef.update ({
    "img": x[0],
    "src": x[1],
    "titulo": x[2],
    "texto": x[3]
  },function(callback){
    Mensaje("Datos guardados correctamente");
  });
};

function addProyectos(){
  var proyectosRef = firebase.database().ref(`vista1/proyectos`);
  let temporal;
  proyectosRef.on('value', function(snap) {
    temporal= snap.val();
  })
  let tam = temporal.length;
  let objeto = {
    "img": "",
    "src": "",
    "titulo": "",
    "texto": ""
  }
  temporal.push(objeto);
  proyectosRef.set (temporal);
};

    function Inputs(id,texto){
     return  `<div class="input-field">\
        <input id="${id}" type="text" value='${texto}' class="i-servicios">\
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

    function updateNosotros(){
      var nosotrosRef = firebase.database().ref("vista1/nosotros");
      let tit1 = $($(".i-nosotros")[0]).val();
      let tit2 = $($(".i-nosotros")[1]).val();
      let tit3 = $($(".i-nosotros")[2]).val();
      let tit4 = $($(".i-nosotros")[3]).val();

      nosotrosRef.update ({
         "titulo": tit1,
         "p1": tit2,
         "p2": tit3,
         "img": tit4
      },function(callback){
        Mensaje("Datos guardados correctamente");
      });
    };

    function updateParallax(){
      var parallaxRef = firebase.database().ref("vista1/parallax");
      let tit1 = $($(".i-parallax")[0]).val();
      let tit2 = $($(".i-parallax")[1]).val();
      let tit3 = $($(".i-parallax")[2]).val();
      let tit4 = $($(".i-parallax")[3]).val();
      let tit5 = $($(".i-parallax")[4]).val();

      parallaxRef.update ({
         "titulo": tit1,
         "texto1": tit2,
         "texto2": tit4,
         "negrita1": tit3,
         "negrita2": tit5
      },function(callback){
        Mensaje("Datos guardados correctamente");
      });
    };
