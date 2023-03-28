let map, view;
let codeUbigeo = "00";
let featureLayer = null;
function redirectRegion(region, title, ubigeo) {
  //console.log(featureLayer);
  //console.log(ubigeo);
  var subUbigeo = region;
  if (view && featureLayer && ubigeo){
    featureLayer.queryFeatures().then(results => {
      results.features.forEach(element => {
        //console.log(element.attributes["CODDEPARTAMENTO"]);
        //console.log(element.attributes["NOMDEPARTAMENTO"]);
        if (element.attributes["CODDEPARTAMENTO"] == subUbigeo) {
          var sourceGraphics = element.geometry;
          view.goTo(sourceGraphics);
        }
      });
    });
  }
  codeUbigeo = region;
  $('.title-site-map').html(title);
  $('#divContent').hide();
  $('#mapDiv').show();
}

function redirectApplication(url){
  //Se recoge el codeUbigeo y se concatena a la url como parametro GET
  location.href = url + "?ubigeo=" + codeUbigeo;
}

function returnMap() {
  $('#divContent').show();
  $('#mapDiv').hide();
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
    //let layerList = new LayerList({
    //  view: view
    //});    
    //const MeExpandLayer = new Expand({
    //  view: view,
    //  content: layerList,
    //  expanded: false,
    //  expandTooltip: 'Capas'
    //});

    //Widget searchWidget
    const searchWidget = new Search({
      view: view
    });
    const MeExpandSearchWidget = new Expand({
      view: view,
      content: searchWidget,
      expanded: false,
      expandTooltip: 'Buscar'
    });

    view.ui.add(MeExpandSearchWidget, { position: "top-right", index: 2 })
    view.ui.add(homeWidget, "top-right");
    view.ui.add(MeExpand, 'top-right');
    //view.ui.add(MeExpandLayer, { position: "top-right" });

    featureLayer = new FeatureLayer({
        url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Cartografia/LIMITE_DEPARTAMENTAL/MapServer/0",
        outFields: ["*"]
    });
    

    const layer = new MapImageLayer({
      url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Electricidad/ELECTRICIDAD/MapServer"
    });

    const layer2 = new MapImageLayer({
      url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Gas_Natural/GAS_NATURAL/MapServer",
      visible:false
    });

    const layer3 = new MapImageLayer({
      url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Hidrocarburos_Liquidos/HIDROCARBUROS_LIQUIDOS/MapServer",
      visible:false
    });

    const layer4 = new MapImageLayer({
      url: "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Mineria/MINERIA_MEM/MapServer",
      visible:false
    });


    map.add(layer);
    map.add(layer2);
    map.add(layer3);
    map.add(layer4);
    map.add(featureLayer);

    $("#map").css("height", "100%");
    //console.log($(":checkbox"));
    $(":checkbox").on('change', function(event) {
        //console.log(event.currentTarget);
        var checkbox = event.target;
        //console.log(event.currentTarget.dataset);
        var layerTemp = null;
        if (event.currentTarget.dataset.layerId=="1")
        {
          layerTemp = featureLayer;
        }
        else if (event.currentTarget.dataset.layerId=="2")
        {
          layerTemp = layer;
        }
        else if (event.currentTarget.dataset.layerId=="3")
        {
          layerTemp = layer2;
        }
        else if (event.currentTarget.dataset.layerId=="4")
        {
          layerTemp = layer3;
        }
        else if (event.currentTarget.dataset.layerId=="5")
        {
          layerTemp = layer4;
        }
        layerTemp.visible = checkbox.checked;
        //if (checkbox.checked) {
        //    //Checkbox has been checked
        //} else {
        //    //Checkbox has been unchecked
        //}
    });

  });
});

