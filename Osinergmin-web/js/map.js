let map, view;
let isOffice = true;
let codeUbigeo = "";

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
	  "esri/widgets/Home"
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
		    Home
        ) => {
        
        //_proxyurl = "https://gisem.osinergmin.gob.pe/proxy_developer/proxy.ashx";
        _proxyurl = "";
        $(document).ready(function(){          
          var user = localStorage.getItem("user");
          var region = localStorage.getItem("region");
          var rol = localStorage.getItem("rol");
          if (user == null || user == ""){
            localStorage.setItem('user', '');
            localStorage.setItem('region', '');
            localStorage.setItem('rol', '');
            window.location.href = "login.html";
            return
          }

          var url_department = "https://services5.arcgis.com/oAvs2fapEemUpOTy/ArcGIS/rest/services/ResultadosXY2LVGLP/FeatureServer/0";
          var url_province = "https://services5.arcgis.com/oAvs2fapEemUpOTy/ArcGIS/rest/services/ResultadosXY2LVGLP/FeatureServer/4";
          var url_distrito = "https://services5.arcgis.com/oAvs2fapEemUpOTy/ArcGIS/rest/services/ResultadosXY2LVGLP/FeatureServer/1";
          
          var url_informales = "https://services5.arcgis.com/oAvs2fapEemUpOTy/ArcGIS/rest/services/survey123_76549cfdea5d4828978ba44f3adfa2d8_stakeholder/FeatureServer/0";
          var urlOficinasRegionales = "https://gisem.osinergmin.gob.pe/serverosih/rest/services/Transversal/Oficinas_Regionales/MapServer/0";

          
          let editor, features;
          map = new Map({
              basemap: "osm"
          });

          view = new MapView({
              container: "map",
              map: map,
              center: [-74.049, -8.185],
              zoom: 5
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
          view.ui.add(MeExpand, 'top-left');            
			
          var homeWidget = new Home({
            view: view
          });

          view.ui.add(homeWidget, "top-left");
          
          const searchWidget = new Search({
            view: view
          });
          // Adds the search widget below other elements in
          // the top left corner of the view
          view.ui.add(searchWidget, {
            position: "top-right",
            index: 2
          });
		
            
          

          const featureLayer = new FeatureLayer({
              url: url_informales,
              outFields: ["*"]
          });

          map.add(featureLayer);
          featureLayer.queryFeatures().then(data => {
            //writeElementTotal(data.features);
            //writeDataChart(data.features);
            //writeDataChartMonth(data.features);
          });

          $("#map").css("height", "800px");

          
	
		

        });
    });