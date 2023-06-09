let map, view;
let tempUri = "https://www.osinergmin.gob.pe/Tarifas/Electricidad/PliegoTarifario?Id=";
let uri = "";
let responseReporte = null;
let where = null;
var monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
  "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"
];
function redirectRegion(region, title) {
  $('#divContent').hide();
  $('#iframeMap').show();
}

function returnMap() {
  $('#divContent').show();
  $('#iframeMap').hide();
}
function btnOpenContentDataMap(codigo, nombre, ubigeo) {
  //$('#title-content-data-map').html(nombre);
  $(".content-data-map").addClass("open");
  filterData(responseReporte, nombre);
}

function filterData(data, filtro) {
  $("#tbdReporte").html("");
  var filter = data.filter(t => t.pais == filtro);

  if (filter.length > 0) {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let date = new Date(filter[0].mes);
    var mes_name = date.getMonth();
    $('#fecha-content-data-map').html(meses[mes_name] + " de " + date.getFullYear());
    //$('#ciudad-content-data-map').html(filter[0].codigo);
    filter.forEach(t => {
      $("#tbdReporte").append("<tr>" +
        "<td>" + t.codigo + "</td>" +
        "<td>" + t.pais + "</td>" +
        "<td>" + monthNames[new Date(t.mes).getMonth()] + " - " + new Date(t.mes).getFullYear() + "</td>" +
        "<td>" + t.unidad30.toFixed(2) + "</td>" +
        "<td>" + t.unidad65.toFixed(2) + "</td>" +
        "<td>" + t.unidad125.toFixed(2) + "</td>" +
        "<td>" + t.unidad300.toFixed(2) + "</td>" +
        "<td>" + t.unidad1000.toFixed(2) + "</td>" +
        "<td>" + t.unidad50000.toFixed(2) + "</td>" +
        "<td>" + t.unidad500000.toFixed(2) + "</td>" +
        "</tr>");
    });
  } else {
    $("#tbdReporte").append("<tr>" +
      "<td colspan='10'>Sin información...</td>" +
      "</tr>");
  }
}

require([
  "esri/core/urlUtils",
  "esri/Map",
  "esri/config",
  "esri/views/MapView",
  "esri/WebMap",
  "esri/layers/FeatureLayer",
  "esri/tasks/QueryTask",
  "esri/tasks/support/Query",
  "esri/widgets/Expand",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Editor",
  "esri/widgets/Search",
  "esri/widgets/Home",
  "esri/widgets/LayerList",
  "esri/layers/MapImageLayer"
], (
  urlUtils,
  Map,
  esriConfig,
  MapView,
  WebMap,
  FeatureLayer,
  QueryTask,
  Query,
  Expand,
  BasemapGallery,
  Editor,
  Search,
  Home,
  LayerList,
  MapImageLayer
) => {

  //_proxyurl = "https://gisem.osinergmin.gob.pe/proxy_developer/proxy.ashx";
  _proxyurl = "";
  $(document).ready(function () {

    let urlparams = window.location.search;
    _globalidor = urlparams.substring(1);
    code = _globalidor.split('=')[1];
    console.log(code);
    if (code) {
      code = code.substring(0, 2);
      where = "CODDEPARTAMENTO='" + code.substring(0, 2) + "'";
    }
    if (code != "00") {
      $("#divCompleto").hide();
      $('#divContent').hide();
      $('#iframeMap').show();
      /* $('.btn-map-return').hide(); */
      $('#iframe-electricidad').attr('src', tempUri + code + '0000');
    }

    map = new Map({
      basemap: "osm"
    });

    view = new MapView({
      container: "map",
      map: map,
      center: [-74.049, -8.185],
      zoom: 6
    });

    function changeSrcIframe(uriIframe) {
      $('#iframe-electricidad').attr("src", uriIframe);
    }

    $("#firstMap[usemap]:last").mapify({
      popOver: {
        content: function (zone) {
          changeSrcIframe(tempUri + zone.attr("ubigeo"));
          return "<strong>" + zone.attr("data-title") + "</strong>";
        },
        delay: 0.3,
        margin: "15px",
        height: "130px",
        width: "260px"
      },
      onAreaHighlight: function () {
        console.log("onAreaHighlight callback");
      },
      onMapClear: function () {
        console.log("onMapClear callback");
      }
    });

    $("#secondMap[usemap]:last").mapify({
      popOver: {
        content: function (zone) {
          changeSrcIframe(tempUri + zone.attr("ubigeo"));
          return "<strong>" + zone.attr("data-title") + "</strong>";
        },
        delay: 0.3,
        margin: "15px",
        height: "130px",
        width: "260px"
      },
      onAreaHighlight: function () {
        console.log("onAreaHighlight callback");
      },
      onMapClear: function () {
        console.log("onMapClear callback");
      }
    });

    $("#divMapaInicial").click(function () {
      //$('#divBotonMapaInicial').hide();
      $('#divMapaInicial').hide();
    });

    $("#dynamicClassChange").click(function () {
      $(this).attr("data-hover-class", "hover-green");
    });

    let basemapGallery = new BasemapGallery({
      view: view
    });

    //PROXY//
    //Descomentar para producción//
    //urlUtils.addProxyRule({
    //    urlPrefix: "https://services5.arcgis.com/oAvs2fapEemUpOTy",
    //    proxyUrl: _proxyurl
    //});

    const MeExpand = new Expand({
      view: view,
      content: basemapGallery,
      expanded: false,
      expandTooltip: 'Mapas Base'
    });

    var homeWidget = new Home({
      view: view
    });

    let layerList = new LayerList({
      view: view
    });

    const MeExpandLayer = new Expand({
      view: view,
      content: layerList,
      expanded: false,
      expandTooltip: 'Capas'
    });

    const searchWidget = new Search({
      view: view
    });

    view.ui.add(searchWidget, { position: "top-right", index: 2 });
    view.ui.add(homeWidget, "top-right");
    view.ui.add(MeExpand, 'top-right');
    view.ui.add(MeExpandLayer, { position: "top-right" });

    const featureLayer = new FeatureLayer({
      url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Cartografia/LIMITE_DEPARTAMENTAL/MapServer/0",
      outFields: ["*"],
      definitionExpression: where
    });

    const layer2 = new MapImageLayer({
      url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Electricidad/MapaSEIN_Operacion/MapServer"
    });

    const layer3 = new MapImageLayer({
      url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Electricidad/MapaSEIN_Proyectadas/MapServer"
    });


    map.add(layer2);
    map.add(layer3);
    map.add(featureLayer);
    $("#map").css("height", "100%");

    featureLayer.queryFeatures().then(results => {
      if (results.features.length > 0)
        zoomToLayer2(results);
    });


    function zoomToLayer2(results, _zoom) {
      var sourceGraphics = results.features.map(e => { return e.geometry });
      view.goTo(sourceGraphics);
    }

    fetch("https://gisem.osinergmin.gob.pe/validar/observatorioAPI/api/api")
      .then((response) => response.json())
      .then((response) => {
        responseReporte = response.data;
      });
  });
});