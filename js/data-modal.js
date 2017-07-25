

var valor = {
    a: {
      titulo : "DESARROLLO DE PROYECTOS INMOBILIARIOS",
      texto : "<p>Ofrecemos servicios profesionales de estructuración y desarrollo de proyectos inmobiliarios, que satisfacen los requerimientos y necesidades de nuestros clientes antes, durante y después de finalizado el proyecto, cumpliendo con los estándares de calidad y plazos definidos. </p><p><strong> Preconstrucción: </strong> Selección del constructor, estrategia de contratación, análisis de riesgos, estimación de costos, revisión de concursos, revisión de criterios de sustentabilidad.</p><p><strong>Construcción: </strong> Reporte de avance, reporte de desviaciones, análisis de posibles daños seguimiento de pagos, acciones preventivas y correctivas, aplicación correcta de recursos posconstrucción, auditoría de obra, revisión de fraudes y/o reclamos, recomendaciones retenciones y garantías, certificación de cierre presupuestal para contratistas, reporte de estado de entrega (Property assessment), auditoría de obra, revisión de fraudes y/o reclamos, recomendaciones retenciones y garantías, certificación de cierre presupuestal para contratistas, reporte de estado de entrega.</p>",
      img : "img/lcard1.jpg"
    },
    b:{
      titulo : "Viabilidad de Proyectos",
       texto : "<p>Apoyamos a nuestros clientes durante el proceso de adquisición, estructuración de transacciones, negociación de contratos, seguimiento a inversiones realizadas; aportando la información requerida por compradores y financiadores. </p><ul><li>Administración de riesgos para adquisición de negocios o proyectos. </li><li>Due diligence de bienes inmuebles, construcción, inteligencia geo-demográfica. </li><li>International Financial Reporting Standards (IFRS) de construcción y bienes raíces. </li><li>Reporte de avances de proyectos. </li><li>Asistencia en el seguimiento y monitoreo del proyecto.</li><li>Auditoría de construcción.</li></ul>",
      img : "img/lcard2.jpg"
    },
    c:{
      titulo : "COMERCIALIZACIÓN",
      texto : "<p>Proporcionamos a nuestros clientes:</p><ul><li>Administración de riesgos para adquisición de negocios o proyectos. </li><li>Estudios de mercado.</li><li>Gestión de la relación comercial con clientes. </li><li>Detección de  necesidades de mercado. </li><li>Elaboración de planes de ventas.</li><li>Promoción de los servicios técnicos y logísticos.</li><li>Ventas.</li></ul>",
      img : "img/lcard3.jpg"
    },
    d:{
      titulo : "ANÁLISIS DE NEGOCIO",
      texto : "<p>Acompañamos a nuestros clientes en la  toma de decisiones estratégicas, claves para el crecimiento de su negocio: </p><ul><li>Validación de requerimientos para reingeniería de procesos. </li><li>Análisis y recomendación de soluciones de mejora continuas. </li><li>Validación y documentación de problemas y oportunidades de negocio.</li><li>Análisis de requerimientos organizacionales y/u operacionales.</li><li>Estrategias de crecimiento.</li></ul>",
      img : "img/lcard4.jpg"
    },
    e:{
      titulo : "ASESORÍAS FINANCIERAS ",
      texto : "<p>Apoyamos a nuestros clientes en cada fase del ciclo económico de su negocio, generando estrategias financieras con objetivos realizables. </p><ul><li>Estructuración y reestructuración financiera de empresas. </li><li>Asesoría financiera integral en todas las fases del proceso de obtención de financiamiento. </li><li>Análisis financiero de un proyecto o empresa.</li><li>Contacto con fuentes de financiamiento.</li><li>Identificación y selección de alternativas de financiamiento.</li><li>Estudios de análisis de mercado.</li><li>Estudios de competencia.</li><li>Estudios de absorción.</li><li>Análisis de viabilidad económica.</li><li>Auditorías financieras, contables, impuestos nacionales e internacionales.</li><li>Negociaciones y cierres.</li><li>Apoyo en procesos de liquidación de empresas</li></ul>",
      img : "img/lcard5.jpg"
    },
    f:{
       titulo : "PERMISOLOGIA",
      texto : "<p>Gestionamos permisos y documentaciones requeridas por las autoridades pertinentes, para el desarrollo de proyectos inmobiliarios:</p><ul><li>CFIA</li><li>INVU</li><li>Salud</li><li>AyA </li><li>Municipalidad</li><li>Bomberos </li><li>Senara</li><li>Setena</li><li>Minaet</li><li>Otros</li></ul>",
      img : "img/lcard6.jpg"
    }
    ,
    g:{
      titulo : "ASESORÍA LEGAL",
      texto : "<p>Contamos con un staff de abogados que ofrece a nuestros clientes asesoramiento especializado y personalizado:</p><ul><li>Situación jurídica del negocio o inmueble.</li><li>Asesoramiento y consultoría legal.</li><li>Representación legal y comercial.</li><li>Preparación y confección de información, contratos y documentos legales </li><li>Soluciones negociadas (conciliación, mediación, transacción) </li><li>Defensa legal / litigación.</li></ul>",
      img : "img/lcard7.jpg"
    },
    h:{
      titulo : "BUSINESS BROKER",
      texto : "<p>Contamos con un staff de abogados que ofrece a nuestros clientes asesoramiento especializado y personalizado:</p><ul><li>Situación jurídica del negocio o inmueble.</li><li>Asesoramiento y consultoría legal.</li><li>Representación legal y comercial.</li><li>Preparación y confección de información, contratos y documentos legales </li><li>Soluciones negociadas (conciliación, mediación, transacción) </li><li>Defensa legal / litigación.</li></ul>",
      img : "img/lcard8.jpg"
    },
    i:{
      titulo : "BUSINESS BROKER",
      texto : "<p>Contamos con un staff de abogados que ofrece a nuestros clientes asesoramiento especializado y personalizado:</p><ul><li>Situación jurídica del negocio o inmueble.</li><li>Asesoramiento y consultoría legal.</li><li>Representación legal y comercial.</li><li>Preparación y confección de información, contratos y documentos legales </li><li>Soluciones negociadas (conciliación, mediación, transacción) </li><li>Defensa legal / litigación.</li></ul>",
      img : "img/lcard8.jpg"
    }

};





    $(document).on("click",".leer",function(evt){

        valorprueba = $(this).data( "valserv" );

        mostrar =  (valor[valorprueba]);
        Modaltitulo = mostrar.titulo;
        Modaltexto = mostrar.texto;



        $("#myModal").modal();
        $( ".modal-title").text(Modaltitulo);

        $( ".textservicio" ).html( Modaltexto );


        $( "#imgserv").attr("src", mostrar.img);


    });