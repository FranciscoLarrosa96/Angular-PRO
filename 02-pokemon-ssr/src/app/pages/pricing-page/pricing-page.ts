import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.scss'
})
export class PricingPage {

  
  private title = inject(Title);
  private meta = inject(Meta);
  ngOnInit(): void {
    // Seteo el título de la página
    this.title.setTitle('Pricing - Pokémon SSR');
    // Seteo las metatags de la página
    this.meta.updateTag({ name: 'description', content: 'Esta es la página de precios de mi proyecto pokemon-ssr hecho con Angular 20' });
    this.meta.updateTag({ name: 'og:title', content: 'Esta es la pagina de precios de pokemon-ssr' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, vite, pokemon, ssr, angular 20' });
  }

}