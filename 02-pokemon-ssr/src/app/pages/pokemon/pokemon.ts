import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { PokemonDetails } from '../../pokemons/interfaces/pokemonId.interface';
import { PokemonsService } from '../../pokemons/services/pokemons';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.scss',
})
export class Pokemon implements OnInit {
  public pokemon = signal<PokemonDetails | null>(null);
  private pokemonSvc = inject(PokemonsService);
  private title = inject(Title);
  private meta = inject(Meta);
  idPokemon = input<string | undefined>('', { alias: 'id' });
  ngOnInit(): void {
    this.pokemonSvc
      .loadPokemonById(this.idPokemon()!)
      .pipe(
        tap((pokemon) => {
          const pageTitle = `${pokemon.id} - ${pokemon.name}`;
          const pageDescription = `Pagina del pokemon ${pokemon.name}`;
          this.title.setTitle(pageTitle);
          this.meta.updateTag({
            name: 'description',
            content: pageDescription,
          });
          this.meta.updateTag({ name: 'og:title', content: pageTitle });
          this.meta.updateTag({
            name: 'og:description',
            content: pageDescription,
          });
          this.meta.updateTag({
            name: 'og:image',
            content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`,
          });
        }),
      )
      .subscribe({
        next: (pokemon) => {
          this.pokemon.set(pokemon);
        },
        error: () => {
          this.pokemon.set(null);
        },
      });
  }
}
