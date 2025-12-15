import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'pokemon/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const pokemonIds = Array.from({ length: 151 }, (_, i) => ({
        id: `${i + 1}`,
      }));
      return pokemonIds;
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
