import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  ngOnInit(): void {
    // Seteo el título de la página
    this.title.setTitle('About - Pokémon SSR');
    // Seteo las metatags de la página
    this.meta.updateTag({ name: 'description', content: 'Esta es la página about de mi proyecto pokemon-ssr hecho con Angular 20' });
    this.meta.updateTag({ name: 'og:title', content: 'Esta es la pagina about de pokemon-ssr' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, vite, pokemon, ssr, angular 20' });
  }

}
