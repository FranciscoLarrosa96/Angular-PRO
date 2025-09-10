import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { finalize, map, Observable, tap } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokeAPIResponse } from '../interfaces/pokemon-api.interface';
import { PokemonDetails } from '../interfaces/pokemonId.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private _http = inject(HttpClient);
  isLoading = signal<boolean>(false);
  public pokemons = signal<Pokemon[]>([]);
  public loadPokemons(page: number): Observable<Pokemon[]> {
    if (page < 0) page = 0;
    if (page !== 0) {
      --page;
    }


    return this._http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}&limit=20`)
      .pipe(
        map(res => {
          const simplePokemons: Pokemon[] = res.results.map(poke => ({
            id: poke.url.split('/').at(-2)!,
            name: poke.name,
          }))
          return simplePokemons;
        }),
        tap(
          (pokemons) => this.pokemons.set(pokemons)
        )
      )
  }

  public loadPokemonById(id: string): Observable<PokemonDetails> {
    return this._http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
