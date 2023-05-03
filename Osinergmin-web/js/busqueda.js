$(document).ready(function () {
  let params = new URLSearchParams(location.search);
  var contract = params.get('txtSearch');
  $('#txtCriterio').val(contract);
  console.log(contenidos);
  var contenidos2 = contenidos.filter(t => t.titulo.toLowerCase().includes(contract.toLowerCase()));
  console.log(contenidos2);
  filtrarDatos(contenidos2);


  $("#aLimpiarBusqueda").click(function () {
    filtrarDatos(contenidos);
    $('#txtCriterio').val('');
  });

  $(document).keyup(function(event) {
      if (event.which === 13) {
          if ($('#txtCriterio').val()!= ""){            
            console.log(contenidos);
            var contenidos3 = contenidos.filter(t => t.titulo.toLowerCase().includes($('#txtCriterio').val().toLowerCase()));
            console.log(contenidos3);
            filtrarDatos(contenidos3);
          }
          else {
            filtrarDatos(contenidos);    
          }
      }
  });

  function filtrarDatos(contenidos2){
    var $divBuscador = $('#divBuscador');
    var html = "";
    contenidos2.forEach( t => {
      html += "<div class='section shadow border-rounded-sm bg-white grid-container xlg-12 lg-12 md-6 sm-12'>" +
                "<div class='content-bgimg xlg-5 lg-4 md-12 sm-12 rows-5' style='background-image: url("+t.url+");'>"+
                "</div>"+
                "<div class='xlg-7 lg-8 md-12 sm-12'>"+
                    "<h2 class='title-subsection'><a href='"+t.href+"'>"+t.titulo+"</a></h2>"+
                "</div>"+
                "<div class='xlg-7 lg-8 md-12 sm-12'><span>Descripción:</span>"+t.descripcion+"</div>"+
                "<div class='xlg-7 lg-8 md-12 sm-12'><span>Fuente:</span>"+t.fuente+"</div>"+
                "<div class='xlg-7 lg-8 md-12 sm-12'><span>Frecuencia:</span>"+t.frecuencia+"</div>"+
              "</div>";
    });
    $divBuscador.html(html);
  } 
});