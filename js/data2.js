$( document ).ready(function() {
  "use strict";
  $('.cont').click(function() {
    $(".enviar").click();
  });
  // Initialize Firebase
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
       const contactenos = x.contactenos;
       $(".telefono").text(contactenos.telelfono);
       $(".address").html(`<strong>Dirección : </strong>${contactenos.direccion}`);
       $(".email-in").text(contactenos.correo);
       $(".p-contact").text(contactenos.texto);
       $(".contact-title").text(contactenos.titulo);
    });
    var vista2 = firebase.database().ref().child('vista2');
    vista2.on('value', function(snap) {
       const x = snap.val();
       let titulos = x.titulos;
       let servicios = x.servicios;
       let oficinasFisicas = x.oficinasFisicas;
       let oficinasTemporales = x.oficinasTemporales;
       let oficinasVirtuales = x.oficinasVirtuales;
       let virtualOro = x.virtualOro;
       let virtualPlatinum = x.virtualPlatinum;

       $(".banner-text").text(titulos.titulo);
       $("#titulo2").text(titulos.titulo2);
       $("#titulo3").text(titulos.titulo3);
       $("#titulo4").text(titulos.titulo4);
       $("#titulo5").text(titulos.titulo5);
       $("#titulo6").text(titulos.titulo6);

       let ret = "";
       ret += Servicios(servicios.servicios1,"4");
       ret += Servicios(servicios.servicios2,"3");
       ret += Servicios(servicios.servicios3,"2");
       ret += Servicios(servicios.servicios4,"5");
       ret += Servicios(servicios.servicios5,"6");
       ret += Servicios(servicios.servicios6,"1");
       ret += `</div>`;
       console.log(ret);
       $("#servicios").html(ret);
       $("#oficinasFisicas").text(oficinasFisicas.descripcion);
       $("#oficinasTemporales").text(oficinasTemporales.descripcion);

       ret = Lis(oficinasTemporales.caracteristica1);
       ret += Lis(oficinasTemporales.caracteristica2);
       ret += Lis(oficinasTemporales.caracteristica3);
       ret += Lis(oficinasTemporales.caracteristica4);
       ret += Lis(oficinasTemporales.caracteristica5);
       ret += Lis(oficinasTemporales.caracteristica6);
       ret += Lis(oficinasTemporales.caracteristica7);
       $(".ul-oficinasTemporales").html(ret);
       $(".virtualOro").html(Virtuals(virtualOro))
       $(".virtualPlatinum").html(Virtuals(virtualPlatinum))

    });
    //Data();
});

function Virtuals(v){
  ret=""
  for (var i = 0; i < v.length; i++) {
    ret+=Lis(v[i].text)
  }
  return ret;
}

function Lis(x){
  let  ret = `
      <li class="li"> &nbsp;&nbsp;${x}</li>\
    `
  return ret;
}

function Servicios(x,index){
  let ret = `<div class="col-lg-2 col-md-2 col-xs-6">
     <div class="caja caja${index}"><div class="in">${x}</div></div>
   </div>`
   return ret;
}


function Data(){

      var vista2Ref = firebase.database().ref().child('vista2');
      vista2Ref.set({
        titulos: {
          "titulo": "ALQUILER DE OFICINAS",
          "titulo2": "OFICINAS FISICAS",
          "titulo3": "OFICINAS TEMPORALES",
          "titulo4": "OFICINAS VIRTUALES",
          "titulo5": "VIRTUAL ORO",
          "titulo6": "VIRTUAL PLATINUM"
        },servicios:{
          servicios1: "Servicio personalizado a clientes",
          servicios2: "Línea telefónica exclusiva",
          servicios3: "Desvío / transferencias de llamadas",
          servicios4: "Apartado postal en Costa Rica y en USA",
          servicios5: "Servicio de mensajería",
          servicios6: "Servicio de Fax"
        },oficinasFisicas:{
          descripcion: "Nuestra perfecta ubicación en Guachipelin Escazú, le permitirá disfrutar de su oficina privada en la mejor zona comercial y empresarial del país. Completamente amobladas y con tecnología de punta, SCG le ofrece oficinas físicas permanentes para aumentar tanto su imagen corporativa como su productividad. Al tener los servicios de su oficina física podrá disfrutar de las áreas de cocina y café que son un espacio perfecto para tomar un descanso corto durante la jornada laboral."
        },oficinasTemporales: {
          descripcion: "Tiene una reunión de última hora ¿No tiene oficina actualmente? ¿Desea privacidad y confort? Tenemos la solución : Nuestro servicio de oficinas temporales, disponible para su uso por horas, le permitirá poder disfrutar de oficinas ejecutivas con parqueo , aire acondicionado , servicio telefónico de larga distancia y wifi por las horas que estime necesario.Solo llame y reserve con anticipación y de la impresión que tanto necesita su negocio al mejor costo del mercado. Otros beneficios de nuestras oficinas temporales son:",
          caracteristica1: "Oficinas y salas de reuniones lujosamente amobladas.",
          caracteristica2: "Ambiente de alta tecnología.",
          caracteristica3: "Líneas telefónicas y de fax únicas para cada cliente.",
          caracteristica4: "Servicios de contestador de llamadas personalizado.",
          caracteristica5: "Acceso a internet de alta velocidad.",
          caracteristica6: "Servicio de apoyo administrativo en el sitio.",
          caracteristica7: "Ar.rendamiento de oficinas a corto o largo plazo."
        },oficinasVirtuales: {
          descripcion: "Este novedoso concepto de oficina es una opción para la operación de su empresa, accediendo a manejarla efectivamente desde el lugar donde se encuentre. Con este formato usted podrá utilizar la dirección física de SCG-Business Center, como domicilio de su empresa, para la recepción de documentación y traslado. Cuenta con los servicios de recepción y redirección de llamadas, atención a clientes y/o visitas, disposición de las salas de reuniones y oficinas."
        },virtualOro:{
          0: {
            text: "Domicilio físico de su empresa en SCG Business Centre"
          },
          1: {
            text: "Toma y reporte de mensajes"
          },
          2: {
            text: "Descuentos en salas y oficinas"
          },
          3: {
            text: "Atención de visitas"
          },
          4: {
            text: "Recepción de paquetes y documentos"
          },
          5: {
            text: "Manejo ilimitado de llamadas entrando"
          },
          6: {
            text: "Servicio de contestadora de llamadas personalizadas"
          },
          7: {
            text: "Servicio Bilingüe"
          },
          8: {
            text: "Servicio de desvió/transferencia de llamadas"
          },
          9: {
            text: "Estacionamiento libre durante sus visitas al Business Center"
          },
          10: {
            text: "Apartado postal local y en USA"
          }
        },virtualPlatinum: {
          0: {
            text: "Domicilio físico de su empresa en SCG Business Centre"
          },
          1: {
            text: "Toma y reporte de mensajes"
          },
          2: {
            text: "Descuentos en salas y oficinas"
          },
          3: {
            text: "Atención de visitas"
          },
          4: {
            text: "Recepción de paquetes y documentos"
          },
          5: {
            text: "Manejo ilimitado de llamadas entrando"
          },
          6: {
            text: "Servicio de contestadora de llamadas personalizadas"
          },
          7: {
            text: "Servicio Bilingüe"
          },
          8: {
            text: "Servicio de desvió/transferencia de llamadas"
          },
          9: {
            text: "Estacionamiento libre durante sus visitas al Business Center"
          },
          10: {
            text: "Apartado postal local y en USA"
          },
          11: {
            text: "Cuatro horas mensuales de uso de oficina o sala de reuniones"
          },
          12: {
            text: "Seis mensajerías al mes dentro del gran área metropolitana"
          }
        }
      });
    }
