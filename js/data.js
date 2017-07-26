
$( document ).ready(function() {
  "use strict";
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
    vista1.once('value', function(snap) {
      const x = snap.val();
      const titulos = x.titulos;
      const nosotros = x.nosotros;
      const parallax = x.parallax;
      const contactenos = x.contactenos;
      let servicios = x.servicios;
      let proyectos = x.proyectos;
      let equipo = x.equipo;
      let i =0;
      $.each(titulos, function(index, value) {
        $($(".titulos")[i++]).text(value);
      });

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
      $("#owl-demo").html(ret);
      $('.owl-carousel').owlCarousel({
       items: 2,
       margin: 56,
       center:true,
       nav : true,
       loop:true,
       dots: true
      });
       $(".owl-prev").text("");
       $(".owl-next").text("");

      $(".telefono").text(contactenos.telelfono);
      $(".address").html(`<strong>Dirección : </strong>${contactenos.direccion}`);
      $(".email-in").text(contactenos.correo);
      $(".p-contact").text(contactenos.texto);
      $(".contact-title").text(contactenos.titulo);
    });

    function Proyectos(item){
      const ret =
      `<div class="item">\
          <img src="${item.src}" data-img='${item.img}' data-index="0">\
          <h4 class="item-title">\
            ${item.titulo}
          </h4>\
          <p class="item-body">\
            ${item.texto}
          ​</p>\
        </div>\
        `;
      return ret;
    }

    function Ret(x,className,funcion,delim){
      let ret = `<div class="row ${className} center">`;
      for (let i = 0; i < x.length; i++) {
        if(i%delim==0&&i!=0)
          ret+=`</div><div class="row ${className} center">`
        if(funcion == "card")
          ret += Cards(x[i]);
        else if(funcion == "equipo")
          ret += Equipo(x[i]);
      }
      ret+="</div>";
      return ret;
    }

    function Equipo(avatar){
      let ret = `
        <div class="col-lg-3 col-md-3 col-xs-12">\
          <div class="box-our">\
            <h2 class="avatar-name">${avatar.nombre}</h2>\
            <div class="avatar-cargo">\
              ${avatar.cargo}
            </div>\
            <p class="avatar-text">\
              ${avatar.texto}
            </p>\
          </div>\
        </div>\
      `
      return ret;
    }

    function Lineas(x){
      return `<div class="over-card">${x}</div>`
    }

    function Cards(x){
      const ret = `<div class="col-lg-4 col-md-4 col-xs-12 left">\
        <div class="box-over-card">\
          ${Lineas(x.linea1)}
          ${Lineas(x.linea2)}
          ${Lineas(x.linea3)}
        </div>\
        <div class="card">\
          <img src="${x.img}" alt="Avatar" class="img-card">\
            <p class="text-card">\
              ${x.texto}
            </p>\
           <div class="leer"  data-valserv = "${x.id}" >\
             Leer Más\
           </div>\
        </div>\
      </div>`
      return ret;
    }
    //Send(); DATA de REspaldos


    function Send(){
      var vista1Ref = firebase.database().ref("vista1/");
      vista1Ref.set({
        titulos: {
          "titulo": "Construimos Tu Futuro",
          "titulo2": "Nuestros Servicios",
          "titulo3": "Nuestros Equipo",
          "titulo4": "Nuestros Proyectos"
        },
        servicios: {
          0: {
            id: "a",
            linea1: "DESARROLLO DE",
            linea2: "PROYECTOS",
            linea3: "INMOBILIARIOS",
            img: "img/card1.jpg",
            texto: "Ofrecemos servicios profesionales de estructuración y desarrollo de proyectos inmobiliarios, que satisfacen los requerimientos y necesidades de nuestros clientes antes, durante y después de finalizado el proyecto, cumpliendo con los estándares de calidad y plazos definidos.",
            imgModal: "texto",
            textoModal: "texto"
          },
          1: {
            id: "b",
            linea1: "VIALIDAD DE",
            linea2: "PROYECTOS",
            linea3: "",
            img: "img/card2.jpg",
            texto: "Apoyamos a nuestros clientes durante el proceso de adquisición, estructuración de transacciones, negociación de contratos, seguimiento a inversiones realizadas; aportando la información requerida por compradores y financiadores.",
            imgModal: "texto",
            textoModal: "texto"
          },
          2: {
            id: "c",
            linea1: "COMERCIALIZACIÓN",
            linea2: "",
            linea3: "",
            img: "img/card3.jpg",
            texto: "Proporcionamos a nuestros clientes: Estudios de mercado, gestión de la relación comercial con clientes, detección de  necesidades de mercado, ventas, elaboración de planes de ventas, promoción de los servicios técnicos y logísticos.",
            imgModal: "texto",
            textoModal: "texto"
          },
          3: {
            id: "d",
            linea1: "ANÁLISIS DE",
            linea2: "NEGOCIO",
            linea3: "",
            img: "img/analisisdenegocioss.jpg",
            texto: 'Acompañamos a nuestros clientes en la toma de decisiones estratégicas, claves para el crecimiento de su negocio: Validación de requerimientos para reingeniería de procesos, análisis y recomendación de soluciones de mejora continuas, validación y documentación de problemas y oportunidades de negocio.',
            imgModal: "texto",
            textoModal: "texto"
          },
          4: {
            id: "e",
            linea1: "ASESORÍA",
            linea2: "FINANCIERA",
            linea3: "",
            img: "img/financiero.jpg",
            texto: "Apoyamos a nuestros clientes en cada fase del ciclo económico de su negocio, generando estrategias financieras con objetivos realizables.",
            imgModal: "texto",
            textoModal: "texto"
          },
          5: {
            id: "f",
            linea1: "PERMISOLOGIA",
            linea2: "",
            linea3: "",
            img: "img/permisologia.jpg",
            texto: "Gestionamos permisos y documentaciones requeridas por las autoridades pertinentes, para el desarrollo de proyectos inmobiliarios: CFIA, INVU, Salud, AyA, Municipalidad, Bomberos , Senara, Setena, Minaet, Otros.",
            imgModal: "texto",
            textoModal: "texto"
          },
          6: {
            id: "g",
            linea1: "ASESORÍA",
            linea2: "LEGAL",
            linea3: "",
            img: "img/legal.jpg",
            texto: "Contamos con un staff de abogados que ofrece a nuestros clientes asesoramiento especializado y personalizado:",
            imgModal: "texto",
            textoModal: "texto"
          },
          7: {
            id: "h",
            linea1: "BUSINESS",
            linea2: "BROKER",
            linea3: "",
            img: "img/brooker.jpg",
            texto: "Ofrecemos a nuestros clientes servicios de apoyo e intermediación, tanto a nivel nacional como internacional:   Organización y coordinación de agendas comerciales y de negocio. Organizacion de Misiones exploratorias",
            imgModal: "texto",
            textoModal: "texto"
          }
        },
        nosotros: {
          titulo: "SCG BUSINESS CENTER",
          p1: "Somos una empresa costarricense que desde el año 2006, ofrecemos a nuestros clientes servicios multidisciplinarios, enmarcados en la planificación y desarrollo de proyectos de negocio.",
          p2: "Como parte de nuestras funciones, realizamos acompañamiento en el desarrollo de proyectos inmobiliarios, industriales, comerciales, viabilidad de proyectos, asesorías financieras y legales, comercialización, análisis de negocios, business broker y alquiler de espacios de oficinas y virtuales.",
          img:"img/scg-business.jpg"
        },
        parallax: {
          titulo: "Acompañamos a nuestros clientes en la toma de decisiones estratégicas",
          texto1: "En ",
          texto2: "nos hemos propuesto mantener relaciones altamente productivas con nuestros clientes, reforzando nuestros valores de ",
          negrita1: "SCG Business Center ",
          negrita2: "Excelencia, Confianza, Honestidad e Innovación."
        },
        equipo: {
          0:{
            nombre: "José M. Núñez Ramírez",
            cargo: "Chief Executive Officer",
            texto: "Magister en Comunicaciones con énfasis en Administración de Negocios (Universidad San Thomas, USA). Cuenta con 8 años de experiencia en remodelación inmobiliaria en Estados Unidos, y 12 años como desarrollador inmobiliario en Costa Rica."
          },
          1:{
            nombre: "Karolina Zeledón Mora",
            cargo: "Logística y Comunicaciones",
            texto: "Graduada en Administración de Empresas, con énfasis en Administración de Proyectos, Riesgo y Seguros. Cuenta con más de 15 años de experiencia en administración de proyectos, logística, servicio al cliente, manejo de personal, entre otros."
          },
          2:{
            nombre: "Frank Miranda Arias",
            cargo: "Captación de Bienes Raíces y Negocios Afines",
            texto: "Contador privado, con estudios en Administración de Empresas. Posee 15 años de experiencia en asesorías de bienes raíces y gestoría de negocios."
          },
          3:{
            nombre: "Armando Monge Cordero",
            cargo: "Ingeniero Civil y Asesoría en la Construcción.",
            texto: "Ingeniero Civil registrado, con amplia experiencia en construcción e infraestructura, presupuestos, análisis de costos e inspección."
          }
        },
        proyectos: {
          0:{
            src:"img/a3.png",
            img:'["img/ofice1.png","img/ofice2.png","img/ofice.png","img/a3.png"]',
            titulo: "Ofi-Bodegas La Lima",
            texto:"Un nuevo concepto sostenible en ofi-bodegas."
          },
          1:{
            src:"img/ta3.png",
            img:'["img/ta2.png","img/ta1.png","img/ta3.png"]',
            titulo: "Hotel Tramonto",
            texto:"Tecnología y diseño para el entretenimiento."
          },
          2:{
            src:"img/club3.png",
            img:'["img/club1.png","img/club2.png","img/club3.png"]',
            titulo: "Club Guaira",
            texto:"Tecnología y diseño para el entretenimiento."
          },
          3:{
            src:"img/a2.png",
            img:'["img/jaco1.png","img/jaco2.png","img/jaco3.png","img/jaco.png","img/a2.png"]',
            titulo: "Hostal Jaco",
            texto:"Un concepto nuevo para un mercado específico."
          },
          4:{
            src:"img/a1.png",
            img:'["img/jacoblu2.png","img/jacoblu3.png","img/jacoblu.png","img/a1.png"]',
            titulo: "Jacó Blú",
            texto:"Un club de playa diseñado para disfrutar al aire libre."
          },
          5:{
            src:"img/a5.png",
            img:'["img/viaoro1.png","img/viaoro2.png","img/viaoro3.png"]',
            titulo: "Via Oro",
            texto:"Somos una una empresa costarricense, con mas de 20 años de experiencia. Ofrecemos a nuestros clientes una amplia gama de servicios, adaptados a sus necesidades:"
          },
        },
        contactenos:{
          titulo: "Contáctenos",
          texto: "Ofrecemos servicios profesionales de estructuración y desarrollo de proyectos inmobiliarios, que satisfacen los requerimientos y necesidades de nuestros clientes antes, durante y después de finalizado el proyecto, cumpliendo con los estándares de calidad y plazos definidos.",
          telelfono:"(506) 2215 5000",
          direccion: " Edificio SCG, de la rotonda de Multiplaza de Escazú, 900 metros norte, Guachipelin, Costa Rica.",
          correo: "info@scgbusiness.com"
        }
      });
    }
});
