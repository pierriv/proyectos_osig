let map, view;
let isOffice = true;
let codeUbigeo = "00";
let where = "1=1";
let featureLayer = null;
function redirectRegion(region, title, ubigeo) {
  console.log(featureLayer);
  console.log(ubigeo);
  ubigeo = ubigeo.substring(0, 2);
  if (view && featureLayer && ubigeo){
    featureLayer.queryFeatures().then(results => {
      results.features.forEach(element => {
        console.log(element.attributes["CODDEPARTAMENTO"]);
        console.log(element.attributes["NOMDEPARTAMENTO"]);
        if (element.attributes["CODDEPARTAMENTO"] == ubigeo) {
          //var sourceGraphics = results.features.map(e => { return e.geometry });
          var sourceGraphics = element.geometry;
          view.goTo(sourceGraphics);
        }
      });
    });
  }

  //Se guarda el ubigeo en la variable codeUbigeo
  codeUbigeo = ubigeo;

  $('.title-site-map').html(title);
  $('#divContent').hide();
  $('#map').show();
}

function redirectApplication(url){
  //Se recoge el codeUbigeo y se concatena a la url como parametro GET
  location.href = url + "?ubigeo=" + codeUbigeo;
}

function returnMap() {
  $('#divContent').show();
  $('#map').hide();
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

    $("img[usemap]:last").mapify({
      popOver: {
        content: function (zone) {
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

    $("#dynamicClassChange").click(function () {
      $(this).attr("data-hover-class", "hover-green");
    });

    //function redirectRegion(region) {
    //  console.log(region);
    //  $('#divContent').hide();
    //  $('#map').show();
    //}

    var url_informales = "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Electricidad/ELECTRICIDAD/MapServer";

    map = new Map({
      basemap: "osm"
    });

    view = new MapView({
      container: "map",
      map: map,
      center: [-74.049, -8.185],
      zoom: 6
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

    //Widget Mapas Base
    const MeExpand = new Expand({
      view: view,
      content: basemapGallery,
      expanded: false,
      expandTooltip: 'Mapas Base'
    });

    //Widget Home
    var homeWidget = new Home({
      view: view
    });

    //Widget layerList
    let layerList = new LayerList({
      view: view
    });    
    const MeExpandLayer = new Expand({
      view: view,
      content: layerList,
      expanded: false,
      expandTooltip: 'Capas'
    });

    //Widget searchWidget
    const searchWidget = new Search({
      view: view
    });
    const MeExpandSearchWidget = new Expand({
      view: view,
      content: searchWidget,
      expanded: false,
      expandTooltip: 'Capas'
    });

    
    view.ui.add(MeExpandSearchWidget, { position: "top-right", index: 2 })
    //view.ui.add(searchWidget, { position: "top-right", index: 2 });
    view.ui.add(homeWidget, "top-right");
    view.ui.add(MeExpand, 'top-right');
    view.ui.add(MeExpandLayer, { position: "top-right" });

    featureLayer = new FeatureLayer({
        url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Cartografia/LIMITE_DEPARTAMENTAL/MapServer/0",
        outFields: ["*"],
        //definitionExpression: where
    });

    //const layer = new MapImageLayer({
    //  url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Cartografia/LIMITE_DEPARTAMENTAL/MapServer"
    //});

    const layer2 = new MapImageLayer({
      url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Electricidad/MapaSEIN_Operacion/MapServer"
    });

    const layer3 = new MapImageLayer({
      url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Electricidad/MapaSEIN_Proyectadas/MapServer"
    });

    //const layer4 = new MapImageLayer({
    //  url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Mineria/MINERIA_MEM/MapServer"
    //});


    map.add(featureLayer);
    //map.add(layer);
    map.add(layer2);
    map.add(layer3);
    //map.add(layer4);
    $("#map").css("height", "100%");

  });
});

