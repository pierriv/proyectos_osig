var filtros = [];
$(document).ready(function () {
  var params = new URLSearchParams(location.search);
  var contract = params.get('txtSearch');
  $('#txtCriterio').val(contract);
  if ($('#txtCriterio').val() != "") {
    var contenidoTemporal = contenidos.filter(t => t.titulo.toLowerCase().includes(contract.toLowerCase()));
    filtrarDatos(contenidoTemporal);
  }  

  $("#aLimpiarBusqueda").click(function () {
    filtrarDatos(contenidos);
    $('#txtCriterio').val('');
  });

  $("#subMenuFiltro").on('change', '>li>input', function (e) {
    var $check = $(e.currentTarget);
    var valor = e.currentTarget.id;
    if ($check[0].checked)
      filtros.push(valor);
    else 
      filtros.splice(filtros.indexOf(valor), 1);

    var tipoContenido = [];
    if ($('#txtCriterio').val() == ""){            
      tipoContenido = contenidos;
    }
    else {
      tipoContenido = contenidoTemporal;
    }
    if (filtros.length > 0) {
      var contenidoFiltrado = tipoContenido.filter(t => filtros.includes(t.categoria));
      filtrarDatos2(contenidoFiltrado);
    }
    else {
      filtrarDatos2(tipoContenido);
    }
  });

  $(document).keyup(function(event) {
      if (event.which === 13) {
          if ($('#txtCriterio').val()!= ""){            
            console.log(contenidos);
            contenidoTemporal = contenidos.filter(t => t.titulo.toLowerCase().includes($('#txtCriterio').val().toLowerCase()));
            console.log(contenidoTemporal);
            filtrarDatos(contenidoTemporal);
          }
          else {
            filtrarDatos(contenidos);    
          }
      }
  });

  function filtrarDatos(datas){
    var categorias = [];
    var $divBuscador = $('#divBuscador');
    var $subMenuFiltro = $('#subMenuFiltro');
    var html = "";
    datas.forEach( t => {
      if (!categorias.includes(t.categoria))
        categorias.push(t.categoria);
      html += "<div class='section shadow border-rounded-sm bg-white grid-container xlg-12 lg-12 md-6 sm-12'>" +
                "<div class='content-bgimg xlg-5 lg-4 md-12 sm-12 rows-5' style='background-image: url("+t.url+");'>"+
                "</div>"+
                "<div class='xlg-7 lg-8 md-12 sm-12'>"+
                    "<h2 class='title-subsection'><a href='"+t.href+"'>"+t.titulo+"</a></h2>"+
                "</div>"+
                //"<div class='xlg-7 lg-8 md-12 sm-12'><span>Descripción:</span>"+t.descripcion+"</div>"+
                "<div class='xlg-7 lg-8 md-12 sm-12'><span>Fuente:</span>"+t.fuente+"</div>"+
                "<div class='xlg-7 lg-8 md-12 sm-12'><span>Frecuencia:</span>"+t.frecuencia+"</div>"+
              "</div>";
    });
    $divBuscador.html(html);
    //console.log(categorias);
    html = "";
    categorias.forEach(t => {
      html += "<li>"+
        "<input type='checkbox' name='txtFiltros"+t+"' id='"+t+"'>"+
        "<label for='"+t+"'> "+t+"</label>"+
      "</li>";
    })
    $subMenuFiltro.html(html);
  }
  function filtrarDatos2(datas){
    var $divBuscador = $('#divBuscador');
    var html = "";
    datas.forEach( t => {
      html += "<div class='section shadow border-rounded-sm bg-white grid-container xlg-12 lg-12 md-6 sm-12'>" +
                "<div class='content-bgimg xlg-5 lg-4 md-12 sm-12 rows-5' style='background-image: url("+t.url+");'>"+
                "</div>"+
                "<div class='xlg-7 lg-8 md-12 sm-12'>"+
                    "<h2 class='title-subsection'><a href='"+t.href+"'>"+t.titulo+"</a></h2>"+
                "</div>"+
                //"<div class='xlg-7 lg-8 md-12 sm-12'><span>Descripción:</span>"+t.descripcion+"</div>"+
                "<div class='xlg-7 lg-8 md-12 sm-12'><span>Fuente:</span>"+t.fuente+"</div>"+
                "<div class='xlg-7 lg-8 md-12 sm-12'><span>Frecuencia:</span>"+t.frecuencia+"</div>"+
              "</div>";
    });
    $divBuscador.html(html);
  }
});