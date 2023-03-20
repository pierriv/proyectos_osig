let map, view;
let isOffice = true;
let codeUbigeo = "";
let where = "1=1";
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
        $(document).ready(function(){

          let urlparams= window.location.search;
          _globalidor = urlparams.substring(1);
          code = _globalidor.split('=')[1];
          if (code){
            console.log(code);
            where = "CODDEPARTAMENTO='"+code+"'";
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
          view.ui.add(MeExpandLayer, { position: "top-right"});

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


          map.add(featureLayer);
          map.add(layer2);
          map.add(layer3);
          $("#map").css("height", "100%");

          featureLayer.queryFeatures().then(results => {
            if (results.features.length > 0)
              zoomToLayer2(results);
          });


          function zoomToLayer2(results, _zoom){
            var sourceGraphics = results.features.map(e => { return e.geometry });
            view.goTo(sourceGraphics);
          }

        });
    });