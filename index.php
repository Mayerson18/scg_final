<?php
//if "email" variable is filled out, send email

  if (isset($_REQUEST['correo']))  {

  //Email information
  //$admin_email = "info@scgbusiness.com";
  $admin_email = "info@scgbusiness.com";
  $nombre = $_REQUEST['nombre'];
  $telefono = $_REQUEST['telefono'];
  $correo = $_REQUEST['correo'];
  $mensaje = $_REQUEST['mensaje'];

  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers = 'From: '.$correo . "\r\n";

  $message = "Nombre: ". $nombre."\nTelefono: ".$telefono."\nCorreo: ".$correo."\nMensaje: ".$mensaje;



  //send email
  if(mail($admin_email, $nombre,$message, $headers)){

  }else{
    echo("<p>'.$message.'!</p>");
  }

  //Email response
  //echo "Thank you for contacting us!";
  }



?>
<!DOCTYPE html>
<html lang="es_CR">
  <head>
    <meta charset="utf-8">
    <title>SCG</title>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="css/banner.css">
    <link href="https://fonts.googleapis.com/css?family=Ek+Mukta:300,400" rel="stylesheet">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/contact.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.theme.default.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <style media="screen">
      .esconder{
        display: none!important;
      }
    </style>
  </head>
  <body data-spy="scroll" data-target="#myScrollspy">

      <!-- INICIO DE BARRA DE NAVEGACION -->

  	<!-- Fixed Nav -->
  	<nav class="navbar navbar-default navbar-fixed-top" id="myScrollspy">
  		<div class="container">
  			<div class="navbar-header">
  				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
  					<span class="sr-only">Toggle navigation</span>
  					<span class="icon-bar"></span>
  					<span class="icon-bar"></span>
  					<span class="icon-bar"></span>
  				</button>
  				<a class="navbar-brand" href="#"><img class="logo" src="img/logo.png" alt="SCG"></a>
  			</div>
  			<div id="navbar" class="navbar-collapse collapse">
  				<ul class="nav navbar-nav navbar-right">
  					<li><a href="#spyini">INICIO</a></li>
  					<li><a href="#spyservices">SERVICIOS</a></li>
            <li><a href="#spyquien">QUIENES SOMOS</a></li>
  					<li><a href="index2.html">ALQUILER DE OFICINAS</a></li>
            <li><a href="#spyproyects">PROYECTOS</a></li>
            <li><a href="#spycontact">CONTÁCTENOS</a></li>
            <li>
              <li class="dropdown">
                <a id="activo" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img class="lang" data-lang="español" src="img/spanish.png" alt="" ></a>
                <ul class="dropdown-menu">
                  <li><a href="#" id="inactivo"><img class="lang" src="img/english.png" data-lang="inglés"  alt=""></a></li>
                </ul>
              </li>
            </li>
  				</ul>
  			</div>
  		</div>
  	</nav>
  	<!-- //Close Fixed Nav -->
<!---FIN DE BARRA DE NAVEGACION   !-->

  <div id="spyini">


    <div class="banner img-responsive">

         <div class="banner-box">
         <h1 class="titulos">Construimos Tu Futuro</h1>

         <div class="banner-button">
              <a href="#spycontact" class="button"  >
                Contáctenos
              </a>
            </div>
        </div>

    </div>

  </div>

  <!---<div class="parallax"></div>!-->


  <div class="serv">

      <h2 class="title-services titulos center" id="spyservices">Nuestros Servicios</h2>
      <div class="container cartas">

      </div>

  </div>

    <div class="container" id="spyquien">


      <div class="row section-1">
        <div class="col-lg-6 col-md-6 col-xs-12 left">
          <h1 class="title-section-1" id="nosotros-titulo"></h1>
          <p class="body-section-1 " id="nosotros-p1"></p>
          <p class="body-section-1" id="nosotros-p2"></p>
        </div>
        <div class="col-lg-6 col-md-6 col-xs-12">
          <img src="img/scg-business.jpg" id="nosotros-img" class="img-responsive" alt="SCG">
        </div>
      </div>


    </div>

  <div id="section-2">


    <div class="banner2 img-responsive">
       <div class="body-section-2">
        <h2 class="nombre" id="parallax-titulo">Acompañamos a nuestros clientes en la toma de decisiones estratégicas</h2>
        <div class="piso"></div>
        <p class="texto-section-2">
          <p id="parallax-texto1">En</p>  <strong class="st1" id="parallax-negrita1">SCG Business Center</strong> <p id="parallax-texto2">nos hemos propuesto mantener relaciones altamente productivas con nuestros clientes, reforzando nuestros
          valores de </p><strong class="st2" id="parallax-negrita2">Excelencia, Confianza, Honestidad e Innovación.</strong>
        </p>
      </div>

    </div>

  </div>

<h2 class="title-services titulos center">Nuestro Equipo</h2>
<div class="container" id="equipo">

</div>

  <div class="row" id="spyproyects">
      <h2 class="title-services center titulos">Nuestros Proyectos</h2>
      <div id="owl-demo" class="owl-carousel">

      </div>
  </div>
</div>


<div class="form-contact">
  <form action="" method="post">
    <div class="form-group">
      <label for="name">Nombre y Apellido:</label>
      <input type="text" name="nombre" class="form-control" id="name">
    </div>
    <div class="form-group">
      <label for="telefono">Teléfono:</label>
      <input type="text" class="form-control" id="telefono" name="telefono">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" name="correo">
    </div>
    <div class="form-group">
      <label for="mensaje">Mensaje:</label>
      <textarea class="form-control" id="mensaje" name="mensaje"></textarea>
    </div>
    <button type="submit" name="button" class="enviar" style="display:none;"></button>
  </form>
  <div class="contactar">
    <div class="cont" >
      CONTACTAR
    </div>
  </div>
</div>

<div class="contact" id="spycontact">
  <div class="contact-top left">
    <div class="contact-top-text">
      <h2 class="contact-title" > Contáctenos</h2>
      <p class="contact-body1" id="p-contact">
        Ofrecemos servicios profesionales de estructuración y desarrollo de
        proyectos inmobiliarios, que satisfacen los requerimientos y necesidades
        de nuestros clientes antes, durante y después de finalizado el proyecto, cumpliendo con los estándares de calidad y plazos definidos.
      </p>
    </div>
  </div>
  <div class="contact-bottom left">
    <div class="inline">
      <img src="img/logo.png" class="contact-logo" alt="SCG">
      <div class="telefonos">
        <h2 class="telefono">(506) 2215 5000</h2>
        <p class="sub-telefono">Teléfono</p>
      </div>
    </div>
    <p class="address"><strong>Dirección: </strong> Edificio SCG, de la rotonda de Multiplaza de Escazú, 900 metros norte, Guachipelin, Costa Rica.
</p>
       <div class="email">
         <div class="email-in">
           info@scgbusiness.com
         </div>
       </div>
  </div>

</div>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Proyectos Inmobiliarios</h4>
      </div>
      <div class="modal-body">
        <img src="img/lcard1.jpg" id="imgserv" alt="" width="100%" class="img-responsive">
        <br>

        <div class="textservicio">


        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>



  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
  <script src="js/data.js"></script>
    <script src="js/jquery.scrollme.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
		<script type="text/javascript" src="data-modal.js"></script>
    <?php
    if (isset($_GET['lang'])) {
            $lang = $_GET['lang'];
            if($lang == "en"){
              ?>
              <div id="google_translate_element" class="esconder"></div>
              <script id="eliminar" type="text/javascript">
                function googleTranslateElementInit() {
                  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element')
                }
              </script>
              <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        <?php}
    }
     ?>

    <script type="text/javascript" src="js/bandera.js"></script>
  </body>
</html>
