import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  private title = inject(Title);
  private meta = inject(Meta);
  ngOnInit(): void {
    // Seteo el título de la página
    this.title.setTitle('Contact - Pokémon SSR');
    // Seteo las metatags de la página
    this.meta.updateTag({ name: 'description', content: 'Esta es la página de contacto de mi proyecto pokemon-ssr hecho con Angular 20' });
    this.meta.updateTag({ name: 'og:title', content: 'Esta es la pagina de contacto de pokemon-ssr' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, vite, pokemon, ssr, angular 20' });
  }
}