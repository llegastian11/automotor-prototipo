/**
 * Mapa de las antiguas rutas por hash (#/plaquealo) del prototipo SPA hacia
 * las rutas HTML reales de Astro. Se usa solo en el cliente, en BaseLayout,
 * para que un enlace #/ruta guardado antes de la migración siga llevando al
 * lugar correcto.
 */
export const legacyRouteMap: Record<string, string> = {
  inicio: '/',
  home: '/',
  'consulta-vehicular': '/consulta-vehicular/',
  fuentes: '/consulta-vehicular/',
  plaquealo: '/plaquealo/',
  consulta: '/plaquealo/',
  reporte: '/plaquealo/',
  planes: '/planes/',
  migarage: '/migarage/',
  tive: '/tive/',
  tasacion: '/tasacion/',
  vehiculos: '/vehiculos/',
  blog: '/blog/',
  'servicios/soat': '/servicios/soat/',
  'servicios/seguro-vehicular': '/servicios/seguro-vehicular/',
  'servicios/gps': '/servicios/gps/',
  'legal/terminos': '/legal/terminos/',
  'legal/privacidad': '/legal/privacidad/',
  'legal/cookies': '/legal/cookies/',
};
