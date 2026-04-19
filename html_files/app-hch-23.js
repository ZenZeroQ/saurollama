var version = 23;

//parametros_config
//parametros_config
import { 
    dominio_apis,
    url_datos_estructurados_noticias,
    url_datos_estructurados_proximos_programas,
    url_datos_estructurados_ultimos_resultados,
    url_datos_estructurados_programa,
    url_datos_estructurados_resultado,
    url_datos_estructurados_logo_hipodromo,
    url_datos_estructurados_suscripciones,
    nombre_app,
    baseExtendMaqueta,
    tipo_iconos,
    tipo_noticia_general,
    tipo_noticia,
    sigla_hipodormo,
    tipo_programa_temporada,
    ver_cronometro_aprontes,
    datos_contacto,
    templateVue,

    parametrosNoticiasGeneral,
    parametrosNoticias,
} from './config_app/config_app-hch.js?v=23';
//parametros_config
//parametros_config

//componenetes
//componentes sin ruta propia (normalmente usados dentro de otros componente)
const compRespuestaNormal = () => import('/generales_librerias/componentes_vue/generales/vue-comp-respuesta-normal.js?v='+version);
const compAuspiciosBannerPrincipal = () => import('/generales_librerias/componentes_vue/generales/vue-comp-auspicios.js?v='+version);
const compDatosEstructurados = () => import('/generales_librerias/componentes_vue/generales/vue-comp-datos_estructurados.js?v='+version);

const compNoticiasHome = () => import('/generales_librerias/componentes_vue/generales/vue-comp-noticias.js?v='+version);
const compNoticiasFooter = () => import('/generales_librerias/componentes_vue/generales/vue-comp-noticias.js?v='+version);
const compNoticiasAutomaticas = () => import('/generales_librerias/componentes_vue/generales/vue-comp-noticias.js?v='+version);

const compScroll = () => import('/generales_librerias/componentes_vue/generales/vue-comp-scroll.js?v='+version);
const compSenalEnVivoHome = () => import('/generales_librerias/componentes_vue/generales/vue-comp-contenido-asincrono.js?v='+version);

const compMenuEjemplar = () => import('/generales_librerias/componentes_vue/generales/vue-comp-menu-ejemplar.js?v='+version);
const compMenuEjemplarFinal = () => import('/generales_librerias/componentes_vue/generales/vue-comp-menu-ejemplar-fp.js?v='+version);

const compMenuSeguimiento = () => import('/generales_librerias/componentes_vue/generales/vue-comp-menu-seguimiento-ejemplar.js?v='+version);
const compEstadisticasProgramas = () => import('/generales_librerias/componentes_vue/generales/vue-comp-estadisticas-programa.js?v='+version);
const compCriasPadrilloYegua = () => import('/generales_librerias/componentes_vue/generales/vue-comp-crias-padrillo-yegua.js?v='+version);
const compTpdRace = () => import('/generales_librerias/componentes_vue/generales/vue-comp-tdp-race.js?v='+version);
const compCicloHipodromo = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ciclo-hipodromo.js?v='+version);
const compCalendario = () => import('/generales_librerias/componentes_vue/generales/vue-comp-calendario.js?v='+version);


const compEstdisticaHipodromo = () => import('/generales_librerias/componentes_vue/generales/vue-comp-estadistica-hipodromo.js?v='+version);
const compProximosProgramasHome = () => import('/generales_librerias/componentes_vue/generales/vue-comp-proximos-programas.js?v='+version);
const compUltimosResultadosHome = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ultimos-resultados.js?v='+version);
const compPronosticosElturfHome = () => import('/generales_librerias/componentes_vue/generales/vue-comp-pronosticos-elturf-home.js?v='+version);
const compEstdisticaIndividualHome = () => import('/generales_librerias/componentes_vue/generales/vue-comp-estadistica-individual.js?v='+version);
const compEstdisticaIndividual = () => import('/generales_librerias/componentes_vue/generales/vue-comp-estadistica-individual.js?v='+version);
const compPaginadorGeneral = () => import('/generales_librerias/componentes_vue/generales/vue-comp-paginador.js?v='+version);
const compBuscadorNoticias = () => import('/generales_librerias/componentes_vue/generales/vue-comp-buscar.js?v='+version);
const compBusquedaEjemplares = () => import('/generales_librerias/componentes_vue/generales/vue-comp-busqueda-ejemplares.js?v='+version);
const compInfografias = () => import('/generales_librerias/componentes_vue/generales/vue-comp-infografias.js?v='+version);
//componentes sin ruta propia (normalmente usados dentro de otros componente)

//componentes con ruta propia
const compHomeBase = () => import('/generales_librerias/componentes_vue/generales/vue-comp-home-'+nombre_app+'.js?v='+version);
const compHome = () => import('/generales_librerias/componentes_vue/generales/vue-comp-home-'+nombre_app+'.js?v='+version);
const compNoticiasGeneral = () => import('/generales_librerias/componentes_vue/generales/vue-comp-noticias.js?v='+version);
const compNoticiaInterior = () => import('/generales_librerias/componentes_vue/generales/vue-comp-noticia-interior.js?v='+version);
const compNoticiaInteriorAmistosa = () => import('/generales_librerias/componentes_vue/generales/vue-comp-noticia-interior.js?v='+version);
const compNoticiaVer = () => import('/generales_librerias/componentes_vue/generales/vue-comp-noticia-ver.js?v='+version);
const compContacto = () => import('/generales_librerias/componentes_vue/generales/vue-comp-contacto.js?v='+version);
const compContactoForm = () => import('/generales_librerias/componentes_vue/generales/vue-comp-contacto.js?v='+version);
const compContenidoAsincrono = () => import('/generales_librerias/componentes_vue/generales/vue-comp-contenido-asincrono.js?v='+version);

const compProximasInscripciones = () => import('/generales_librerias/componentes_vue/generales/vue-comp-proximas-inscripciones.js?v='+version);
const compProximosProgramas = () => import('/generales_librerias/componentes_vue/generales/vue-comp-proximos-programas.js?v='+version);
const compProximosPronosticos = () => import('/generales_librerias/componentes_vue/generales/vue-comp-proximos-programas.js?v='+version);
const compUltimosResultados = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ultimos-resultados.js?v='+version);

const compInscripcionVer = () => import('/generales_librerias/componentes_vue/generales/vue-comp-inscripcion-ver.js?v='+version);
const compProgramaVerSm = () => import('/generales_librerias/componentes_vue/generales/vue-comp-programa-ver-node.js?v='+version);
const compPronosticoVerSm = () => import('/generales_librerias/componentes_vue/generales/vue-comp-programa-ver-node.js?v='+version);
const compResultadoVerSm = () => import('/generales_librerias/componentes_vue/generales/vue-comp-resultado-ver-node.js?v='+version);

const compVerTodasInscripciones = () => import('/generales_librerias/componentes_vue/generales/vue-comp-todas-inscripciones-carrera.js?v='+version);
const compVerTodosProgramasSm  = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ver-todos.js?v='+version);
const compVerTodosPronosticosSm  = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ver-todos.js?v='+version);
const compVerTodosResultadosSm  = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ver-todos.js?v='+version);

const compProgramasIndiceEjemplares = () => import('/generales_librerias/componentes_vue/generales/vue-comp-programas-indice-ejemplares.js?v='+version);
const compProgramasIndiceJinetes = () => import('/generales_librerias/componentes_vue/generales/vue-comp-programas-indice-items.js?v='+version);
const compProgramasIndicePreparadores = () => import('/generales_librerias/componentes_vue/generales/vue-comp-programas-indice-items.js?v='+version);
const compProgramasPronosticosPrensa = () => import('/generales_librerias/componentes_vue/generales/vue-comp-programas-pronosticos-prensa.js?v='+version);
const compRepetidosReunion = () => import('/generales_librerias/componentes_vue/generales/vue-comp-repetidos-reunion.js?v='+version);
const compRetirosReunion = () => import('/generales_librerias/componentes_vue/generales/vue-comp-retiros-reunion.js?v='+version);
const compCambiosPreparadoresReunion = () => import('/generales_librerias/componentes_vue/generales/vue-comp-cambios-preparador-reunion.js?v='+version);
const compCambiosStudsReunion = () => import('/generales_librerias/componentes_vue/generales/vue-comp-cambios-stud-reunion.js?v='+version);
const compArchivosSitio = () => import('/generales_librerias/componentes_vue/generales/vue-comp-archivos-sitio.js?v='+version);
const compArchivosCsv = () => import('/generales_librerias/componentes_vue/generales/vue-comp-archivos-csv.js?v='+version);

const compAprontesCarreras = () => import('/generales_librerias/componentes_vue/generales/vue-comp-aprontes-carreras.js?v='+version);

const compArchivosPdf = () => import('/generales_librerias/componentes_vue/generales/vue-comp-archivos-pdf.js?v='+version);
const compProgramaTemporada = () => import('/generales_librerias/componentes_vue/generales/vue-comp-programa-temporada.js?v='+version);

const compAprontesReunion = () => import('/generales_librerias/componentes_vue/generales/vue-comp-aprontes-reunion.js?v='+version);
const compPrensaArchivos = () => import('/generales_librerias/componentes_vue/generales/vue-comp-prensa-archivos.js?v='+version);
const compDebuntantesEjemplares = () => import('/generales_librerias/componentes_vue/generales/vue-comp-debutantes-ejemplares.js?v='+version);
const compCarrerasSimulcasting = () => import('/generales_librerias/componentes_vue/generales/vue-comp-carreras-simulcasting.js?v='+version);

const compFichaEjemplar = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ficha-ejemplar-fp.js?v='+version);
const compFichaEjemplarNew = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ficha-ejemplar-fp.js?v='+version);
const compFichaEjemplarCampana = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ficha-ejemplar-fp.js?v='+version);
const compFichaEjemplarCampanaPadrillo = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ficha-ejemplar-fp.js?v='+version);
const compFichaEjemplarApronte = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ficha-ejemplar-fp.js?v='+version);
const compFichaEjemplarPedigree = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ficha-ejemplar-fp.js?v='+version);
const compFichaEjemplarFotos = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ficha-ejemplar-fp.js?v='+version);
const compFichaEjemplarVideos = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ficha-ejemplar-fp.js?v='+version);
const compFichaEjemplarArbol = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ficha-ejemplar-arbol.js?v='+version);

const compVentasRemates = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ventas-remates.js?v='+version);
const compVentasRematesVer = () => import('/generales_librerias/componentes_vue/generales/vue-comp-ventas-remates.js?v='+version);
//componentes con ruta propia

//parametros_url
//parametros_url
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const urlParamsTodos = Object.fromEntries(new URLSearchParams(valores) );

//debugger;
if( window.hasOwnProperty('elturf') ) {
} else {
    window.elturf = {};
}

//variables_no_agrupadas
window.var_testing = urlParams.get('var_testing');
window.var_mantencion = urlParams.get('var_mantencion');
window.fecha_noticias = (urlParams.get('fecha')) ? urlParams.get('fecha') : '';
window.id_articulo = (urlParams.get('id_articulo')) ? urlParams.get('id_articulo') : 0;
window.id_reunion = (urlParams.get('id_reunion')) ? urlParams.get('id_reunion') : 0;
window.id_carrera = (urlParams.get('id_carrera')) ? urlParams.get('id_carrera') : 0;
window.id_pais = (urlParams.get('id_pais')) ? urlParams.get('id_pais') : 0;
window.id_archivo = (urlParams.get('id_archivo')) ? urlParams.get('id_archivo') : 0;
//variables_no_agrupadas

window.elturf.var_testing = (urlParams.get('var_testing')) ? urlParams.get('var_testing') : '';
window.elturf.var_mantencion = (urlParams.get('var_mantencion')) ? urlParams.get('var_mantencion') : '';
window.elturf.fecha_noticias = (urlParams.get('fecha')) ? urlParams.get('fecha') : '';
window.elturf.id_articulo = (urlParams.get('id_articulo')) ? urlParams.get('id_articulo') : 0;
window.elturf.id_reunion = (urlParams.get('id_reunion')) ? urlParams.get('id_reunion') : 0;
window.elturf.id_carrera = (urlParams.get('id_carrera')) ? urlParams.get('id_carrera') : 0;
window.elturf.id_pais = (urlParams.get('id_pais')) ? urlParams.get('id_pais') : 0;
window.elturf.id_archivo = (urlParams.get('id_archivo')) ? urlParams.get('id_archivo') : 0;
//parametros_url
//parametros_url

//externos
//var VueSlickCarousel = window['vue-slick-carousel'];
var FsLightbox = window['FsLightbox'];
//externos

if (document.getElementById('app_vue_webelt')) {

    window.onload = function () {

        Vue.http.interceptors.push( function (request, next) {
            //debugger;
            //modify method
            //request.method = 'POST';
      
            //modifying request headers
            //request.headers.set('TEST', 'app');
            //request.params['chg_idioma'] = this.chg_idioma_app;
            //console.log('interceptor-app-elt:', this.chg_idioma_app);
          
            next( function (response) {
              //logging the response body
            });
        });

        //habilitar_herramienta_vuetool_del_navegador
        Vue.config.devtools = true;

        //vueMq.install(Vue);
        //componenetes
        //componentes sin ruta propia (normalmente usados dentro de otros componente)
        Vue.component('v-select', VueSelect.VueSelect);
        Vue.component('elt_respuestas_normal', compRespuestaNormal);

        Vue.component('elt-auspicios-banner-principal', compAuspiciosBannerPrincipal);

        Vue.component('elt-noticia-ver', compNoticiaVer);
        Vue.component('datos-estructurados', compDatosEstructurados);
        Vue.component('elt-contacto-form', compContactoForm);

        Vue.component('elt-noticias-home', compNoticiasHome);
        Vue.component('elt-noticias-footer', compNoticiasFooter);
        Vue.component('elt-noticias-automatica', compNoticiasAutomaticas);

        Vue.component('elt-scroll', compScroll);
        Vue.component('elt-senal-envivo-home', compSenalEnVivoHome);

        Vue.component('menu-ejemplar', compMenuEjemplar);
        Vue.component('menu-final-ejemplar', compMenuEjemplarFinal);
        Vue.component('menu-seguimento-ejemplar', compMenuSeguimiento);
        Vue.component('estadisticas-programas-ver', compEstadisticasProgramas);
        Vue.component('crias-yegua-padrillo', compCriasPadrilloYegua);
        Vue.component('tpd-race', compTpdRace);
        Vue.component('elt-ciclo-hipodromo', compCicloHipodromo);
        Vue.component('elt-calendario', compCalendario);

        
        Vue.component('pronosticos-elturf-home', compPronosticosElturfHome);
        Vue.component('paginador-general', compPaginadorGeneral);
        Vue.component('buscador-noticias', compBuscadorNoticias);
        Vue.component('proximos-programas-home', compProximosProgramasHome);
        Vue.component('ultimos-resultados-home', compUltimosResultadosHome);

        Vue.component('elt-estadistica-individual-home', compEstdisticaIndividualHome);
        Vue.component('elt-estadistica-individual', compEstdisticaIndividual);
        Vue.component('buscador-ejemplares', compBusquedaEjemplares);
        Vue.component('elt-infografias', compInfografias);
        //componentes sin ruta propia (normalmente usados dentro de otros componente)

        //componentes con ruta propia
        Vue.component('elt-home-base', compHomeBase);
        Vue.component('elt-home', compHome);
        Vue.component('elt-contacto', compContacto);
        Vue.component('elt-noticias-general', compNoticiasGeneral);
        Vue.component('elt-noticia-interior', compNoticiaInterior);
        Vue.component('elt-noticia-interior-amistosa', compNoticiaInteriorAmistosa);

        Vue.component('elt-reclamos-sugerencias', compHomeBase);
        Vue.component('elt-denuncias', compHomeBase);
        Vue.component('elt-hipodromo-chile', compHomeBase);
        Vue.component('elt-informacion-corporativa', compHomeBase);

        Vue.component('proximos-programas', compProximosProgramas);
        Vue.component('proximos-pronosticos', compProximosPronosticos );
        Vue.component('ultimos-resultados', compUltimosResultados);

        Vue.component('programa-ver-sm', compProgramaVerSm);
        Vue.component('pronostico-ver-sm', compPronosticoVerSm);
        Vue.component('resultado-ver-sm', compResultadoVerSm);
        
        Vue.component('ver-todos-programas-sm', compVerTodosProgramasSm);
        Vue.component('ver-todos-pronosticos-sm', compVerTodosPronosticosSm);
        Vue.component('ver-todos-resultados-sm', compVerTodosResultadosSm);

        Vue.component('elt-archivos-sitio', compArchivosSitio);

        Vue.component('elt-archivos-sitio-calendario-teletrak', compArchivosSitio);
        Vue.component('elt-archivos-sitio-rating', compArchivosSitio);
        Vue.component('elt-archivos-sitio-inscripcion-clasica', compArchivosSitio);
        Vue.component('elt-archivos-sitio-junta-accionistas', compArchivosSitio);
        Vue.component('elt-archivos-sitio-memorias', compArchivosSitio);
        Vue.component('elt-archivos-sitio-estados-financieros', compArchivosSitio);
        Vue.component('elt-archivos-sitio-codigo-etica', compArchivosSitio);
        Vue.component('elt-archivos-sitio-politica-conflicto-de-interes', compArchivosSitio);
        Vue.component('elt-archivos-sitio-modelo-prevencion-delito', compArchivosSitio);
        Vue.component('elt-archivos-sitio-documentos-corporativos', compArchivosSitio);
        Vue.component('elt-archivos-sitio-bases-licitacion', compArchivosSitio);
        
        Vue.component('elt-archivos-csv-trebol-oro', compArchivosCsv);
        Vue.component('elt-archivos-csv-trebol-plata', compArchivosCsv);
        Vue.component('elt-archivos-csv-tabla-records', compArchivosCsv);
        Vue.component('elt-archivos-csv-red-teletrak', compArchivosCsv);
        Vue.component('elt-archivos-csv-ubicacion', compArchivosCsv);

        Vue.component('programas-indice-ejemplares-sm', compProgramasIndiceEjemplares);
        Vue.component('programas-indice-jinetes-sm', compProgramasIndiceJinetes);
        Vue.component('programas-indice-preparadores-sm', compProgramasIndicePreparadores);
        Vue.component('programas-pronosticos-prensa-sm', compProgramasPronosticosPrensa);
        Vue.component('repetidos-reunion-sm', compRepetidosReunion);
        Vue.component('cambios-preparadores-reunion-sm', compCambiosPreparadoresReunion);
        Vue.component('cambios-studs-reunion-sm', compCambiosStudsReunion);
        Vue.component('retiros-reunion-sm', compRetirosReunion);

        Vue.component('proximas-inscripciones-sm', compProximasInscripciones);
        Vue.component('inscripcion-ver-sm', compInscripcionVer);
        Vue.component('ver-todos-inscripciones-sm', compVerTodasInscripciones);
        Vue.component('ver-aprontes-carrera', compAprontesCarreras);
        Vue.component('ver-retiros-pdf', compArchivosPdf);
        Vue.component('ver-acta-comisario-pdf', compArchivosPdf);
        Vue.component('ver-volante-pdf', compArchivosPdf);
        Vue.component('ver-novedades-pdf', compArchivosPdf);
        Vue.component('ver-sorteo-partidas-pdf', compArchivosPdf);
        Vue.component('ver-doping-pdf', compArchivosPdf);
        Vue.component('ver-prox-inscripciones-pdf', compArchivosPdf);

        Vue.component('elt-programa-temporada', compProgramaTemporada);
        Vue.component('elt-calendario-clasico', compProgramaTemporada);

        Vue.component('ver-prensa-pdf', compArchivosPdf); 
        Vue.component('ver-aprontes-reunion', compAprontesReunion);
        Vue.component('prensa-archivos', compPrensaArchivos);
        Vue.component('ejemplares-debutantes-carrera', compDebuntantesEjemplares);
        Vue.component('carreras-simulcasting', compCarrerasSimulcasting);
        Vue.component('elt-estadistica-hipodromo', compEstdisticaHipodromo);
        Vue.component('elt-estadistica-individual', compEstdisticaIndividual);

        Vue.component('ficha-ejemplar', compFichaEjemplar);
        Vue.component('ficha-ejemplar-new', compFichaEjemplarNew);
        Vue.component('ficha-ejemplar-campana', compFichaEjemplarCampana);
        Vue.component('ficha-ejemplar-aprontes', compFichaEjemplarApronte);
        Vue.component('ficha-ejemplar-pedigree', compFichaEjemplarPedigree);
        Vue.component('ficha-ejemplar-fotos', compFichaEjemplarFotos);
        Vue.component('ficha-ejemplar-videos', compFichaEjemplarVideos);
        Vue.component('ficha-ejemplar-arbol', compFichaEjemplarArbol);

        Vue.component('elt-ventas-remates', compVentasRemates);
        Vue.component('elt-ventas-remates-ver', compVentasRematesVer);
        //componentes con ruta propia

        //login_apps_perfil
        //login_apps_perfil

        //compContenidoAsincrono
        Vue.component('elt-contenido-asincromo', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-senal-envivo', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-hipodromo-chile', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-informacion-corporativa', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-politicas-de-privacidad', compContenidoAsincrono);

        //ue.component('elt-contenido-asincromo-calendario-teletrak', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-carreras-reglamento-hipico', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-carreras-aprenda-apostar', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-carreras-reglamento-apuestas', compContenidoAsincrono);
        //Vue.component('elt-contenido-asincromo-cable-operadores-apps', compContenidoAsincrono);

        Vue.component('elt-contenido-asincromo-cable-operadores-apps', compArchivosSitio);

        Vue.component('elt-contenido-asincromo-profesionales-de-la-hipica', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-tipos-de-carrera', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-el-partidor', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-fallo-fotografico', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-el-caballo', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-el-entrenamiento', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-la-cancha-de-carreras', compContenidoAsincrono);
        Vue.component('elt-contenido-asincromo-conoce-tu-hipodromo', compContenidoAsincrono);
        //componentes con ruta propia
        //componentes con ruta propia
        //componentes con ruta propia

        //externos
        //Vue.component('VueSlickCarousel', VueSlickCarousel);
        Vue.component('FsLightbox', FsLightbox);
        //externos

        //router
        const routes = [

            //home
            //{ path: '*', redirect: '/' },
            { 
                path: '/', 
                name: 'home-base', 
                component: compHomeBase, 
                funcion: "this.ejecutar_menu('elt_home_base' , true);", 
                funcion_componente: 'elt_home_base', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, tipo_vista_app: 'home', url_datos_estructurados_noticias: url_datos_estructurados_noticias, datos_app: route.params.datos_app, datos_noticias_app: route.params.datos_noticias, datos_noticias_config_vista: route.params.datos_noticias_config_vista, datos_auspicios_app: route.params.datos_auspicios, datos_auspicios_app_1a: route.params.datos_auspicios_1a, datos_auspicios_app_1b: route.params.datos_auspicios_1b, datos_auspicios_app_2a: route.params.datos_auspicios_2a, refresh_auto_app: route.params.refresh_auto }),
                meta: { title: 'Home' },
            },
            { 
                path: '/home', 
                name: 'home', 
                component: compHome, 
                funcion: "this.ejecutar_menu('elt_home' , true);", 
                funcion_componente: 'elt_home', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, tipo_vista_app: 'home', url_datos_estructurados_noticias: url_datos_estructurados_noticias, datos_app: route.params.datos_app, datos_noticias_app: route.params.datos_noticias, datos_noticias_config_vista: route.params.datos_noticias_config_vista, datos_auspicios_app: route.params.datos_auspicios, datos_auspicios_app_1a: route.params.datos_auspicios_1a, datos_auspicios_app_1b: route.params.datos_auspicios_1b, datos_auspicios_app_2a: route.params.datos_auspicios_2a, refresh_auto_app: route.params.refresh_auto }),
                meta: { title: 'Home' },
            },
            //home

            //otras_home
            { 
                path: '/reclamos-y-sugerencias', 
                name: 'reclamos-y-sugerencias', 
                component: compHomeBase, 
                funcion: "this.ejecutar_menu('elt_reclamos_sugerencias' , true);", 
                funcion_componente: 'elt_reclamos_sugerencias', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, tipo_vista_app: 'reclamos_sugerencias', datos_app: route.params.datos_app }),
                //props: { id_modulo_app: 499 },
                meta: { title: 'Reclamos y Sugerencias' },
            },            
            { 
                path: '/denuncias', 
                name: 'denuncias', 
                component: compHomeBase, 
                funcion: "this.ejecutar_menu('elt_denuncias' , true);", 
                funcion_componente: 'elt_denuncias', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, tipo_vista_app: 'denuncias', datos_app: route.params.datos_app }),
                //props: { id_modulo_app: 499 },
                meta: { title: 'Denuncias' },
            },
            { 
                path: '/hipodromo-chile', 
                name: 'hipodromo-chile', 
                component: compHomeBase, 
                funcion: "this.ejecutar_menu('elt_hipodromo_chile' , true);", 
                funcion_componente: 'elt_hipodromo_chile', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, tipo_vista_app: 'hipodromo_chile', datos_app: route.params.datos_app }),
                meta: { title: 'Hipódromo Chile' },
            },
            { 
                path: '/informacion-corporativa', 
                name: 'informacion-corporativa', 
                component: compHomeBase, 
                funcion: "this.ejecutar_menu('elt_informacion_corporativa' , true);", 
                funcion_componente: 'elt_informacion_corporativa', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, tipo_vista_app: 'informacion_corporativa', datos_app: route.params.datos_app }),
                meta: { title: 'Información Corporativa' },
            },
            //otras_home

            //formularios
            { 
                path: '/contacto', 
                name: 'contacto', 
                component: compContacto, 
                funcion: "this.ejecutar_menu('elt_contacto' , true);", 
                funcion_componente: 'elt_contacto', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, tipo_vista_app: 'full', datos_app: route.params.datos_app, datos_contacto_app: datos_contacto }),
                //props: { id_modulo_app: 499 },
                meta: { title: 'Contacto' },
            },
            //formularios

            //noticias
            { 
                path: '/noticias', 
                name: 'noticias', 
                component: compNoticiasGeneral, 
                funcion: "this.iniciar_componente('elt_noticias_general' , true);", 
                funcion_componente: 'elt_noticias_general', 
                props: parametrosNoticiasGeneral,
                meta: { title: 'Noticias' },
            },
            { 
                path: '/noticia-ver', 
                name: 'noticia-ver', 
                component: compNoticiaInterior, 
                funcion: "this.inicia_componente_noticia('elt_noticia_interior' , true);",
                funcion_componente: 'elt_noticia_interior', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_datos_estructurados_noticias: url_datos_estructurados_noticias, id_articulo: route.query.id_articulo, tipo_noticia: 'basica' }),
                meta: { title: 'Noticia Ver' },
            },
            {
                path: '/noticias/:id_articulo(\\d+)/:titulo', 
                name: 'noticia-ver-amistosa', 
                component: compNoticiaInteriorAmistosa, 
                funcion: "this.inicia_componente_noticia_amistosa('elt_noticia_interior_amistosa' , true);",
                funcion_componente: 'elt_noticia_interior_amistosa', 
                props: parametrosNoticias,
                meta: { title: 'Noticia Ver' },
            },
            //noticias

            //carreras
            {
                path: '/carreras-proximas-inscripciones', 
                name: 'carreras-proximas-inscripciones',
                component: compProximasInscripciones, 
                funcion: "this.inicia_componente_carrera_sm('proximas_inscripciones_sm' , true);", 
                funcion_componente: 'proximas_inscripciones_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_vista: 'hipodromo', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Proximas Inscripciones' },
            },
            {
                path: '/carreras-inscripciones-pdf', 
                name: 'carreras-inscripciones-pdf',
                component: compArchivosPdf, 
                funcion: "this.ejecutar_menu('ver_prox_inscripciones_pdf' , true);", 
                funcion_componente: 'ver_prox_inscripciones_pdf', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, tipo_archivo:'inscripciones' , geo_datos: '', tipo_boton: "invisible" }),
                meta: { title: 'Proximas Inscripciones' },
            },
            { 
                path: '/carreras-proximos-programas', 
                name: 'carreras-proximos-programas', 
                component: compProximosProgramas, 
                funcion: "this.ejecutar_menu('proximos_programas' , true);", 
                funcion_componente: 'proximos_programas', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_datos_estructurados_proximos_programas: url_datos_estructurados_proximos_programas, url_datos_estructurados_logo_hipodromo: url_datos_estructurados_logo_hipodromo, id_reunion: route.query.id_reunion, fechasel: route.query.fecha, geo_datos: '', tipo_vista: 'hipodromo', id_pais: 0 }),
                meta: { title: 'Próximos Programas' },
            },
            { 
                path: '/carreras-proximos-pronosticos', 
                name: 'carreras-proximos-pronosticos', 
                component: compProximosPronosticos, 
                funcion: "this.ejecutar_menu('proximos_pronosticos' , true);", 
                funcion_componente: 'proximos_pronosticos', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_datos_estructurados_proximos_programas: url_datos_estructurados_proximos_programas, url_datos_estructurados_logo_hipodromo: url_datos_estructurados_logo_hipodromo, id_reunion: route.query.id_reunion, fechasel: route.query.fecha, geo_datos: '', tipo_vista: 'hipodromo', id_pais: 0 }),
                meta: { title: 'Próximos Pronósticos' },
            },
            { 
                path: '/carreras-ultimos-resultados', 
                name: 'carreras-ultimos-resultados', 
                component: compUltimosResultados, 
                funcion: "this.ejecutar_menu('ultimos_resultados' , true);", 
                funcion_componente: 'ultimos_resultados', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_datos_estructurados_ultimos_resultados: url_datos_estructurados_ultimos_resultados, url_datos_estructurados_logo_hipodromo: url_datos_estructurados_logo_hipodromo, id_reunion: route.query.id_reunion, fechasel: route.query.fecha, geo_datos: '', tipo_vista: 'hipodromo', id_pais: 0 }),
                meta: { title: 'Últimos Resultados' },
            },


            {
                path: '/carreras-inscripcion-ver', 
                name: 'carreras-inscripcion-ver',
                component: compInscripcionVer, 
                funcion: "this.inicia_componente_carrera_sm('inscripcion_ver_sm' , true);", 
                funcion_componente: 'inscripcion_ver_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_carrera: route.query.id_carrera, sin_botoneras: false, tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Inscripción' },
            },
            { 
                path: '/carreras-programa-ver',
                name: 'carreras-programa-ver', 
                component: compProgramaVerSm, 
                funcion: "this.inicia_componente_carrera_sm('programa_ver_sm' , true);", 
                funcion_componente: 'programa_ver_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_datos_estructurados_programa: url_datos_estructurados_programa, url_datos_estructurados_logo_hipodromo: url_datos_estructurados_logo_hipodromo, id_carrera: route.query.id_carrera, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true, tipo_vista: 'hipodromo' }),
                meta: { title: 'Programa' },
            },
            { 
                path: '/carreras-pronostico-elturf-ver', 
                name: 'carreras-pronostico-elturf-ver', 
                component: compPronosticoVerSm, 
                funcion: "this.inicia_componente_carrera_sm('pronostico_ver_sm' , true);", 
                funcion_componente: 'pronostico_ver_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_datos_estructurados_programa: url_datos_estructurados_programa, url_datos_estructurados_logo_hipodromo: url_datos_estructurados_logo_hipodromo, id_carrera: route.query.id_carrera, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true, entrada: 'pronostico', tipo_vista: 'hipodromo' }),
                meta: { title: 'Pronóstico Elturf' },
            },
            { 
                path: '/carreras-resultado-ver', 
                name: 'carreras-resultado-ver', 
                component: compResultadoVerSm, 
                funcion: "this.inicia_componente_carrera_sm('resultado_ver_sm' , true);", 
                funcion_componente: 'resultado_ver_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_datos_estructurados_resultado: url_datos_estructurados_resultado, url_datos_estructurados_logo_hipodromo: url_datos_estructurados_logo_hipodromo, id_carrera: route.query.id_carrera, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true, tipo_vista: 'hipodromo' }),
                meta: { title: 'Resultado' },
            },


            {
                path: '/carreras-inscripciones-todas', 
                name: 'carreras-inscripciones-todas',
                component: compVerTodasInscripciones, 
                funcion: "this.inicia_componente_carrera_sm('ver_todos_inscripciones' , true);", 
                funcion_componente: 'ver_todos_inscripciones', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Inscripciones' },
            },
            { 
                path: '/carreras-programas-todos', 
                name: 'carreras-programas-todos', 
                component: compVerTodosProgramasSm, 
                funcion: "this.inicia_componente_reunion_sm('ver_todos_programas_sm' , true);", 
                funcion_componente: 'ver_todos_programas_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", entrada: 'programa', clases_boton: 'btn btn-default btn-xs btn-block' }),
                meta: { title: 'Programas' },
            },
            { 
                path: '/carreras-pronosticos-elturf-todos', 
                name: 'carreras-pronosticos-elturf-todos', 
                component: compVerTodosPronosticosSm, 
                funcion: "this.inicia_componente_reunion_sm('ver_todos_pronosticos_sm' , true);", 
                funcion_componente: 'ver_todos_pronosticos_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", entrada: 'pronostico', clases_boton: 'btn btn-default btn-xs btn-block' }),
                meta: { title: 'Pronósticos Elturf' },
            },
            { 
                path: '/carreras-resultados-todos', 
                name: 'carreras-resultados-todos', 
                component: compVerTodosResultadosSm, 
                funcion: "this.inicia_componente_reunion_sm('ver_todos_resultados_sm' , true);", 
                funcion_componente: 'ver_todos_resultados_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", entrada: 'resultado', clases_boton: 'btn btn-default btn-xs btn-block' }),
                meta: { title: 'Resultados' },
            },


            {
                path: '/carreras-aprontes', 
                name: 'carreras-aprontes',
                component: compAprontesCarreras, 
                funcion: "this.inicia_componente_carrera_sm('ver_aprontes_carrera' , true);", 
                funcion_componente: 'ver_aprontes_carrera', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true, ver_cronometro_app: ver_cronometro_aprontes }),
                meta: { title: 'Aprontes' },
            },
            {
                path: '/carreras-aprontes-proximas-reuniones', 
                name: 'carreras-aprontes-proximas-reuniones',
                component: compAprontesReunion, 
                funcion: "this.inicia_componente_carrera_sm('ver_aprontes_reunion' , true);", 
                funcion_componente: 'ver_aprontes_reunion', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Aprontes Próximas Reuniones' },
            },
            { 
                path: '/carreras-prensa-archivos', 
                name: 'carreras-prensa-archivos', 
                component: compPrensaArchivos, 
                funcion: "this.inicia_componente_reunion_sm('prensa_archivos' , true);", 
                funcion_componente: 'prensa_archivos', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Prensa' },
            },

            {
                path: '/carreras-ejemplares-debutantes', 
                name: 'carreras-ejemplares-debutantes',
                component: compDebuntantesEjemplares, 
                funcion: "this.inicia_componente_reunion_sm('ejemplares_debutantes_carrera' , true);", 
                funcion_componente: 'ejemplares_debutantes_carrera', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion , geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Debutantes' },
            },
            {
                path: '/carreras-simulcasting', 
                name: 'carreras-simulcasting',
                component: compCarrerasSimulcasting, 
                funcion: "this.inicia_componente_reunion_sm('carreras_simulcasting' , true);", 
                funcion_componente: 'carreras_simulcasting', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion , geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Simulcasting' },
            },
            //carreras

            //compProgramaTemporada
            { 
                path: '/carreras-programa-temporada', 
                name: 'carreras-programa-temporada', 
                component: compProgramaTemporada, 
                funcion: "this.ejecutar_menu('elt_programa_temporada' , true);", 
                funcion_componente: 'elt_programa_temporada', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, ano_inicio_app: new Date().getFullYear(), tipo_vista_app: tipo_programa_temporada, tipo_calendario_app: 'programa_temporada' }),
                meta: { title: 'Programa de Temporada' },
            },
            { 
                path: '/carreras-calendario-clasico', 
                name: 'carreras-calendario-clasico', 
                component: compProgramaTemporada, 
                funcion: "this.ejecutar_menu('elt_calendario_clasico' , true);", 
                funcion_componente: 'elt_calendario_clasico', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, ano_inicio_app: new Date().getFullYear(), tipo_vista_app: 'basica', tipo_calendario_app: 'calendario_clasico' }),
                meta: { title: 'Calendario Clásico' },
            },
            //compProgramaTemporada

            //estadisticas
            { 
                path: '/estadisticas-hipodromo', 
                name: 'estadisticas-hipodromo', 
                component: compEstdisticaHipodromo, 
                funcion: "this.ejecutar_menu('elt_estadistica_hipodromo' , true);", 
                funcion_componente: 'elt_estadistica_hipodromo', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, hipodromo: sigla_hipodormo }),
                meta: { title: 'Estadísticas' },
            },
            //estadisticas

            //menu_carreras
            { 
                path: '/carreras-ejemplares-inscritos', 
                name: 'carreras-ejemplares-inscritos', 
                component: compProgramasIndiceEjemplares, 
                funcion: "this.inicia_componente_reunion_sm('programas_indice_ejemplares_sm' , true);", 
                funcion_componente: 'programas_indice_ejemplares_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Indices de Ejemplares' },
            },
            { 
                path: '/carreras-jinetes-inscritos', 
                name: 'carreras-jinetes-inscritos', 
                component: compProgramasIndiceJinetes, 
                funcion: "this.inicia_componente_reunion_sm('programas_indice_jinetes_sm' , true);", 
                funcion_componente: 'programas_indice_jinetes_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Indices de Jinetes' },
            },
            { 
                path: '/carreras-preparadores-inscritos', 
                name: 'carreras-preparadores-inscritos', 
                component: compProgramasIndicePreparadores, 
                funcion: "this.inicia_componente_reunion_sm('programas_indice_preparadores_sm' , true);", 
                funcion_componente: 'programas_indice_preparadores_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', entrada: 'preparadores', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Indices de Preparadores' },
            },
            { 
                path: '/carreras-pronosticos-prensa-todos', 
                name: 'carreras-pronosticos-prensa-todos', 
                component: compProgramasPronosticosPrensa, 
                funcion: "this.inicia_componente_reunion_sm('programas_pronosticos_prensa_sm' , true);", 
                funcion_componente: 'programas_pronosticos_prensa_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Pronósticos Prensa' },
            },
            { 
                path: '/carreras-repetidos', 
                name: 'carreras-repetidos', 
                component: compRepetidosReunion, 
                funcion: "this.inicia_componente_reunion_sm('repetidos_reunion_sm' , true);", 
                funcion_componente: 'repetidos_reunion_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Carreras Repetidos' },
            },
            { 
                path: '/carreras-cambios-preparadores', 
                name: 'carreras-cambios-preparadores', 
                component: compCambiosPreparadoresReunion, 
                funcion: "this.inicia_componente_reunion_sm('cambios_preparadores_reunion_sm' , true);", 
                funcion_componente: 'cambios_preparadores_reunion_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Cambios Preparadores' },
            },
            { 
                path: '/carreras-cambios-studs', 
                name: 'carreras-cambios-studs', 
                component: compCambiosStudsReunion, 
                funcion: "this.inicia_componente_reunion_sm('cambios_studs_reunion_sm' , true);", 
                funcion_componente: 'cambios_studs_reunion_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Cambios Stud' },
            },
            {
                path: '/carreras-retiros-todos', 
                name: 'carreras-retiros-todos',
                component: compRetirosReunion, 
                funcion: "this.inicia_componente_reunion_sm('retiros_reunion_sm' , true);", 
                funcion_componente: 'retiros_reunion_sm', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Retiros Reunion' },
            },
            //menu_carreras

            //compArchivosPdf
            {
                path: '/carreras-prensa', 
                name: 'carreras-prensa',
                component: compArchivosPdf, 
                funcion: "this.inicia_componente_reunion_sm('ver_prensa_pdf' , true);", 
                funcion_componente: 'ver_prensa_pdf', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, tipo_archivo:'archivos_prensa' , geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Prensa' },
            },
            {
                path: '/carreras-retiros-historicos', 
                name: 'carreras-retiros-historicos',
                component: compArchivosPdf, 
                funcion: "this.ejecutar_menu('ver_retiros_pdf' , true);", 
                funcion_componente: 'ver_retiros_pdf', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, tipo_archivo:'retiros_historicos' , geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Retiros Históricos' },
            },
            {
                path: '/carreras-acta-comisarios', 
                name: 'carreras-acta-comisarios',
                component: compArchivosPdf, 
                funcion: "this.ejecutar_menu('ver_acta_comisario_pdf' , true);", 
                funcion_componente: 'ver_acta_comisario_pdf', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, tipo_archivo:'acta_comisarios' , geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Acta de Comisarios' },
            },
            {
                path: '/carreras-volante-carreras', 
                name: 'carreras-volante-carreras',
                component: compArchivosPdf, 
                funcion: "this.ejecutar_menu('ver_volante_pdf' , true);", 
                funcion_componente: 'ver_volante_pdf', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, tipo_archivo:'volante' , geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Volante de Carrera' },
            },
            {
                path: '/carreras-novedades-pdf', 
                name: 'carreras-novedades-pdf',
                component: compArchivosPdf, 
                funcion: "this.ejecutar_menu('ver_novedades_pdf' , true);", 
                funcion_componente: 'ver_novedades_pdf', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, tipo_archivo:'novedades' , geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Novedades' },
            },
            {
                path: '/carreras-sorteo-partidas', 
                name: 'carreras-sorteo-partidas',
                component: compArchivosPdf, 
                funcion: "this.ejecutar_menu('ver_sorteo_partidas_pdf' , true);", 
                funcion_componente: 'ver_sorteo_partidas_pdf', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, tipo_archivo:'sorteo_partidas' , geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Sorteo de Partidas' },
            },
            {
                path: '/carreras-informe-doping', 
                name: 'carreras-informe-doping',
                component: compArchivosPdf, 
                funcion: "this.ejecutar_menu('ver_doping_pdf' , true);", 
                funcion_componente: 'ver_doping_pdf', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_reunion: route.query.id_reunion, tipo_archivo:'informe_doping' , geo_datos: '', tipo_boton: "invisible", ver_auspicios: true }),
                meta: { title: 'Informe de Doping' },
            },
            //compArchivosPdf

            //archivos_sitios
            { 
                path: '/archivos-generales', 
                name: 'archivos-generales',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio' , true);", 
                funcion_componente: 'elt_archivos_sitio', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'archivos-generales', tipo_archivo: 'basica' }),
                meta: { title: 'Archivos Generales' },
            },
            { 
                path: '/cable-operadores-apps', 
                name: 'cable-operadores-apps',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_cable_operadores_apps' , true);", 
                funcion_componente: 'elt_contenido_asincromo_cable_operadores_apps', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'cable-operadores-apps', tipo_archivo: 'lista_imagenes', clases_imagenes: 'clases_tipo_socios', orden: 'invertido', ver_titulo_app: false }),
                meta: { title: 'Cable Operadores & Apps' },
            },
            //{ 
            //    path: '/cable-operadores-apps', 
            //    name: 'cable-operadores-apps', 
            //    component: compContenidoAsincrono, 
            //    funcion: "this.ejecutar_menu('elt_contenido_asincromo_cable_operadores_apps' , true);", 
            //    funcion_componente: 'elt_contenido_asincromo_cable_operadores_apps', 
            //    props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/cable-operadores-apps-asincrono', container: false }),
            //    meta: { title: 'Cable Operadores & Apps' },
            //},
            { 
                path: '/calendario-teletrak', 
                name: 'calendario-teletrak', 
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_calendario_teletrak' , true);", 
                funcion_componente: 'elt_archivos_sitio_calendario_teletrak', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'calendario-teletrak', tipo_archivo: 'lista_imagenes', clases_imagenes: 'clases_tipo_socios', orden: 'invertido', ver_titulo_app: false }),
                meta: { title: 'Calendario Teletrak' },
            },
            { 
                path: '/carreras-rating', 
                name: 'carreras-rating',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_rating' , true);", 
                funcion_componente: 'elt_archivos_sitio_rating', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'carreras-rating', tipo_archivo: 'basica' }),
                meta: { title: 'Rating' },
            },
            { 
                path: '/carreras-inscripcion-clasica-anticipada', 
                name: 'carreras-inscripcion-clasica-anticipada',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_inscripcion_clasica' , true);", 
                funcion_componente: 'elt_archivos_sitio_inscripcion_clasica', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'carreras-inscripcion-clasica-anticipada', tipo_archivo: 'basica' }),
                meta: { title: 'Inscripción Clásica Anticipada' },
            },
            { 
                path: '/junta-accionistas', 
                name: 'junta-accionistas',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_junta_accionistas' , true);", 
                funcion_componente: 'elt_archivos_sitio_junta_accionistas', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'junta-accionistas', tipo_archivo: 'basica' }),
                meta: { title: 'Junta Accionistas' },
            },
            { 
                path: '/memorias', 
                name: 'memorias',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_memorias' , true);", 
                funcion_componente: 'elt_archivos_sitio_memorias', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'memorias', tipo_archivo: 'basica' }),
                meta: { title: 'Memorias' },
            },
            { 
                path: '/estados-financieros', 
                name: 'estados-financieros',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_estados_financieros' , true);", 
                funcion_componente: 'elt_archivos_sitio_estados_financieros', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'estados-financieros', tipo_archivo: 'basica' }),
                meta: { title: 'Estados Financieros' },
            },
            { 
                path: '/codigo-etica', 
                name: 'codigo-etica',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_codigo_etica' , true);", 
                funcion_componente: 'elt_archivos_sitio_codigo_etica', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'codigo-etica', tipo_archivo: 'basica' }),
                meta: { title: 'Código de Ética' },
            },
            { 
                path: '/politica-conflicto-de-interes', 
                name: 'politica-conflicto-de-interes',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_politica_conflicto_de_interes' , true);", 
                funcion_componente: 'elt_archivos_sitio_politica_conflicto_de_interes', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'politica-conflicto-de-interes', tipo_archivo: 'basica' }),
                meta: { title: 'Política Conflicto de Interés' },
            },
            { 
                path: '/modelo-prevencion-delito', 
                name: 'modelo-prevencion-delito',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_modelo_prevencion_delito' , true);", 
                funcion_componente: 'elt_archivos_sitio_modelo_prevencion_delito', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'modelo-prevencion-delito', tipo_archivo: 'basica' }),
                meta: { title: 'Prevención del Delito' },
            },
            { 
                path: '/documentos-corporativos', 
                name: 'documentos-corporativos',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_documentos_corporativos' , true);", 
                funcion_componente: 'elt_archivos_sitio_documentos_corporativos', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'documentos-corporativos', tipo_archivo: 'basica' }),
                meta: { title: 'Documentos Corporativos' },
            },
            { 
                path: '/bases-licitacion-de-casinos', 
                name: 'bases-licitacion-de-casinos',
                component: compArchivosSitio, 
                funcion: "this.ejecutar_menu('elt_archivos_sitio_bases_licitacion' , true);", 
                funcion_componente: 'elt_archivos_sitio_bases_licitacion', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_archivo: route.query.id_archivo, ruta: 'bases-licitacion-de-casinos', tipo_archivo: 'basica' }),
                meta: { title: 'Bases Licitación de Casinos' },
            },
            //archivos_sitios

            //archivos_csv
            { 
                path: '/carreras-trebol-de-oro', 
                name: 'carreras-trebol-de-oro',
                component: compArchivosCsv, 
                funcion: "this.ejecutar_menu('elt_archivos_csv_trebol_oro' , true);", 
                funcion_componente: 'elt_archivos_csv_trebol_oro', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, ruta: 'carreras-trebol-de-oro', tipo_archivo: 'basica' }),
                meta: { title: 'Trebol de Oro' },
            },
            { 
                path: '/carreras-trebol-de-plata', 
                name: 'carreras-trebol-de-plata',
                component: compArchivosCsv, 
                funcion: "this.ejecutar_menu('elt_archivos_csv_trebol_plata' , true);", 
                funcion_componente: 'elt_archivos_csv_trebol_plata', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, ruta: 'carreras-trebol-de-plata', tipo_archivo: 'basica' }),
                meta: { title: 'Trebol de Plata' },
            },
            { 
                path: '/carreras-tabla-de-records', 
                name: 'carreras-tabla-de-records',
                component: compArchivosCsv, 
                funcion: "this.ejecutar_menu('elt_archivos_csv_tabla_records' , true);", 
                funcion_componente: 'elt_archivos_csv_tabla_records', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, ruta: 'carreras-tabla-de-records', tipo_archivo: 'basica' }),
                meta: { title: 'Tabla De Récords' },
            },
            { 
                path: '/red-teletrak', 
                name: 'red-teletrak',
                component: compArchivosCsv, 
                funcion: "this.ejecutar_menu('elt_archivos_csv_red_teletrak' , true);", 
                funcion_componente: 'elt_archivos_csv_red_teletrak', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, ruta: 'red-teletrak', tipo_archivo: 'red_teletrack', ver_titulo_app: false }),
                meta: { title: 'Red Teletrak' },
            },
            { 
                path: '/ubicacion', 
                name: 'ubicacion', 
                component: compArchivosCsv, 
                funcion: "this.ejecutar_menu('elt_archivos_csv_ubicacion' , true);", 
                funcion_componente: 'elt_archivos_csv_ubicacion', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, ruta: 'ubicacion', tipo_archivo: 'ubicacion', ver_titulo_app: false }),
                meta: { title: 'Ubicación' },
            },
            //archivos_csv

            //ejemplares
            {
                path: '/ejemplares/:id_ejemplar(\\d+)/:titulo', 
                name: 'ejemplares/:id_ejemplar(\\d+)/:titulo',
                component: compFichaEjemplarNew, 
                funcion: "this.inicia_componente_ficha_ejemplar('ficha_ejemplar_new' , true);", 
                funcion_componente: 'ficha_ejemplar_new', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_ejemplar: route.params.id_ejemplar, titulo: route.params.titulo, geo_datos: '', ver_auspicios: true, tipo_entrada: (route.params.hasOwnProperty('tipo_entrada')) ? route.params.tipo_entrada: 'home', tipo_vista_app: (route.params.hasOwnProperty('tipo_vista_app')) ? route.params.tipo_vista_app : 'web_hipodromo', app_pertenece: (route.params.hasOwnProperty('app_pertenece')) ? route.params.app_pertenece : 'general' }),   
                meta: { title: 'Ejemplar' },
            },

            {
                path: '/ejemplares-home', 
                name: 'ejemplares-home',
                component: compFichaEjemplar, 
                funcion: "this.inicia_componente_ficha_ejemplar('ficha_ejemplar' , true);", 
                funcion_componente: 'ficha_ejemplar', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_ejemplar: route.query.id_ejemplar, geo_datos: '', ver_auspicios: true, tipo_entrada: 'home' }),
                meta: { title: 'Ejemplar' },
            },
            {
                path: '/ejemplares-campana', 
                name: 'ejemplares-campanas',
                component: compFichaEjemplarCampana, 
                funcion: "this.inicia_componente_ficha_ejemplar('ficha_ejemplar_campana' , true);", 
                funcion_componente: 'ficha_ejemplar_campana', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_ejemplar: route.query.id_ejemplar, geo_datos: '', ver_auspicios: true, tipo_entrada: 'campana' }),
                meta: { title: 'Campaña Ejemplar' },
            },
            {
                path: '/ejemplares-aprontes', 
                name: 'ejemplares-aprontes',
                component: compFichaEjemplarApronte, 
                funcion: "this.inicia_componente_ficha_ejemplar('ficha_ejemplar_aprontes' , true);", 
                funcion_componente: 'ficha_ejemplar_aprontes', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_ejemplar: route.query.id_ejemplar, geo_datos: '', ver_auspicios: true, tipo_entrada: 'aprontes' }),
                meta: { title: 'Aprontes Ejemplar' },
            },
            {
                path: '/ejemplares-pedigree', 
                name: 'ejemplares-pedigree',
                component: compFichaEjemplarPedigree, 
                funcion: "this.inicia_componente_ficha_ejemplar('ficha_ejemplar_pedigree' , true);", 
                funcion_componente: 'ficha_ejemplar_pedigree', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_ejemplar: route.query.id_ejemplar, geo_datos: '', ver_auspicios: true, tipo_entrada: 'pedigree' }),
                meta: { title: 'Pedigree Ejemplar' },
            },
            {
                path: '/ejemplares-fotos', 
                name: 'ejemplares-fotos',
                component: compFichaEjemplarFotos, 
                funcion: "this.inicia_componente_ficha_ejemplar('ficha_ejemplar_fotos' , true);", 
                funcion_componente: 'ficha_ejemplar_fotos', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_ejemplar: route.query.id_ejemplar , geo_datos: '', ver_auspicios: true, tipo_entrada: 'fotos' }),
                meta: { title: 'Fotos Ejemplar' },
            },
            {
                path: '/ejemplares-videos', 
                name: 'ejemplares-videos',
                component: compFichaEjemplarVideos, 
                funcion: "this.inicia_componente_ficha_ejemplar('ficha_ejemplar_videos' , true);", 
                funcion_componente: 'ficha_ejemplar_videos', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, id_ejemplar: route.query.id_ejemplar , geo_datos: '', ver_auspicios: true, tipo_entrada: 'videos' }),
                meta: { title: 'Videos Ejemplar' },
            },
            //ejemplares

            //ventas_remates
            { 
                path: '/venta-ejemplares/', 
                name: 'venta-ejemplares', 
                component: compVentasRemates, 
                funcion: "this.ejecutar_menu('elt_ventas_remates' , true);", 
                funcion_componente: 'elt_ventas_remates', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, tipo_vista_app: 'venta_hipodromo', datos_app: route.params.datos_app }),
                //props: { id_modulo_app: 499 },
                meta: { title: 'Venta Ejemplares' },
            },
            { 
                path: '/venta-ejemplares/:id_evento(\\d+)', 
                name: 'venta-ejemplares-ver', 
                component: compVentasRematesVer, 
                funcion: "this.ejecutar_menu('elt_ventas_remates_ver' , true);", 
                funcion_componente: 'elt_ventas_remates_ver', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, tipo_vista_app: 'venta_hipodromo', datos_app: route.params.datos_app, id_evento_app: route.params.id_evento }),
                //props: { id_modulo_app: 499 },
                meta: { title: 'Venta Ejemplares' },
            },
            //ventas_remates

            //estaticos
            { 
                path: '/carreras-senal-en-vivo', 
                name: 'carreras-senal-en-vivo', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_senal_envivo' , true);", 
                funcion_componente: 'elt_contenido_asincromo_senal_envivo', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/carreras-senal-en-vivo-asincrono' }),
                meta: { title: 'Señal en Vivo' },
            },
            { 
                path: '/politicas-de-privacidad', 
                name: 'politicas-de-privacidad', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_politicas_de_privacidad' , true);", 
                funcion_componente: 'elt_contenido_asincromo_politicas_de_privacidad', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/politicas-de-privacidad-asincrono', container: false }),
                meta: { title: 'Políticas De Privacidad' },
            },
            { 
                path: '/carreras-reglamento-hipico', 
                name: 'carreras-reglamento-hipico', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_carreras_reglamento_hipico' , true);", 
                funcion_componente: 'elt_contenido_asincromo_carreras_reglamento_hipico', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/carreras-reglamento-hipico-asincrono', container: false }),
                meta: { title: 'Reglamento Hípico' },
            },
            { 
                path: '/carreras-aprenda-a-apostar', 
                name: 'carreras-aprenda-a-apostar', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_carreras_aprenda_apostar' , true);", 
                funcion_componente: 'elt_contenido_asincromo_carreras_aprenda_apostar', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/carreras-aprenda-a-apostar-asincrono', container: false }),
                meta: { title: 'Aprenda A Apostar' },
            },
            { 
                path: '/carreras-reglamento-apuestas', 
                name: 'carreras-reglamento-apuestas', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_carreras_reglamento_apuestas' , true);", 
                funcion_componente: 'elt_contenido_asincromo_carreras_reglamento_apuestas', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/carreras-reglamento-apuestas-asincrono', container: false }),
                meta: { title: 'Reglamento Apuestas' },
            },
            { 
                path: '/profesionales-de-la-hipica', 
                name: 'profesionales-de-la-hipica', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_profesionales_de_la_hipica' , true);", 
                funcion_componente: 'elt_contenido_asincromo_profesionales_de_la_hipica', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/profesionales-de-la-hipica-asincrono', container: false }),
                meta: { title: 'Profesionales de la Hípica' },
            },
            { 
                path: '/tipos-de-carrera', 
                name: 'tipos-de-carrera', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_tipos_de_carrera' , true);", 
                funcion_componente: 'elt_contenido_asincromo_tipos_de_carrera', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/tipos-de-carrera-asincrono', container: false }),
                meta: { title: 'Tipos de Carrera' },
            },
            { 
                path: '/el-partidor', 
                name: 'el-partidor', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_el_partidor' , true);", 
                funcion_componente: 'elt_contenido_asincromo_el_partidor', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/el-partidor-asincrono', container: false }),
                meta: { title: 'El Partidor' },
            },
            { 
                path: '/fallo-fotografico', 
                name: 'fallo-fotografico', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_fallo_fotografico' , true);", 
                funcion_componente: 'elt_contenido_asincromo_fallo_fotografico', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/fallo-fotografico-asincrono', container: false }),
                meta: { title: 'Fallo Fotográfico' },
            },
            { 
                path: '/el-caballo', 
                name: 'el-caballo', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_el_caballo' , true);", 
                funcion_componente: 'elt_contenido_asincromo_el_caballo', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/el-caballo-asincrono', container: false }),
                meta: { title: 'El Caballo' },
            },
            { 
                path: '/el-entrenamiento', 
                name: 'el-entrenamiento', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_el_entrenamiento' , true);", 
                funcion_componente: 'elt_contenido_asincromo_el_entrenamiento', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/el-entrenamiento-asincrono', container: false }),
                meta: { title: 'El Entrenamiento' },
            },
            { 
                path: '/la-cancha-de-carreras', 
                name: 'la-cancha-de-carreras', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_la_cancha_de_carreras' , true);", 
                funcion_componente: 'elt_contenido_asincromo_la_cancha_de_carreras', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/la-cancha-de-carreras-asincrono', container: false }),
                meta: { title: 'La Cancha De Carrera ' },
            },
            { 
                path: '/conoce-tu-hipodromo', 
                name: 'conoce-tu-hipodromo', 
                component: compContenidoAsincrono, 
                funcion: "this.ejecutar_menu('elt_contenido_asincromo_conoce_tu_hipodromo' , true);", 
                funcion_componente: 'elt_contenido_asincromo_conoce_tu_hipodromo', 
                props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, url_api_app: dominio_apis + '/conoce-tu-hipodromo-asincrono', container: false }),
                meta: { title: 'Conoce Tu Hipódromo' },
            },          
            //estaticos

            //{
            //    path: '/pronosticos-elturf-home', 
            //    name: 'pronosticos-elturf-home',
            //    component: compPronosticosElturfHome, 
            //    funcion: "this.iniciar_componente('pronosticos_elturf_home' , true);", 
            //    funcion_componente: 'pronosticos_elturf_home', 
            //    props: route => ({ id_idioma_app: route.params.id_idioma_app, dominio_apis: dominio_apis, baseExtendMaqueta_app: baseExtendMaqueta, tipo_iconos: tipo_iconos, geo_datos: '' }),
            //    meta: { title: 'Pronósticos Elturf Home' },
            //},
        ];

        window.router_lista_rutas = routes;

        const router = new VueRouter({
          mode: 'history',
          routes: routes // short for `routes: routes`
        })
        //router

        window.appVueWebelt = new Vue({
            router,
            name: nombre_app,
            mixins: [
                window.mixinConfig,
                window.mixinIdioma,
                window.mixinFuncionesGenerales,
            ],
            el: '#app_vue_webelt',
            components: {
               vuejsDatepicker,
            },

            //variables a usar
            data: {
                historico_componentes: [],
                componentes: {},
                ejecucion: 0,
                renderComponent: true,
                app_pertenece_validacion: 'general',

                dominio_apis: dominio_apis,
                baseExtendMaqueta: baseExtendMaqueta,
                tipo_iconos: tipo_iconos,
                url_datos_estructurados_noticias: url_datos_estructurados_noticias,

                mouseX: 0,
				mouseY: 0,
        
                idioma_form: window.mixinIdioma.methods.m_idioma_form(),
                id_idioma: 1,

                titulo: nombre_app,

                router_lista_rutas: window.router_lista_rutas,

                lista_componentes: [
                    'init', //sin uso real
                    'elt_auspicios_banner_principal',
                    'elt_home_base',
                    'elt_home',
                    'elt_contacto',
                    'elt_noticias_general',
                    'elt_noticia_interior',
                    'elt_noticia_interior_amistosa',
                    

                    'elt_reclamos_sugerencias',
                    'elt_denuncias',
                    'elt_hipodromo_chile',
                    'elt_informacion_corporativa',

                    'elt_noticias_home',

                    'proximos_programas',
                    'proximos_pronosticos',
                    'ultimos_resultados',

                    'programa_ver_sm',
                    'pronostico_ver_sm',
                    'resultado_ver_sm',

                    'ver_todos_programas_sm',
                    'ver_todos_pronosticos_sm',
                    'ver_todos_resultados_sm',

                    'elt_archivos_sitio',
                    'elt_archivos_sitio_calendario_teletrak',
                    'elt_archivos_sitio_rating',
                    'elt_archivos_sitio_inscripcion_clasica',
                    'elt_archivos_sitio_junta_accionistas',
                    'elt_archivos_sitio_memorias',
                    'elt_archivos_sitio_estados_financieros',
                    'elt_archivos_sitio_codigo_etica',
                    'elt_archivos_sitio_politica_conflicto_de_interes',
                    'elt_archivos_sitio_modelo_prevencion_delito',
                    'elt_archivos_sitio_documentos_corporativos',
                    'elt_archivos_sitio_bases_licitacion',

                    'elt_archivos_csv_trebol_oro',
                    'elt_archivos_csv_trebol_plata',
                    'elt_archivos_csv_tabla_records',
                    'elt_archivos_csv_red_teletrak',
                    'elt_archivos_csv_ubicacion',

                    'programas_indice_ejemplares_sm',
                    'programas_indice_jinetes_sm',
                    'programas_indice_preparadores_sm',
                    'programas_pronosticos_prensa_sm',
                    'repetidos_reunion_sm',
                    'cambios_preparadores_reunion_sm',
                    'cambios_studs_reunion_sm',
                    'retiros_reunion_sm',
                    'proximas_inscripciones_sm',
                    'inscripcion_ver_sm',
                    'ver_todos_inscripciones',
                    'ver_aprontes_carrera',
                    'ver_aprontes_reunion',

                    'ver_prensa_pdf',
                    'ver_acta_comisario_pdf',
                    'ver_volante_pdf',
                    'ver_novedades_pdf',
                    'ver_sorteo_partidas_pdf',
                    'ver_doping_pdf',
                    'ver_retiros_pdf',
                    'ver_prox_inscripciones_pdf',

                    'prensa_archivos',
                    'ejemplares_debutantes_carrera',
                    'carreras_simulcasting',

                    'ficha_ejemplar',
                    'ficha_ejemplar_campana',
                    'ficha_ejemplar_aprontes',
                    'ficha_ejemplar_pedigree',
                    'ficha_ejemplar_fotos',
                    'ficha_ejemplar_videos',
                    'ficha_ejemplar_arbol',

                    'elt_programa_temporada',
                    'elt_calendario_clasico',

                    'elt_estadistica_hipodromo',
                    'pronosticos_elturf_home',

                    //elt_contenido_asincromo
                    'elt_contenido_asincromo_senal_envivo',
                    'elt_contenido_asincromo_politicas_de_privacidad',
                    'elt_contenido_asincromo_carreras_aprenda_apostar',
                    'elt_contenido_asincromo_carreras_reglamento_apuestas',
                    'elt_contenido_asincromo_cable_operadores_apps',
                    //'elt_contenido_asincromo_calendario_teletrak',
                    'elt_contenido_asincromo_carreras_reglamento_hipico',

                    'elt_contenido_asincromo_profesionales_de_la_hipica',
                    'elt_contenido_asincromo_tipos_de_carrera',
                    'elt_contenido_asincromo_el_partidor',
                    'elt_contenido_asincromo_fallo_fotografico',
                    'elt_contenido_asincromo_el_caballo',
                    'elt_contenido_asincromo_el_entrenamiento',
                    'elt_contenido_asincromo_la_cancha_de_carreras',
                    'elt_contenido_asincromo_conoce_tu_hipodromo',
                    //elt_contenido_asincromo
                ],

                generales_sitio_web: window.mixinConfig.methods.config_generales_sitio_web(),
                datos_app: window.mixinConfig.methods.config_generales_sitio_web(),

                id_modulo: 0,
                id_articulo: window.id_articulo,
                id_reunion: window.id_reunion,
                id_carrera: window.id_carrera,
                id_pais: window.id_pais,
                id_archivo: window.id_archivo, 
                fecha_noticias: window.fecha_noticias,

                ocultar_html: true,
                config_iconos: false,

                cfg_links_html_sistema: window.mixinConfig.methods.config_links_html_sistema(),

                banner: {
                    'ver': false,
                    'textos': true,
                    'imagen': '',
                    'style': '',
                },

                clase_home_container: 'container',
                clase_home_container_color: true,

                datos_noticias: false,
                datos_noticias_config_vista: false,

                datos_scroll: false,
                iniciar_scroll_iniciar: true,
                datos_auspicios: false,
                datos_auspicios_1a: false,
                datos_auspicios_1b: false,
                datos_auspicios_2a: false,

                datos_ciclo_hipodromo: false,
                dia_carreras: false,
                refresh_auto: true,
                tiempo_refresh: (1000*60) * 60, //cada xx minutos

                datos_contacto_app: datos_contacto,
            },

            mounted: function () {
                //posicion_mouse
                document.addEventListener('mousemove', (event) => {
					this.mouseX = event.clientX;
					this.mouseY = event.clientY;

                    //console.log('Mouse:', this.mouseX, this.mouseY);
				});
            },

            beforeCreate: function () {
                console.log('beforeCreate:', this.titulo);
            },

            created: async function () {
                console.log('Inicio:', this.titulo);
                this.config_iconos = this.config_tipo_iconos(this.tipo_iconos);

                //inicializa obj componentes (para reactividad)
                this.reset_componentes(true);

                console.log('chg_idioma_app (1):', this.chg_idioma_app);
                await this.m_idioma_traer_idioma_actual();
                console.log('chg_idioma_app (2):', this.chg_idioma_app);
                //this.m_idioma_interceptor(this.chg_idioma_app);

                //this.idioma_form = this.m_idioma_form();

                //habilita al componente para su ejecucion durante el created
                //rutas
                //this.iniciar_componente_historico('elt_auspicios_banner_principal', true, false);

                ////inicia_el_componente_indicado_por_la_ruta
                //let rdefault = 0;
                //for (let i = 0; i < this.router_lista_rutas.length; i++) {
                //    if (window.location.pathname == this.router_lista_rutas[i].path) {
                //    //debugger;
                //    eval(this.router_lista_rutas[i].funcion);
                //    console.log('Url-Inicio:', this.router_lista_rutas[i].path, 'Component:', this.router_lista_rutas[i].component, 'Funcion:', this.router_lista_rutas[i].funcion);
                //    rdefault++
                //    }
                //}
                //if(rdefault==0) {
                //    eval(this.router_lista_rutas[0].funcion);
                //    console.log('Url-Inicio: (Default) ', this.router_lista_rutas[0].path, 'Component:', this.router_lista_rutas[0].component, 'Funcion:', this.router_lista_rutas[0].funcion);
                //}
                ////inicia_el_componente_indicado_por_la_ruta

                console.log('Url-Inicio:', window.location.pathname);

                //parche para la ejecucon del menu
                //parche para la ejecucon del menu

                $(document).ready(function () {

                });

                //cerrar_menu_automatico
                $('.tr-menu .navbar .sin_dropdown').on('click', function (e) {
                    //debugger;
                    console.log('cerrar_menu');

                    $('.tr-menu .navbar-toggle').click();
                });

                $('.tr-menu .navbar .dropdown li a').on('click', function (e) {
                    //debugger;
                    console.log('cerrar_menu');

                    //$('.dropdown ul.sub-menu').css('visibility', 'hidden');
                    $('.dropdown ul.sub-menu').addClass('cerrar_menu');
                    $('.tr-menu .navbar-toggle').click();

                    setTimeout(() => {
                        //$('.dropdown ul.sub-menu').css('visibility', 'initial');
                        $('.dropdown ul.sub-menu').removeClass('cerrar_menu');
                    }, 500);
                });

                //click_logo
                $('.click_cerrar_menu').on('click', function (e) {
                    //debugger;
                    console.log('cerrar_menu');

                    //$('.dropdown ul.sub-menu').css('visibility', 'hidden');
                    $('.dropdown ul.sub-menu').addClass('cerrar_menu');
                    $('.tr-menu .navbar-toggle').click();

                    setTimeout(() => {
                        //$('.dropdown ul.sub-menu').css('visibility', 'initial');
                        $('.dropdown ul.sub-menu').removeClass('cerrar_menu');
                    }, 500);
                });
                //cerrar_menu_automatico

                //parche para la ejecucon del menu
                //parche para la ejecucon del menu

                //refresh_automatico
                setInterval(() => {
                    if(this.refresh_auto) {
                        console.log('app: refresh automatico:', this.tiempo_refresh);
                        window.location.href = '/';
                    }

                }, this.tiempo_refresh);
                //clearInterval(id);
            },

            updated: function () {
                console.log('Update:', this.titulo);
            },

            computed: {

            },

            watch: {
                //generales_sitio_web: function () {
                //    this.datos_app = this.vue_fg_clonar_objeto( this.generales_sitio_web );
                //
                //    console.log('(w) generales_sitio_web');
                //},

                $route: function (to, from) {
                    console.log('Router:', 'ini');
                    //debugger;
                    this.navegar_router(to, from);

                    //ajusta home full container
                    //ajusta home full container
                    switch(to.name) {
                        case 'home-base':
                            this.clase_home_container = '';
                            this.clase_home_container_color = false;
                            this.refresh_auto = true;
                            break;

                        case 'home':
                            this.clase_home_container = '';
                            this.clase_home_container_color = false;
                            this.refresh_auto = true;
                            break;

                        default:
                            this.clase_home_container = 'container';
                            this.clase_home_container_color = true;
                            this.refresh_auto = false;
                    }
                    //ajusta home full container
                    //ajusta home full container

                    //debugger;
                    let nombre_sitio = '';
                    let meta_titulo_actual = document.title;
                    let meta_titulo = '';
                    let meta_descripcion = '';
                    let meta_keywords = '';

                    if( this.generales_sitio_web['datos_sitio_web'].hasOwnProperty('id_sitio') && this.generales_sitio_web['datos_sitio_web']['id_sitio']>0 ) {
                        nombre_sitio = ' | ' + this.generales_sitio_web['datos_sitio_web']['nombre_sitio'];
                    }

                    meta_titulo = (to && to.hasOwnProperty('meta') && to.meta.hasOwnProperty('title') && to.meta.title && to.meta.title!='' ) ? to.meta.title + nombre_sitio: meta_titulo_actual;
                    meta_descripcion = meta_titulo;
                    meta_keywords = this.vue_fg_ExtraerKeyWords(meta_descripcion, false, true, false, false);

                    if(meta_descripcion=='') {
                        if( this.generales_sitio_web['datos_sitio_web'].hasOwnProperty('metatag_descrption_spa') && this.generales_sitio_web['datos_sitio_web']['metatag_descrption_spa'] && this.generales_sitio_web['datos_sitio_web']['metatag_descrption_spa']!='' ) {
                            meta_descripcion = this.generales_sitio_web['datos_sitio_web']['metatag_descrption_spa'];
                        }
                    }
                    if(meta_keywords=='') {
                        if( this.generales_sitio_web['datos_sitio_web'].hasOwnProperty('metatag_keywords_spa') && this.generales_sitio_web['datos_sitio_web']['metatag_keywords_spa'] && this.generales_sitio_web['datos_sitio_web']['metatag_keywords_spa']!='' ) {
                            meta_keywords = this.generales_sitio_web['datos_sitio_web']['metatag_keywords_spa'];
                        }
                    }

                    this.$meta().addApp('meta-elt').set( {
                        title: meta_titulo,
                        meta: [
                            { name: 'description', content: meta_descripcion },
                            { name: 'keywords', content: meta_keywords },

                            { name: 'og:title', content: meta_titulo },
                            { name: 'og:description', content: meta_descripcion },

                            { name: 'twitter:title', content: meta_titulo },
                            { name: 'twitter:description', content: meta_descripcion },
                        ],
                    } );
        
                    this.$meta().refresh();

                    //parametros_route
                    if( this.generales_sitio_web['datos_sitio_web'].hasOwnProperty('jivochat_widget_id') && this.generales_sitio_web['datos_sitio_web']['jivochat_widget_id']!='' ) {
                        this.$route.params.jivochat_widget_id = this.generales_sitio_web['datos_sitio_web']['jivochat_widget_id'];
                    }
                    //parametros_route
                },

                datos_scroll: function () {
                    if(this.iniciar_scroll_iniciar) {
                        this.$nextTick( () => {
                            this.iniciar_scroll();
                        });
                    }
                },
                  
            },

            methods: {
                m_idioma_traer_idioma_actual: async function () {
                    var id_idioma = this.chg_idioma_app;
          
                    console.log('(f) m_idioma_traer_idioma_actual (1):', this.chg_idioma_app);
          
                    await this.$http.get(this.dominio_apis + `/api/general/idioma/idioma-actual`, {} ).then(
                        response => {
                            //debugger;
                            if ( response.body.estado && response.body.id_idioma>0 ) {
                                //ok
                                this.chg_idioma_app = parseInt(response.body.id_idioma);

                                //this.generales_sitio_web = {
                                //    'id_idioma': this.chg_idioma_app,
                                //    'es_movil': response.body.es_movil,
                                //    'datos_sitio_web': response.body.datos_sitio_web,
                                //};

                                //debugger;
                                //cambio_problemas:reactividad
                                this.generales_sitio_web['id_idioma'] = this.chg_idioma_app;
                                this.generales_sitio_web['es_movil'] = response.body.es_movil;
                                this.generales_sitio_web['datos_sitio_web'] = response.body.datos_sitio_web;

                                this.datos_app = this.vue_fg_clonar_objeto( this.generales_sitio_web );
                                this.$route.params.datos_app = this.vue_fg_clonar_objeto( this.generales_sitio_web );
                            } else {
                                //error respuesta
                                this.chg_idioma_app = 1; //idioma_default
                            }
                        }, response => {
                            //error html
                            this.chg_idioma_app = 1; //idioma_default
                        }
                    );

                    //cambiar_idioma_api
                    this.cambiar_idioma_app(this.chg_idioma_app);
          
                    console.log('(f) m_idioma_traer_idioma_actual (2):', this.chg_idioma_app);
          
                    //this.chg_idioma_app = id_idioma;
          
                    //return id_idioma;
                },
          
                cambiar_idioma_app: function (id_idioma_app) {
                    var m_idiomas_d = this.m_idioma_disponibles();
            
                    if( m_idiomas_d[id_idioma_app] ) {
                        this.chg_idioma_app = id_idioma_app;
                        this.id_idioma = id_idioma_app;
                        this.$route.params.id_idioma_app = id_idioma_app;

                        //cambiar_idioma_api
                        this.$http.post(this.dominio_apis + `/api/general/idioma/cambiar-idioma`, {chg_idioma: id_idioma_app}, {} ).then(
                            response => {
                                //ok
          
                                if (response && response.hasOwnProperty('body') && response.body.hasOwnProperty('estado') && response.body.estado) {
                                    //ok
                                } else {
                                    //error
                                }
                            }, response => {
                                //error html
                            }
                        );
                        //cambiar_idioma_api

                    } else {
                        console.log('Error: Cambiando idioma:', id_idioma_app, ' - ', this.id_idioma);
                    }
                    console.log('(fx) cambiar_idioma_app:', id_idioma_app, ' - ', this.id_idioma);
                },

                navegar_router: function (to, from) {
                //
                //    if (this.historico_componentes.length > 1) {
                //        this.reset_componentes(false);
                //
                //        for (let i = 0; i < this.router_lista_rutas.length; i++) {
                //            if (to.path == this.router_lista_rutas[i].path) {
                //
                //                var ejecucion = this.componentes[ this.router_lista_rutas[i].funcion_componente ].ejecucion;
                //                this.componentes[ this.router_lista_rutas[i].funcion_componente ].ejecucion = ejecucion++;
                //                this.componentes[ this.router_lista_rutas[i].funcion_componente ].ini_datos = true;
                //
                //                console.log('Url-Router:', this.router_lista_rutas[i].path, 'Component:', this.router_lista_rutas[i].component, 'Funcion:', this.router_lista_rutas[i].funcion);
                //            }
                //        }
                //    }
                //
                    console.log('(fx) navegar_router');
                },

                ejecutar_menu: function (segmento, estado) {

                    switch(segmento) {

                        case 'elt_home_base':
                            this.iniciar_componente(segmento, estado);
                        break;

                        case 'elt_home':
                            this.iniciar_componente(segmento, estado);
                        break;                 

                        default:
                            this.iniciar_componente(segmento, estado);
                    }
                },

                ver_noticia_id: function (datos) {
                    datos.componente_iniciar = 'elt_noticia_interior';
                    this.inicia_componente_noticia(datos);
                
                    console.log('(f) ver_noticia_id');
                },

                ver_noticia_amistosa: function (datos) {
                    datos.componente_iniciar = 'elt_noticia_interior_amistosa';
                    this.inicia_componente_noticia_amistosa(datos);
                
                    console.log('(f) ver_noticia_amistosa');
                },

                recuperar_datos_noticias: function (datos) {
                    this.datos_noticias = datos.datos;

                    this.datos_noticias_config_vista = datos.config_vista;

                    console.log('(f) recuperar_datos_noticias:', this.datos_noticias);
                },

                reset_componentes: function (iniciar_primero) {
                    this.ejecucion++;
                    this.componentes = {};
                    var aux_componentes = {}
          
                    for(var x=0; x<this.lista_componentes.length; x++) {
                      var estado = (x==0 && iniciar_primero) ? true : false;
          
                      Vue.set(aux_componentes, this.lista_componentes[x], {
                          'ejecucion': this.ejecucion,
                          'ini_datos': estado,
                          'id_pais': 0,
                        }
                      );
          
                      console.log('Componente:', this.lista_componentes[x]);
                    }

                    this.componentes = aux_componentes;
                    console.log('Componentes:', this.componentes);
                },

                iniciar_componente: function (componente, reset) {
                    this.iniciar_componente_interior(componente, reset, true);
                },

                iniciar_componente_historico: function (componente, reset, historico) {
                    this.iniciar_componente_interior(componente, reset, historico);
                },

                iniciar_componente_interior: function (componente, reset, historico) {
                    this.vue_fg_croll_tops();
                    console.log('(fx) iniciar_componente (1):', componente);

                    if(reset) {
                        this.reset_componentes(false);
                    }

                    if(historico) {
                        Vue.set(this.historico_componentes, this.historico_componentes.length, componente);
                    }

                    //para_router
                    let uri_datos = {};
                    //let aux_uri_datos = urlParamsTodos;
                    //let uri_datos = this.vue_fg_clonar_objeto(aux_uri_datos);

                    //debugger;
                    for (let i = 0; i < this.router_lista_rutas.length; i++) {
                        if (componente == this.router_lista_rutas[i].funcion_componente) {
                            this.$router.push({ path: this.router_lista_rutas[i].path, query: uri_datos });

                            this.$route.params.id_idioma_app = this.id_idioma;
                            this.$route.params.datos_app = this.datos_app;
                            this.$route.params.datos_noticias = this.datos_noticias;
                            this.$route.params.datos_noticias_config_vista = this.datos_noticias_config_vista;
                            this.$route.params.datos_auspicios = this.datos_auspicios;
                            this.$route.params.datos_auspicios_1a = this.datos_auspicios_1a;
                            this.$route.params.datos_auspicios_1b = this.datos_auspicios_1b;
                            this.$route.params.datos_auspicios_2a = this.datos_auspicios_2a;
                            this.$route.params.refresh_auto = this.refresh_auto;
                            console.log('Router:', this.router_lista_rutas[i].path, ' Query:', uri_datos);
                        }
                    }                    
                    //para_router
          
                    console.log('(fx) iniciar_componente_interior (2):', componente);
                },

                inicia_componente_simple: function(datos) {
                    this.vue_fg_croll_tops();
                    var componente = datos.componente_iniciar;

                    this.reset_componentes(false);
                    Vue.set(this.historico_componentes, this.historico_componentes.length, componente);

                    //para_router
                    let uri_datos = {};
                    //let aux_uri_datos = urlParamsTodos;
                    //let uri_datos = this.vue_fg_clonar_objeto(aux_uri_datos);

                    //debugger;
                    for (let i = 0; i < this.router_lista_rutas.length; i++) {
                        if (componente == this.router_lista_rutas[i].funcion_componente) {
                            this.$router.push({ path: this.router_lista_rutas[i].path, query: uri_datos });

                            this.$route.params.id_idioma_app = this.id_idioma;
                            this.$route.params.datos_app = this.datos_app;
                            this.$route.params.datos_noticias = this.datos_noticias;
                            this.$route.params.datos_noticias_config_vista = this.datos_noticias_config_vista;
                            this.$route.params.datos_auspicios = this.datos_auspicios;
                            this.$route.params.datos_auspicios_1a = this.datos_auspicios_1a;
                            this.$route.params.datos_auspicios_1b = this.datos_auspicios_1b;
                            this.$route.params.datos_auspicios_2a = this.datos_auspicios_2a;
                            this.$route.params.refresh_auto = this.refresh_auto;
                            console.log('Router:', this.router_lista_rutas[i].path, ' Query:', uri_datos);
                        }
                    }
                    //para_router
                    
                    console.log('(fx) inicia_componente_simple');
                },

                inicia_componente_noticia: function(datos) {
                    this.vue_fg_croll_tops();
                    var componente = datos.componente_iniciar;

                    this.reset_componentes(false);
                    Vue.set(this.historico_componentes, this.historico_componentes.length, componente);

                    this.id_articulo = parseInt(datos.valor);

                    //para_router
                    //let uri_datos = {};
                    let aux_uri_datos = urlParamsTodos;

                    if (datos.valor > 0) {
                        aux_uri_datos.id_articulo = this.id_articulo;
                    }
                    let uri_datos = this.vue_fg_clonar_objeto(aux_uri_datos);

                    //debugger;
                    for (let i = 0; i < this.router_lista_rutas.length; i++) {
                        if (componente == this.router_lista_rutas[i].funcion_componente) {
                            this.$router.push({ path: this.router_lista_rutas[i].path, query: uri_datos });

                            this.$route.params.id_idioma_app = this.id_idioma;
                            this.$route.params.datos_app = this.datos_app;
                            this.$route.params.datos_noticias = this.datos_noticias;
                            this.$route.params.datos_noticias_config_vista = this.datos_noticias_config_vista;
                            this.$route.params.datos_auspicios = this.datos_auspicios;
                            this.$route.params.datos_auspicios_1a = this.datos_auspicios_1a;
                            this.$route.params.datos_auspicios_1b = this.datos_auspicios_1b;
                            this.$route.params.datos_auspicios_2a = this.datos_auspicios_2a;
                            this.$route.params.refresh_auto = this.refresh_auto;
                            console.log('Router:', this.router_lista_rutas[i].path, ' Query:', uri_datos);
                        }
                    }
                    //para_router
                    
                    console.log('(fx) inicia_componente_noticia');
                },

                inicia_componente_noticia_amistosa: async function(datos) {
                    this.vue_fg_croll_tops();
                    var componente = datos.componente_iniciar;

                    this.reset_componentes(false);
                    Vue.set(this.historico_componentes, this.historico_componentes.length, componente);

                    this.id_articulo = parseInt(datos.valor);
                    let titulo = this.vue_fg_PreparaTituloNoticia(datos.titulo, false, false, false, false);

                    //para_router
                    let uri_datos = {};
                    //let aux_uri_datos = urlParamsTodos;

                    //if (datos.valor > 0) {
                    //    aux_uri_datos.id_articulo = this.id_articulo;
                    //}
                    //let uri_datos = this.vue_fg_clonar_objeto(aux_uri_datos);

                    //debugger;
                    for (let i = 0; i < this.router_lista_rutas.length; i++) {
                        if (componente == this.router_lista_rutas[i].funcion_componente) {
                            
                            this.$route.params.id_idioma_app = this.id_idioma;
                            this.$route.params.datos_app = this.datos_app;
                            this.$route.params.datos_noticias = this.datos_noticias;
                            this.$route.params.datos_noticias_config_vista = this.datos_noticias_config_vista;
                            this.$route.params.datos_auspicios = this.datos_auspicios;
                            this.$route.params.datos_auspicios_1a = this.datos_auspicios_1a;
                            this.$route.params.datos_auspicios_1b = this.datos_auspicios_1b;
                            this.$route.params.datos_auspicios_2a = this.datos_auspicios_2a;

                            //id_articulo
                            this.$route.params.id_articulo = this.id_articulo;
                            this.$route.params.titulo = titulo;

                            let params = parametrosNoticias(this.$route);
                            this.$router.push({ path: `/noticias/${this.id_articulo}/${titulo}`, query: uri_datos, props: params });
                            
                            console.log('Router:', this.router_lista_rutas[i].path, ' Query:', uri_datos);
                        }
                    }
                    //para_router
                    
                    console.log('(fx) inicia_componente_noticia_amistosa');
                },

                //nuevos_eventos
                inicia_componente_carrera_sm: function (datos) {
                    this.vue_fg_croll_tops();
                    var componente = datos.componente_iniciar;

                    this.reset_componentes(false);
                    Vue.set(this.historico_componentes, this.historico_componentes.length, componente);

                    this.id_carrera = parseInt(datos.valor);

                    //para_router
                    //let uri_datos = {};
                    let aux_uri_datos = urlParamsTodos;

                    if (datos.valor > 0) {
                        aux_uri_datos.id_carrera = this.id_carrera;
                    }
                    let uri_datos = this.vue_fg_clonar_objeto(aux_uri_datos);

                    //debugger;
                    for (let i = 0; i < this.router_lista_rutas.length; i++) {
                        if (componente == this.router_lista_rutas[i].funcion_componente) {
                            this.$router.push({ path: this.router_lista_rutas[i].path, query: uri_datos });

                            this.$route.params.id_idioma_app = this.id_idioma;
                            this.$route.params.datos_app = this.datos_app;
                            this.$route.params.datos_noticias = this.datos_noticias;
                            this.$route.params.datos_noticias_config_vista = this.datos_noticias_config_vista;
                            this.$route.params.datos_auspicios = this.datos_auspicios;
                            this.$route.params.datos_auspicios_1a = this.datos_auspicios_1a;
                            this.$route.params.datos_auspicios_1b = this.datos_auspicios_1b;
                            this.$route.params.datos_auspicios_2a = this.datos_auspicios_2a;
                            this.$route.params.refresh_auto = this.refresh_auto;
                            console.log('Router:', this.router_lista_rutas[i].path, ' Query:', uri_datos);
                        }
                    }
                    //para_router
                },

                inicia_componente_reunion_sm: function (datos) {
                    this.vue_fg_croll_tops();
                    var componente = datos.componente_iniciar;

                    this.reset_componentes(false);
                    Vue.set(this.historico_componentes, this.historico_componentes.length, componente);

                    this.id_reunion = parseInt(datos.valor);

                    //para_router
                    //let uri_datos = {};
                    let aux_uri_datos = urlParamsTodos;

                    if (datos.valor > 0) {
                        aux_uri_datos.id_reunion = this.id_reunion;
                    }
                    let uri_datos = this.vue_fg_clonar_objeto(aux_uri_datos);

                    //debugger;
                    for (let i = 0; i < this.router_lista_rutas.length; i++) {
                        if (componente == this.router_lista_rutas[i].funcion_componente) {
                            this.$router.push({ path: this.router_lista_rutas[i].path, query: uri_datos });

                            this.$route.params.id_idioma_app = this.id_idioma;
                            this.$route.params.datos_app = this.datos_app;
                            this.$route.params.datos_noticias = this.datos_noticias;
                            this.$route.params.datos_noticias_config_vista = this.datos_noticias_config_vista;
                            this.$route.params.datos_auspicios = this.datos_auspicios;
                            this.$route.params.datos_auspicios_1a = this.datos_auspicios_1a;
                            this.$route.params.datos_auspicios_1b = this.datos_auspicios_1b;
                            this.$route.params.datos_auspicios_2a = this.datos_auspicios_2a;
                            this.$route.params.refresh_auto = this.refresh_auto;
                            console.log('Router:', this.router_lista_rutas[i].path, ' Query:', uri_datos);
                        }
                    }
                    //para_router
                },

                inicia_componente_pais_sm: function (datos) {
                    this.vue_fg_croll_tops();
                    var componente = datos.componente_iniciar;

                    this.reset_componentes(false);
                    Vue.set(this.historico_componentes, this.historico_componentes.length, componente);

                    this.id_pais = parseInt(datos.valor);

                    //para_router
                    //let uri_datos = {};
                    let aux_uri_datos = urlParamsTodos;

                    if (datos.valor > 0) {
                        aux_uri_datos.id_pais = this.id_pais;
                    }
                    let uri_datos = this.vue_fg_clonar_objeto(aux_uri_datos);

                    //debugger;
                    for (let i = 0; i < this.router_lista_rutas.length; i++) {
                        if (componente == this.router_lista_rutas[i].funcion_componente) {
                            this.$router.push({ path: this.router_lista_rutas[i].path, query: uri_datos });

                            this.$route.params.id_idioma_app = this.id_idioma;
                            this.$route.params.datos_app = this.datos_app;
                            this.$route.params.datos_noticias = this.datos_noticias;
                            this.$route.params.datos_noticias_config_vista = this.datos_noticias_config_vista;
                            this.$route.params.datos_auspicios = this.datos_auspicios;
                            this.$route.params.datos_auspicios_1a = this.datos_auspicios_1a;
                            this.$route.params.datos_auspicios_1b = this.datos_auspicios_1b;
                            this.$route.params.datos_auspicios_2a = this.datos_auspicios_2a;

                            console.log('Router:', this.router_lista_rutas[i].path, ' Query:', uri_datos);
                        }
                    }
                    //para_router
                },

                inicia_componente_ficha_ejemplar: function (datos) {
                    this.vue_fg_croll_tops();
                    var componente = datos.componente_iniciar;

                    this.reset_componentes(false);
                    Vue.set(this.historico_componentes, this.historico_componentes.length, componente);

                    this.id_ejemplar = parseInt(datos.valor);

                    //para_router
                    //let uri_datos = {};
                    let aux_uri_datos = urlParamsTodos;

                    if (datos.valor > 0) {
                        aux_uri_datos.id_ejemplar = this.id_ejemplar;
                    }
                    let uri_datos = this.vue_fg_clonar_objeto(aux_uri_datos);

                    //debugger;
                    for (let i = 0; i < this.router_lista_rutas.length; i++) {
                        if (componente == this.router_lista_rutas[i].funcion_componente) {
                            this.$router.push({ path: this.router_lista_rutas[i].path, query: uri_datos });

                            this.$route.params.id_idioma_app = this.id_idioma;
                            this.$route.params.datos_app = this.datos_app;
                            this.$route.params.datos_noticias = this.datos_noticias;
                            this.$route.params.datos_noticias_config_vista = this.datos_noticias_config_vista;
                            this.$route.params.datos_auspicios = this.datos_auspicios;
                            this.$route.params.datos_auspicios_1a = this.datos_auspicios_1a;
                            this.$route.params.datos_auspicios_1b = this.datos_auspicios_1b;
                            this.$route.params.datos_auspicios_2a = this.datos_auspicios_2a;
                            this.$route.params.refresh_auto = this.refresh_auto;
                            console.log('Router:', this.router_lista_rutas[i].path, ' Query:', uri_datos);
                        }
                    }
                    //para_router
                },

                inicia_componente_reunion_fecha_sm: function (datos) {
                    this.vue_fg_croll_tops();
                    var componente = datos.componente_iniciar;

                    this.reset_componentes(false);
                    Vue.set(this.historico_componentes, this.historico_componentes.length, componente);

                    this.fecha_noticias = datos.valor;

                    //para_router
                    //let uri_datos = {};
                    let aux_uri_datos = urlParamsTodos;

                    if (datos.valor != '') {
                        aux_uri_datos.fecha = this.fecha_noticias;
                    }
                    let uri_datos = this.vue_fg_clonar_objeto(aux_uri_datos);

                    //debugger;
                    for (let i = 0; i < this.router_lista_rutas.length; i++) {
                        if (componente == this.router_lista_rutas[i].funcion_componente) {
                            this.$router.push({ path: this.router_lista_rutas[i].path, query: uri_datos });

                            this.$route.params.id_idioma_app = this.id_idioma;
                            this.$route.params.datos_app = this.datos_app;
                            this.$route.params.datos_noticias = this.datos_noticias;
                            this.$route.params.datos_noticias_config_vista = this.datos_noticias_config_vista;
                            this.$route.params.datos_auspicios = this.datos_auspicios;
                            this.$route.params.datos_auspicios_1a = this.datos_auspicios_1a;
                            this.$route.params.datos_auspicios_1b = this.datos_auspicios_1b;
                            this.$route.params.datos_auspicios_2a = this.datos_auspicios_2a;
                            this.$route.params.refresh_auto = this.refresh_auto;
                            console.log('Router:', this.router_lista_rutas[i].path, ' Query:', uri_datos);
                        }
                    }
                    //para_router
                },

                recuperar_datos_auspicios: function (datos) {

                    if( datos.posicion_bannner=='banner-home-principal' ) {
                        this.datos_auspicios = datos.datos;
                    }
                    if( datos.posicion_bannner=='banner-1a' ) {
                        this.datos_auspicios_1a = datos.datos;
                    }
                    if( datos.posicion_bannner=='banner-1b' ) {
                        this.datos_auspicios_1b = datos.datos;
                    }
                    if( datos.posicion_bannner=='banner-2a' ) {
                        this.datos_auspicios_2a = datos.datos;
                    }
                    
                    console.log('(f) recuperar_datos_auspicios:', datos);
                },

                recuperar_datos_ciclo_hipodromo: function (datos) {
                    this.datos_ciclo_hipodromo = datos.datos;
                    console.log('(f) recuperar_datos_ciclo_hipodromo:', this.datos_ciclo_hipodromo);
                },

                recuperar_datos_scroll: function (datos) {
                    this.datos_scroll = datos.datos;
                    console.log('(f) recuperar_datos_scroll:', this.datos_scroll);
                },

                iniciar_scroll: function () {

                    //$(document).ready(function() {

                        var ticker = $('#ticker'),
                        container = ticker.find('ul'),
                        tickWidth = 1,
                        speed = 0.05, // Control pace
                        distance,
                        timing;
                    
                        container.find("li").each(function(i) {
                            tickWidth += $(this, i).outerWidth(true);
                        });
                    
                        distance = tickWidth + (ticker.outerWidth() - $('#gameLabel').outerWidth());
                        timing = distance / speed;
                    
                        function scrollIt(dist, dur) {
                            container.animate({
                            left: '-=' + dist
                            }, dur, 'linear', function() {
                                container.css({
                                    'left': ticker.outerWidth()
                                });
                                scrollIt(distance, timing);
                            });
                        }
                    
                        scrollIt(distance, timing);
                    
                        ticker.hover(function() {
                            container.stop();
                            }, function() {
                            var offset = container.offset(),
                            newPosition = offset.left + tickWidth,
                            newTime = newPosition / speed;
                            scrollIt(newPosition, newTime);
                        });

                        console.log('Scroll', ticker.outerWidth(), distance, timing, speed );

                        console.log('(f) iniciar_scroll:', this.datos_scroll);
                    //});
                },
            },

            template: templateVue,
        });
    
    };
};