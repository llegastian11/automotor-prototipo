/**
 * GitHub Pages sirve el sitio bajo /automotor-prototipo/ (astro.config `base`).
 * Astro no reescribe automáticamente los href/src escritos como rutas
 * absolutas dentro del markup — hay que anteponer BASE_URL a mano en todo
 * enlace o asset interno. Este helper centraliza esa regla.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return base + path.replace(/^\//, '');
}
