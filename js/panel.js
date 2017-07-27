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

  var config = {
    apiKey: "AIzaSyA1K8MD0kErN7_1yHz8UyDcReKTQK5VESo",
    authDomain: "panel-e957f.firebaseapp.com",
    databaseURL: "https://panel-e957f.firebaseio.com",
    projectId: "panel-e957f",
    storageBucket: "gs://panel-e957f.appspot.com/",
    messagingSenderId: "800679341255"
  };
  firebase.initializeApp(config);

  /*fileButton.addEventListener('change', function(e) {
    //Obtener archivo
    var file = e.target.files[0];
    // Crear un storage ref
    var storageRef = firebase.storage().ref('mis_fotos/' + file.name);
    // Subir archivo
    var task = storageRef.put(file);
    // Actualizar barra progreso
    task.on('state_changed',
      function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        $(".uploader").value(percentage);
        //uploader.value = percentage;
      },
      function error(err) {
      },
      function complete() {
      }
      )
  });*/

  /*<div class="progress">
      <div class="determinate" style="width: 70%"></div>
  </div>*/

  var vista2 = firebase.database().ref().child('vista2');
  vista2.on('value', function(snap) {
    const x = snap.val()
    let titulos = x.titulos;
    let servicios = x.servicios;
    let oficinasFisicas = x.oficinasFisicas;
    let oficinasTemporales = x.oficinasTemporales;
    let oficinasVirtuales = x.oficinasVirtuales;
    let virtualOro = x.virtualOro;
    let virtualPlatinum = x.virtualPlatinum;
    Bro($(".i-titulos2")[0],titulos.titulo);
    Bro($(".i-titulos2")[1],titulos.titulo2);
    Bro($(".i-titulos2")[2],titulos.titulo3);
    Bro($(".i-titulos2")[3],titulos.titulo4);
    Bro($(".i-titulos2")[4],titulos.titulo5);
    Bro($(".i-titulos2")[5],titulos.titulo6);

    Bro($(".i-servicios2")[0],servicios.servicios1);
    Bro($(".i-servicios2")[1],servicios.servicios2);
    Bro($(".i-servicios2")[2],servicios.servicios3);
    Bro($(".i-servicios2")[3],servicios.servicios4);
    Bro($(".i-servicios2")[4],servicios.servicios5);
    Bro($(".i-servicios2")[5],servicios.servicios6);

    Bro($(".i-oficinasFisicas"),oficinasFisicas.descripcion);

    Bro($(".i-oficinasTemporales")[0],oficinasTemporales.descripcion);
    Bro($(".i-oficinasTemporales")[1],oficinasTemporales.caracteristica1);
    Bro($(".i-oficinasTemporales")[2],oficinasTemporales.caracteristica2);
    Bro($(".i-oficinasTemporales")[3],oficinasTemporales.caracteristica3);
    Bro($(".i-oficinasTemporales")[4],oficinasTemporales.caracteristica4);
    Bro($(".i-oficinasTemporales")[5],oficinasTemporales.caracteristica5);
    Bro($(".i-oficinasTemporales")[6],oficinasTemporales.caracteristica6);
    Bro($(".i-oficinasTemporales")[7],oficinasTemporales.caracteristica7);

    Bro($(".i-oficinasVirtuales"),oficinasVirtuales.descripcion);
    Virtuales(virtualOro,"virtualOro")
    Virtuales(virtualPlatinum,"virtualPlatinum")

  });

  $(document).on("click","#add-virtualOro",function(){
    addVirtualOro();
  });

  $(document).on("click","#add-virtualPlatinum",function(){
    addVirtualPlatinum();
  });

  $(document).on("click",".borrar-virtualOro",function(){
    removeVirtualOro($(this).attr("data-id"));
  });

  $(document).on("click",".edit-virtualOro",function(){
    let padre = ($(this).siblings(".cotainer-i-virtualOro"));
    let array = []
    padre.children().each(function(index,val){
      array.push($(val).find("input").val());
    });
    updatevirtualOro(array,$(this).attr("id"));
  });

  $(document).on("click",".edit-virtualPlatinum",function(){
    let padre = ($(this).siblings(".cotainer-i-virtualPlatinum"));
    let array = []
    padre.children().each(function(index,val){
      array.push($(val).find("input").val());
    });
    updatevirtualPlatinum(array,$(this).attr("id"));
  });


  function removeVirtualOro(id){
    var equipoRef = firebase.database().ref(`vista2/virtualOro/${id}`);
    equipoRef.remove ();
  };

  function removeVirtualPlatinum(id){
    var equipoRef = firebase.database().ref(`vista2/virtualPlatinum/${id}`);
    equipoRef.remove ();
  };

  function addVirtualOro(){
    var serviciosRef = firebase.database().ref(`vista2/virtualOro`);
    let temporal = [];
    serviciosRef.on('value', function(snap) {
      temporal= snap.val();
    })
    let objeto = {
      "text": ""
    }
    temporal.push(objeto);
    serviciosRef.set (temporal);
  };

  function addVirtualPlatinum(){
    var serviciosRef = firebase.database().ref(`vista2/virtualPlatinum`);
    let temporal = [];
    serviciosRef.on('value', function(snap) {
      temporal= snap.val();
    })
    let objeto = {
      "text": ""
    }
    temporal.push(objeto);
    serviciosRef.set (temporal);
  };

  function updatevirtualOro(x,index){
    var serviciosRef = firebase.database().ref(`vista2/virtualOro/${index}`);
    serviciosRef.update ({
      "text": x[0]
    },function(callback){
      Mensaje("Datos guardados correctamente");
    });
  };

  function updatevirtualPlatinum(x,index){
    console.log(x)
    console.log(index)
    var serviciosRef = firebase.database().ref(`vista2/virtualPlatinum/${index}`);
    serviciosRef.update ({
      "text": x[0]
    },function(callback){
      Mensaje("Datos guardados correctamente");
    });
  };



  function Virtuales(x,y){

    const length = x.length;
    $(`#num-${y}`).text(length);
    let ret = `<ul class="collection black">`
    for (let i = 0; i < length; i++) {
      let li = `
      <li class="collection-item avatar">\
        <i class="material-icons circle">folder</i>\
        <div class="cotainer-i-${y}">\
            ${Inputs(`li${i}`,x[i].text)}
        </div>
        </p>\
        <a href="#!" id="${i}" class="secondary-content r3 edit-${y}"><i class="material-icons">edit</i></a>\
        <a href="#!" data-id="${i}" class="secondary-content borrar-${y}"><i class="material-icons">close</i></a>\
      </li>`
      ret+=li
    }
    ret+=`</ul><div class="relative"><a id="add-${y}" class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"> add</i></a></div>`;
    $(`#${y}`).html(ret);
  }

  $(document).on("click",".update-titulos2",function(){
    ActualizarTitulos()
  });

  $(document).on("click",".update-servicios2",function(){
    ActualizarServicios()
  });

  $(document).on("click",".update-oficinasFisicas",function(){
    ActualizarOficinasFisicas()
  });

  $(document).on("click",".update-oficinasVirtuales",function(){
    ActualizarOficinasVirtuales()
  });

  $(document).on("click",".update-oficinasTemporales",function(){
    ActualizarOficinasTemporales()
  });
  Vista1();
  //Img();

});

function GetImg(c,f){
    var proyectosRef = firebase.database().ref(`vista1/${f}`);
    proyectosRef.on('value', function(snap) {
      const x = snap.val()
      let ret = ""
      for (let i = 0; i < x.length; i++) {
        let y = (JSON.parse(x[i].img));
        for (let j = 0; j < y.length; j++) {
          ret += `<img class="img-${f} imgs" src="${y[j].url}"><i class="material-icons img-icon" data-id="${i}" data-src="${y[j].file}">close</i>`
        }
        $(`${c}[data-id="${i}"]`).html(ret);
        ret=""
      }
    })
}

$(document).on("click",".img-icon",function(){
  const src = $(this).data("src")
  const id = $(this).data("id")
  let parent = $(this).parent()
  var desertRef = firebase.storage().ref('proyectos/'+src);
  desertRef.delete().then(function() {
    Mensaje("Imagen borrada con exito!")
  }).catch(function(error) {
    console.log(error);
    // Uh-oh, an error occurred!
  });

  $(this).prev().remove();
  $(this).remove();
  let imgsx = []
  parent.children().each(function(index,val){
    if($(val).prop("tagName") == "IMG")
      imgsx.push({url:$(val).attr("src"),file:$(val).next().attr("data-src")});
  });

    var proyectosRef = firebase.database().ref(`vista1/proyectos/${id}`);
    proyectosRef.update ({
      "img": JSON.stringify(imgsx)
    },function(callback){
      Mensaje("Datos guardados correctamente");
    });

})

$(document).on({
    mouseenter: function () {
      $(this).next().addClass("rojo")
    },
    mouseleave: function () {
        $(this).next().removeClass("rojo")
    }
},".imgs");

$(document).on({
    mouseenter: function () {
      this.className += " rojo"
    },
    mouseleave: function () {
        $(this).removeClass("rojo")
    }
},".img-icon");

    function Img(className,folder){

      GetImg(className,folder);

      /*
      var pro = firebase.database().ref(`vista1/${folder}/${id}`);
      let imagenes = pro.img;
      console.log(imagenes);
      // Subir archivo
      var task = storageRef.put(file);
      // Actualizar barra progreso
      task.on('state_changed',
        function progress(snapshot) {
          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          $(".uploader").value(percentage);
          //uploader.value = percentage;
        },
        function error(err) {
        },
        function complete() {
        }
        )
      /*
      storageRef.getDownloadURL().then(function(url2) {
        console.log(url2)
        console.log($($(".img-proyectos")[0]))
        $($(".img-proyectos")[0]).attr("src",url2)
      });*/
    }



function ActualizarTitulos() {

    var titulosRef = firebase.database().ref("vista2/titulos");
    let tit1 = $($(".i-titulos2")[0]).val();
    let tit2 = $($(".i-titulos2")[1]).val();
    let tit3 = $($(".i-titulos2")[2]).val();
    let tit4 = $($(".i-titulos2")[3]).val();
    let tit5 = $($(".i-titulos2")[4]).val();
    let tit6 = $($(".i-titulos2")[5]).val();

    titulosRef.update ({
       "titulo": tit1,
       "titulo2": tit2,
       "titulo3": tit3,
       "titulo4": tit4,
       "titulo5": tit5,
       "titulo6": tit6
    },function(callback){
      Mensaje("Datos guardados correctamente");
    });
}

function ActualizarOficinasTemporales() {

    var titulosRef = firebase.database().ref("vista2/oficinasTemporales");
    let tit1 = $($(".i-oficinasTemporales")[0]).val();
    let tit2 = $($(".i-oficinasTemporales")[1]).val();
    let tit3 = $($(".i-oficinasTemporales")[2]).val();
    let tit4 = $($(".i-oficinasTemporales")[3]).val();
    let tit5 = $($(".i-oficinasTemporales")[4]).val();
    let tit6 = $($(".i-oficinasTemporales")[5]).val();
    let tit7 = $($(".i-oficinasTemporales")[6]).val();
    let tit8 = $($(".i-oficinasTemporales")[7]).val();

    titulosRef.update ({
       "descripcion": tit1,
       "caracteristica1": tit2,
       "caracteristica2": tit3,
       "caracteristica3": tit4,
       "caracteristica4": tit5,
       "caracteristica5": tit6,
       "caracteristica6": tit7,
       "caracteristica7": tit8
    },function(callback){
      Mensaje("Datos guardados correctamente");
    });
}

function ActualizarOficinasVirtuales() {

    var titulosRef = firebase.database().ref("vista2/oficinasVirtuales");
    let tit1 = $($(".i-oficinasVirtuales")[0]).val();

    titulosRef.update ({
       "descripcion": tit1
    },function(callback){
      Mensaje("Datos guardados correctamente");
    });
}

function ActualizarOficinasFisicas() {

    var titulosRef = firebase.database().ref("vista2/oficinasFisicas");
    let tit1 = $($(".i-oficinasFisicas")[0]).val();

    titulosRef.update ({
       "descripcion": tit1
    },function(callback){
      Mensaje("Datos guardados correctamente");
    });
}

function ActualizarServicios() {

    var titulosRef = firebase.database().ref("vista2/servicios");
    let tit1 = $($(".i-servicios2")[0]).val();
    let tit2 = $($(".i-servicios2")[1]).val();
    let tit3 = $($(".i-servicios2")[2]).val();
    let tit4 = $($(".i-servicios2")[3]).val();
    let tit5 = $($(".i-servicios2")[4]).val();
    let tit6 = $($(".i-servicios2")[5]).val();

    titulosRef.update ({
       "servicios1": tit1,
       "servicios2": tit2,
       "servicios3": tit3,
       "servicios4": tit4,
       "servicios5": tit5,
       "servicios6": tit6
    },function(callback){
      Mensaje("Datos guardados correctamente");
    });
}

function Bro(x,y){
  $(x).siblings("label").addClass("active")
  $(x).val(y);
}

function Vista1(){

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

        Bro($(".i-contactenos")[0],contactenos.correo)
        Bro($(".i-contactenos")[1],contactenos.direccion)
        Bro($(".i-contactenos")[2],contactenos.telelfono)
        Bro($(".i-contactenos")[3],contactenos.texto)
        Bro($(".i-contactenos")[4],contactenos.titulo)

        Bro(("#titulo1"),titulos.titulo)
        Bro(("#titulo2"),titulos.titulo2)
        Bro(("#titulo3"),titulos.titulo3)
        Bro(("#titulo4"),titulos.titulo4)

        Bro(("#titulo"),nosotros.titulo)
        Bro(("#parrafo1"),nosotros.p1)
        Bro(("#parrafo2"),nosotros.p2)
        Bro(("#imagen"),nosotros.img)

        Bro(("#principal"),parallax.titulo)
        Bro(("#texto1"),parallax.texto1)
        Bro(("#texto2"),parallax.texto2)
        Bro(("#negrita1"),parallax.negrita1)
        Bro(("#negrita2"),parallax.negrita2)

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
                ${File(`imagenes`,i,"proyectos")}
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
        Img(".file-proyectos","proyectos");

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
        let padre = ($(this).siblings(".cotainer-i-proyectos").find(".inputs"));
        let padre2 = ($(this).siblings(".cotainer-i-proyectos").find(".file-proyectos"));
        let input = ($(this).siblings(".cotainer-i-proyectos").find(".file-field").find(".btn").find("input"));
        const fileName = (input.val().split('\\').pop())
        const file = input[0].files[0]
        let array = []
        let imgs2 = []

        padre2.children().each(function(index,val){
          if($(val).prop("tagName") == "IMG"){
            imgs2.push({url:$(val).attr("src"),file:$(val).next().attr("data-src")});
          }
        });
        let imgs = []
        padre.children().each(function(index,val){
          if($(val).attr("class") == "i-servicios")
            array.push($(val).val());
        });
        updateProyectos(array,$(this).attr("id"),fileName);
        console.log(imgs2)
        UpImage(fileName,file,imgs2,$(this).attr("id"));
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

      $(".update-contactenos").on("click",function(){
        updateContactenos();
      });
}

function UpImage(fileName,file,x,index){

  var storageRef = firebase.storage().ref('proyectos/' + fileName);
      // Subir archivo
      var task = storageRef.put(file);
      // Actualizar barra progreso
      task.on('state_changed',
      function progress(snapshot) {
        $(".centrado").removeClass("esconder");
      },
      function error(err) {
        console.log(err)
      },
      function complete(snap) {
        $(".centrado").addClass("esconder");
        var storageRef = firebase.storage().ref();
        var imagesRef = storageRef.child('proyectos/'+fileName);
        imagesRef.getDownloadURL().then(function(url) {
          x.push({url:url,file:fileName});
          var proyectosRef = firebase.database().ref(`vista1/proyectos/${index}`);
          proyectosRef.update ({
            "img": JSON.stringify(x)
          },function(callback){
            Mensaje("Datos guardados correctamente");
          });
        });
      }
  )
}


    function updateContactenos(){
      var contactenosRef = firebase.database().ref("vista1/contactenos");
      let tit1 = $($(".i-contactenos")[0]).val();
      let tit2 = $($(".i-contactenos")[1]).val();
      let tit3 = $($(".i-contactenos")[2]).val();
      let tit4 = $($(".i-contactenos")[3]).val();
      let tit5 = $($(".i-contactenos")[4]).val();

      contactenosRef.update ({
         "correo": tit1,
         "direccion": tit2,
         "telelfono": tit3,
         "texto": tit4,
         "titulo": tit5
      },function(callback){
        Mensaje("Datos guardados correctamente");
      });
    }

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

function updateProyectos(x,index,fileName){
  var proyectosRef = firebase.database().ref(`vista1/proyectos/${index}`);
  proyectosRef.update ({
    "titulo": x[0],
    "texto": x[1]
  },function(callback){

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
     return  `<div class="input-field inputs">\
        <input id="${id}" type="text" value='${texto}' class="i-servicios">\
        <label for="${id}" class="active"> ${id}</label>\
      </div>`;
    }

    function File(x,id,y){
     return  `<div class="file-field input-field i-servicios">
       <div class="btn">
         <span>${x}</span>
         <input type="file" data-id="${id}" class="up-${y}">
       </div>
       <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
     </div>
     <div class="file-${y}" data-id="${id}">

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
