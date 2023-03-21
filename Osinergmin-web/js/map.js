let map, view;
let isOffice = true;
let codeUbigeo = "";
let where = "1=1";
let tempUri = "https://www.osinergmin.gob.pe/Tarifas/Electricidad/PliegoTarifario?Id=";
let uri = "";

function redirectRegion(region, title) {
  if (view) {
    view.goTo({
      center: region,
      zoom: 7
    });
  }

  /* console.log(view);
  console.log(region); */
  codeUbigeo = region;

  $('#divContent').hide();
  $('#map').show();
}

function returnMap() {
  $('#divContent').show();
  $('#map').hide();
}

function changeSrcIframe(uriIframe) {
  $('#iframe-electricidad').attr("src", uriIframe);
}

$("img[usemap]:last").mapify({
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

$("#dynamicClassChange").click(function () {
  $(this).attr("data-hover-class", "hover-green");
});