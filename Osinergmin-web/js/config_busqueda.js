var contenidos = [
  // {
  //   titulo:"Eventos Relevantes que causaron un Shock a nivel global",
  //   url:"../images/buscador/image-2.jpg",
  //   fuente:"Fuentes oficiales que describan mejor los eventos, por ejemplo: Organización Mundial de la Salud. <br> COVID 19 <br> https://www.paho.org/es/variantes-sars-cov-2-covid-19-preguntas-frecuentes <br>Guerra Ucrania Rusia", 
  //   descripcion:"Eventos relevantes que impactaron en la demanda y oferta de bienes energético o no energéticos, por ejemplo, pandemias, guerras, accidentes de grandes magnitudes.",
  //   frecuencia:"Cada vez que se den estos eventos.",
  //   href: "coyuntura-global.html?#divEventosRelevantes",
  //   categoria:'Electricidad'
  // },
  {
    titulo:"Mapa de calor del mundo",
    url:"../images/buscador/mapa_metereologico.JPG",
    fuente:"https://www.meteoblue.com/es/tiempo/mapas/providencia_chile_3875139#coords=1.17/28.8/-22.7&map=temperature~daily-max~auto~2%20m%20above%20gnd~none", 
    descripcion:"Mapa de calor donde se visualizarán las temperaturas del mundo y otras variables de interés del usuario.",
    frecuencia:"Semanal",
    href: "coyuntura-global.html?#divEventosMetereologicos",
    categoria:'Otros'
  },
  // {
  //   titulo:"Noticias de fenómenos naturales",
  //   url:"../images/buscador/image-2.jpg",
  //   fuente:"https://www.meteoblue.com/es/tiempo/semana/providencia_chile_3875139", 
  //   descripcion:"Resumen de noticia relacionada a fenómenos naturales como terremotos, deslizamientos, huracanes, heladas, etc. en el mundo.",
  //   frecuencia:"Semanal",
  //   href: "coyuntura-global.html?#divNoticias",
  //   categoria:'Electricidad'
  // },
  {
    titulo:"Tasa de crecimiento del PBI del mundo y por regiones",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/b69b781c-9a58-4cf4-bf38-3ec4e9f53eec.png",
    fuente:"https://www.imf.org/external/datamapper/NGDP_RPCH@WEO/OEMDC/ADVEC/WEOWORLD?year=1990", 
    descripcion:"El producto interno bruto es la medida individual más utilizada de la actividad económica general de un país. Representa el valor total a precios constantes de los bienes y servicios finales producidos dentro de un país durante un período de tiempo específico, como un año. Variación porcentual anual.",
    frecuencia:"Anual",
    href: "coyuntura-global.html?#divCrecimiento",
    categoria:'Otros'
  },
  {
    titulo:"Inflación del Perú",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/9e37c707-7f31-4b72-a6d0-84b08ca55cbc.png",
    fuente:"https://osinergmin.sharepoint.com/sites/Informacion-Institucional/SitePages/tableros-presidencia.aspx?CID=f92e9531-5758-e672-9e3d-62b08e068af5&OR=Teams-HL&CT=1678906707797&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzAyMDUwMTQyMSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D", 
    descripcion:"Inflación mensual por tipo de bienes. Esta información ya se presenta en el Tablero de Control de Alta Dirección..",
    frecuencia:"Mensual",
    href: "coyuntura-global.html?#divInflacion",
    categoria:'Otros'
  },
  // {
  //   titulo:"Noticias",
  //   url:"../images/buscador/image-2.jpg",
  //   fuente:"https://osinergmin.sharepoint.com/sites/Informacion-Institucional/SitePages/tableros-presidencia.aspx?CID=f92e9531-5758-e672-9e3d-62b08e068af5&OR=Teams-HL&CT=1678906707797&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzAyMDUwMTQyMSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D <br>https://app.bnamericas.com/article/section/all", 
  //   descripcion:"Noticias relevantes del sector minero energético. Se pueden considerar las del Tablero de AD y agregar las disponibles de BNAmericas.",
  //   frecuencia:"Diario",
  //   href: "coyuntura-global.html?#divNoti",
  //   categoria:'Electricidad'
  // },
  {
    titulo:"Consumo y generación de electricidad",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/60ca113c-d8ff-4c79-a06b-cc4b5667d283.png",
    fuente:"https://datos.enerdata.net/electricidad/estadisticas-mundiales-produccion-electricidad.html", 
    descripcion:"Consumo y generación por continente de electricidad.",
    frecuencia:"Anual",
    href: "coyuntura-global.html?#divConsumo",
    categoria:'Electricidad'
  },
  {
    titulo:"Acceso a la electricidad",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/6ac9ce77-18d9-4b51-89a0-8d72c48511b1.png",
    fuente:"https://trackingsdg7.esmap.org/downloads#tab-1-3", 
    descripcion:" La metodología está disponible en https://trackingsdg7.esmap.org/methodology",
    frecuencia:"Anual",
    href: "coyuntura-global.html?#divAcceso",
    categoria:'Electricidad'
  },
  {
    titulo:"Participación de RER en electricidad",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/109c988a-73d3-4e2c-b9e3-16fc9c305d94.png",
    fuente:"https://trackingsdg7.esmap.org/downloads#tab-1-3", 
    descripcion:" La metodología está disponible en https://trackingsdg7.esmap.org/methodology",
    frecuencia:"Anual",
    href: "coyuntura-global.html?#divParticipacion",
    categoria:'Electricidad'
  },
  {
    titulo:"Consumo doméstico y producción de HL y GN",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/f4d2b6eb-26c3-470f-a057-8d2d1a577da2.png",
    fuente:"", 
    descripcion:"Consumo doméstico y producción de HL y GN a nivel mundial.",
    frecuencia:"",
    href: "coyuntura-global.html?#divConsumoDomestico",
    categoria:'Hidrocarburos'
  },
  {
    titulo:"Acceso a una cocina limpia",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/f4d2b6eb-26c3-470f-a057-8d2d1a577da2.png",
    fuente:"https://trackingsdg7.esmap.org/downloads#tab-1-3", 
    descripcion:"La metodología está disponible en https://trackingsdg7.esmap.org/methodology",
    frecuencia:"Anual",
    href: "coyuntura-global.html?#divAccesoCocina",
    categoria:'Gas Natural'
  },
  {
    titulo:"Producción de minerales",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/b69b781c-9a58-4cf4-bf38-3ec4e9f53eec.png",
    fuente:"https://www.world-mining-data.info/?World_Mining_Data___Data_Section", 
    descripcion:"Se aplicaría el filtro por tipo de mineral y no por continente.",
    frecuencia:"Anual",
    href: "coyuntura-global.html?#divProduccionMinerales",
    categoria:'Minería'
  },
  {
    titulo:"Precios de metales",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/9fc3b5c9-8bf7-4add-b39b-e4a3c7fc7866.png",
    fuente:"Bloomberg o agregar la fuente del Tablero de AD.", 
    descripcion:"Se considerarán los precios internacionales del oro, plata, cobre, aluminio, zinc, hierro, plomo, acero y molibdeno (se podrían incluir el polietileno). Se tendrán filtros para metales más exportados y los que afectan al sector eléctrico y de GN.",
    frecuencia:"Semanal",
    href: "coyuntura-global.html?#divPreciosMetales",
    categoria:'Minería'
  },
  {
    titulo:"Consumo, generación y capacidad de electricidad",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/60ca113c-d8ff-4c79-a06b-cc4b5667d283.png",
    fuente:"https://es.enerdata.net/publicaciones/energy-outlook.html", 
    descripcion:"Se presentan las proyecciones en base a un Escenario EnerBlue.",
    frecuencia:"Cuando aparezcan nuevas proyecciones",
    href: "evolucion-y-proyeccion-del-sector-energetico.html?#divConsumo",
    categoria:'Electricidad'
  },
  {
    titulo:"Participación de fuentes RER en el consumo primario de energía",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/60ca113c-d8ff-4c79-a06b-cc4b5667d283.png",
    fuente:"https://es.enerdata.net/publicaciones/energy-outlook.html", 
    descripcion:"Se presentan las proyecciones en base a un Escenario EnerBlue.",
    frecuencia:"Cuando aparezcan nuevas proyecciones",
    href: "evolucion-y-proyeccion-del-sector-energetico.html?#divParticipacion",
    categoria:'Electricidad'
  },
  {
    titulo:"Participación de combustibles fósiles en el consumo primario de energía",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/6ac9ce77-18d9-4b51-89a0-8d72c48511b1.png",
    fuente:"https://es.enerdata.net/publicaciones/energy-outlook.html", 
    descripcion:"Abarca el consumo del propio sector energético, las pérdidas durante la transformación (por ejemplo, de petróleo o gas en electricidad) y distribución de energía, y el consumo final por parte de los usuarios finales.",
    frecuencia:"Cuando aparezcan nuevas proyecciones",
    href: "evolucion-y-proyeccion-del-sector-energetico.html?#divParticipacionCombustibles",
    categoria:'Hidrocarburos'
  },
  {
    titulo:"Serie de WTI",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/60ca113c-d8ff-4c79-a06b-cc4b5667d283.png",
    fuente:"Bloomberg o agregar la fuente del Tablero de AD.", 
    descripcion:"El ciudadano podrá visualizar la información diaria con la opción de mensualizar y anualizar los precios mediante precios del final de periodo.",
    frecuencia:"Diario",
    href: "precio-internacionales-de-hidrocarburos-liquidos.html?#divSerieWTI",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Serie de Brent",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/6ac9ce77-18d9-4b51-89a0-8d72c48511b1.png",
    fuente:"Bloomberg o agregar la fuente del Tablero de AD.", 
    descripcion:"El ciudadano podrá visualizar la información diaria con la opción de mensualizar y anualizar los precios mediante precios del final de periodo.",
    frecuencia:"Diario",
    href: "precio-internacionales-de-hidrocarburos-liquidos.html?#divSerieBrent",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Serie de Mont Belviu",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/60ca113c-d8ff-4c79-a06b-cc4b5667d283.png",
    fuente:"Bloomberg o agregar la fuente del Tablero de AD.", 
    descripcion:"El ciudadano podrá visualizar la información diaria con la opción de mensualizar y anualizar los precios mediante precios del final de periodo.",
    frecuencia:"Diario",
    href: "precio-internacionales-de-hidrocarburos-liquidos.html?#divSerieMont",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Serie de Henry Hub",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/6ac9ce77-18d9-4b51-89a0-8d72c48511b1.png",
    fuente:"Bloomberg o agregar la fuente del Tablero de AD.", 
    descripcion:"El ciudadano podrá visualizar la información diaria con la opción de mensualizar y anualizar los precios mediante precios del final de periodo.",
    frecuencia:"Diario",
    href: "precio-internacionales-de-hidrocarburos-liquidos.html?#divSerieHenry",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Distribución de las tecnologías de RER por regiones",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/60ca113c-d8ff-4c79-a06b-cc4b5667d283.png",
    fuente:"https://www.irena.org/Data/View-data-by-topic/Capacity-and-Generation/Country-Rankings.irena.org/pxweb/es/IRENASTAT/IRENASTAT__Power%20Capacity%20and%20Generation/RE-ELECGEN_2022_cycle2.px/", 
    descripcion:"El ciudadano podrá ser direccionado a IRENA para una mayor indagación.",
    frecuencia:"Diario",
    href: "energias-renovables.html?#divDistribucion",
    categoria:'Electricidad'
  },
  {
    titulo:"Los costos de instalación y de generación por tecnología",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/60ca113c-d8ff-4c79-a06b-cc4b5667d283.png",
    fuente:"https://www.irena.org/Data/View-data-by-topic/Costs/Global-Trends", 
    descripcion:"El ciudadano podrá ser direccionado a IRENA para una mayor indagación.",
    frecuencia:"Diario",
    href: "energias-renovables.html?#divCostos",
    categoria:'Electricidad'
  },
  {
    titulo:"Interrupciones (SAIDI y SAIFI)",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/ab5d4ab4-2ebc-4d00-9d8e-1bbee5eeee59.png",
    fuente:"DSR <br>GSTI:<br>https://app.powerbi.com/view?r=eyJrIjoiOTJmMTc2ZmYtMDM4Yy00MDE4LTliNjYtMDE4Yjc0YjliNTU3IiwidCI6IjlhNzRmMTA0LThjMGUtNDRlNy1hMTFlLWU0ZGMwMzAxZTIzYyIsImMiOjR9&pageName=ReportSectionca571ec36db486c09b41", 
    descripcion:"Se presenta la información con una descripción de los indicadores que se usan para el monitoreo de las empresas de distribución. Existen filtros de periodos, ubicación y segmento (G/T/D). La información va desde 2020.",
    frecuencia:"Mensual",
    href: "electricidad.html?ubigeo=00#Interrupciones-saidi-y-saifi",
    categoria:'Electricidad'
  },
  {
    titulo:"Información de los Usuarios regulados por zonas de concesión de distribuidoras",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/60ca113c-d8ff-4c79-a06b-cc4b5667d283.png",
    fuente:"https://www.osinergmin.gob.pe/seccion/institucional/regulacion-tarifaria/publicaciones/regulacion-tarifaria", 
    descripcion:"Se visualizará la información de energía, clientes y facturación por departamentos, por concesionaria, por tipo de uso (residencial, comercial o industrial) o por rangos de consumo.",
    frecuencia:"Trimestral",
    href: "electricidad.html?ubigeo=00#informacion-de-los-usuarios-regulados-por-zonas",
    categoria:'Electricidad'
  },
  {
    titulo:"Porcentaje de Unidades de Alumbrado Público (UAP) Deficientes detectadas en los procedimientos de supervisión",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/d0cb6817-d84b-487a-9eac-b8d1bec53536.png",
    fuente:"DSR.", 
    descripcion:"Se presenta la información por concesionaria y por zona (urbana y no urbana)",
    frecuencia:"Semestral",
    href: "electricidad.html?ubigeo=00#porcentaje-de-unidades-de-alumbrado-publico",
    categoria:'Electricidad'
  },
  {
    titulo:"Información de plantas generadoras, líneas y subestaciones eléctricas",
    url:"../images/buscador/map.png",
    fuente:"https://gisem.osinergmin.gob.pe/menergetico/#", 
    descripcion:"Mapa del actual Observatorio Energético Minero",
    frecuencia:"",
    href: "electricidad.html?ubigeo=00#informacion-de-plantas-generadoras",
    categoria:'Electricidad'
  },
  {
    titulo:"Evolución de la Potencia Efectiva, Máxima Demanda del SEIN y margen de reserva",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/172235f4-728f-4938-9c58-84e3ffb97dc9.png",
    fuente:"GPAE", 
    descripcion:"Se toma la información del COES.",
    frecuencia:"Semanal",
    href: "electricidad.html?ubigeo=00#evolucion-de-la-generacion-y-maxima-demanda-del-sein",
    categoria:'Electricidad'
  },
  {
    titulo:"Evolución de la Producción por tipo de combustible o tecnología",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/1bb24e24-ebb6-4513-8d80-3592e2ca0522.png",
    fuente:"https://www.coes.org.pe/Portal/PostOperacion/Informes/EvaluacionMensual", 
    descripcion:"Se toma la información del COES.",
    frecuencia:"Mensual",
    href: "electricidad.html?ubigeo=00#evolucion-de-la-produccion-por-tipo-de-combustible",
    categoria:'Electricidad'
  },
  {
    titulo:"Tarifas eléctricas del país",
    url:"../images/map/map-peru-electricidad.png",
    fuente:"https://gisem.osinergmin.gob.pe/menergetico/#", 
    descripcion:"Se toma la información de los Pliegos tarifarios",
    frecuencia:"Mensual",
    href: "electricidad.html?ubigeo=00#terifas-electricas-del-pais",
    categoria:'Electricidad'
  },
  {
    titulo:"Tarifas eléctricas regionales",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/b382e89f-3db6-48b7-a950-c1290a35d415.png",
    fuente:"GPAE", 
    descripcion:"Se toma la información de Publicaciones --> Tarifas Internacionales",
    frecuencia:"Trimestral",
    href: "electricidad.html?ubigeo=00#divCompleto",
    categoria:'Electricidad'
  },
  {
    titulo:"Estadísticas de Acciones de Supervisión y PAS de las unidades operativas mayores",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/a5731cf5-8e6e-4475-b21b-549927ee1c6e.png",
    fuente:"DSHL<br>CGIO", 
    descripcion:"",
    frecuencia:"Mensual",
    href: "hidrocarburos-liquidos.html?ubigeo=00#divEstadisticas",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"​Estadísticas de Infracciones y Multas impuestas a unidades operativas mayores en primera instancia",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/493a69d1-1444-4eeb-8f0c-0d41a9fe12a3.png",
    fuente:"DSHL<br>CGIO", 
    descripcion:"",
    frecuencia:"",
    href: "hidrocarburos-liquidos.html?ubigeo=00#divEstadisticasInfracciones",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Estructura de precios de combustibles",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/2dbe3ee7-6679-4bb9-bc26-cd3c94fe8567.png",
    fuente:"http://www.minem.gob.pe/_estadisticaSector.php?idSector=5", 
    descripcion:"Se grafica la estructura de precios del GLP, principales gasoholes, y el diésel B5 UV.",
    frecuencia:"Mensual",
    href: "hidrocarburos-liquidos.html?ubigeo=00#divEstructura",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Exportación e importación de derivados de petróleo (Volumen)",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/bad7ad6d-3900-4abc-a48e-2e9493aeb0e6.png",
    fuente:"https://observatorio.osinergmin.gob.pe/exportacion-petroleo-derivados <br>https://observatorio.osinergmin.gob.pe/importacion-petroleo-derivados", 
    descripcion:"Se podrán ver los saldos y ver si somos un país exportador o importador neto de cada combustible.",
    frecuencia:"Mensual",
    href: "hidrocarburos-liquidos.html?ubigeo=00#divExportacion",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Inventario y disponibilidad de GLP",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/4f706d8c-b9ea-4ee2-964c-dc36780272f3.png",
    fuente:"https://observatorio.osinergmin.gob.pe/inventarios-disponibilidad-glp", 
    descripcion:"Se realizará el seguimiento al agregado nacional, así como a las plantas de Lima, Pisco y Piura por ser las de mayor producción. Asimismo, la información se podrá ver por día, y promedio semanal y mensual.",
    frecuencia:"Semanal",
    href: "hidrocarburos-liquidos.html?ubigeo=00#divInventario",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Precios de combustibles líquidos",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/6c59b404-8d4c-4112-b41c-8d7315ff8a1e.png",
    fuente:"https://www.osinergmin.gob.pe/empresas/hidrocarburos/scop/documentos-scop", 
    descripcion:"Precios de venta en EESS y gasocentros.",
    frecuencia:"Mensual",
    href: "hidrocarburos-liquidos.html?ubigeo=00#divPrecios",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Ventas de combustibles líquidos",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/4ec25f1c-5373-4ff5-943e-cd77cc8aff95.png",
    fuente:"https://www.osinergmin.gob.pe/empresas/hidrocarburos/scop/documentos-scop", 
    descripcion:"Demanda a nivel nacional",
    frecuencia:"Mensual",
    href: "hidrocarburos-liquidos.html?ubigeo=00#divVentas",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Precios de GLP",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/060d5db1-1d7a-4512-a5df-f37a43bf03ec.png",
    fuente:"https://www.osinergmin.gob.pe/empresas/hidrocarburos/scop/documentos-scop", 
    descripcion:"Precio de GLP en EESS y gasocentros",
    frecuencia:"Mensual",
    href: "hidrocarburos-liquidos.html?ubigeo=00#divPreciosGLP",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Ventas de GLP",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/5377709f-d7a5-484e-af0b-05782a16f83d.png",
    fuente:"https://www.osinergmin.gob.pe/empresas/hidrocarburos/scop/documentos-scop", 
    descripcion:"Demanda a nivel nacional de granel y envasado",
    frecuencia:"Mensual",
    href: "hidrocarburos-liquidos.html?ubigeo=00#divVentasGLP",
    categoria:'Hidrocarburos Líquidos'
  },
  {
    titulo:"Información agregada sobre la producción, almacenamiento y transporte",
    url:"",
    fuente:"https://gisem.osinergmin.gob.pe/menergetico/", 
    descripcion:"La información georreferencial será aproximada y provendrá del Mapa Energético Minero.",
    frecuencia:"",
    href: "gas-natural.html#divInformacionGeorreferenciada",
    categoria:'Gas Natural'
  },
  {
    titulo:"Producción de GN",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/27b5a63c-c5f8-44df-9e1d-194143876e7a.png",
    fuente:"https://observatorio.osinergmin.gob.pe/produccion-liquidos-gas-natural", 
    descripcion:"Se podrá visualizar la serie de producción de GN húmedo y seco.",
    frecuencia:"",
    href: "gas-natural.html#divProduccion",
    categoria:'Gas Natural'
  },
  {
    titulo:"Producción de LGN",
    url:"",
    fuente:"https://app.powerbi.com/view?r=eyJrIjoiMDRkYzMzY2MtMDg0Yy00NTdlLTk2NWEtNDE1MTUzMTc4NzBkIiwidCI6IjlhNzRmMTA0LThjMGUtNDRlNy1hMTFlLWU0ZGMwMzAxZTIzYyIsImMiOjR9", 
    descripcion:"Se podrá visualizar la serie de producción de líquidos de GN.",
    frecuencia:"",
    href: "gas-natural.html#divProduccion",
    categoria:'Gas Natural'
  },
  {
    titulo:"Exportación de GN (Volumen)",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/319b0d8b-885d-4d85-a364-77869787ce4f.png",
    fuente:"https://observatorio.osinergmin.gob.pe/gas-natural-exportado", 
    descripcion:"",
    frecuencia:"",
    href: "gas-natural.html#divExportacionGasNatural",
    categoria:'Gas Natural'
  },
  {
    titulo:"Volumen de GN entregado por TGP",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/2bc61202-28b5-4c23-ac51-3e69a8b8cee3.png",
    fuente:"https://app.powerbi.com/view?r=eyJrIjoiYjE5MjJmOTAtNjhlMC00NjVkLWJhZmYtYTM5Zjg4YmFiMzExIiwidCI6IjlhNzRmMTA0LThjMGUtNDRlNy1hMTFlLWU0ZGMwMzAxZTIzYyIsImMiOjR9", 
    descripcion:"",
    frecuencia:"",
    href: "gas-natural.html#divVolumenGN",
    categoria:'Gas Natural'
  },
  {
    titulo:"Distribución de GN por segmento de demanda",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/e8dca535-eba3-43c4-a6e4-970d7b389528.png",
    fuente:"http://www.minem.gob.pe/_estadistica.php?idSector=5&idEstadistica=13501", 
    descripcion:"Se podrá visualizar la serie de producción de líquidos de GN.",
    frecuencia:"Mensual",
    href: "gas-natural.html#divDistribucion",
    categoria:'Gas Natural'
  },
  {
    titulo:"Redes de distribución por zona de concesión",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/c79f2b75-f020-4f51-aaa8-dfd13142cffb.png",
    fuente:"https://gisem.osinergmin.gob.pe/menergetico/#", 
    descripcion:"Redes de distribución de acero y polietileno",
    frecuencia:"",
    href: "gas-natural.html#divRedes",
    categoria:'Gas Natural'
  },
  {
    titulo:"Tarifas de distribución por concesión",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/c79f2b75-f020-4f51-aaa8-dfd13142cffb.png",
    fuente:"https://www.osinergmin.gob.pe/seccion/institucional/regulacion-tarifaria/pliegos-tarifarios/gas-natural", 
    descripcion:"Tarifas de distribución de gas natural por concesión.",
    frecuencia:"Mensual",
    href: "gas-natural.html#divTarifas",
    categoria:'Gas Natural'
  },
  {
    titulo:"Producción de minerales",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/27b5a63c-c5f8-44df-9e1d-194143876e7a.png",
    fuente:"https://www.gob.pe/institucion/minem/colecciones/6-boletin-estadistico-minero", 
    descripcion:"Producción de minerales de oro, plata, cobre, aluminio, hierro, plomo, zinc y molibdeno.",
    frecuencia:"Mensual",
    href: "mineria.html#divMinerales",
    categoria:'Minería'
  },
  {
    titulo:"Inventario de componentes geotécnicos",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/58eefa1e-3673-4259-b871-bdb54196b2d7.png",
    fuente:"GSM", 
    descripcion:"Se presenta información sobre: Inventario de Tajos abiertos, Inventario de Depositos de relaves, Inventario de Depósitos de desmonte y Inventario de Pads de lixiviación.",
    frecuencia:"",
    href: "mineria.html#divInventario",
    categoria:'Minería'
  } ,
  {
    titulo:"Exportación de minerales",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/27ec79a6-7952-4d5f-a205-3126d28c9feb.png",
    fuente:"https://www.gob.pe/institucion/minem/colecciones/6-boletin-estadistico-minero", 
    descripcion:"Exportación de minerales de oro, plata, cobre, aluminio, hierro, plomo, zinc y molibdeno.",
    frecuencia:"Mensual",
    href: "mineria.html#divExportacion",
    categoria:'Minería'
  } ,
  {
    titulo:"Número de Supervisiones realizadas y Accidentes mortales",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/d9dc30cf-8852-4587-afdc-bb97395aba7f.png",
    fuente:"https://observatorio.osinergmin.gob.pe/supervisiones-realizadas-accidentes-mortales", 
    descripcion:"",
    frecuencia:"",
    href: "mineria.html#divSupervisiones",
    categoria:'Minería'
  } ,
  {
    titulo:"Índice de Seguridad",
    url:"https://gisem.osinergmin.gob.pe/validar/monitoreo/images/f2b91c18-73e1-4408-a3a6-48baffbd86a3.png",
    fuente:"https://observatorio.osinergmin.gob.pe/indices-seguridad-mineria", 
    descripcion:"",
    frecuencia:"",
    href: "mineria.html#divSeguridad",
    categoria:'Minería'
  } ,
  {
    titulo:"Principales Proyectos Mineros",
    url:"../images/buscador/map.png",
    fuente:"https://gisem.osinergmin.gob.pe/menergetico/", 
    descripcion:"Se presentará información del mapa energético minero sobre proyectos mineros y unidades de explotación.",
    frecuencia:"",
    href: "mineria.html#divPrincipalesProyectos",
    categoria:'Minería'
  }  
];