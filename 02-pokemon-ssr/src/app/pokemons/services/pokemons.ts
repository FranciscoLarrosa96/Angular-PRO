import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { finalize, map, Observable, tap } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokeAPIResponse } from '../interfaces/pokemon-api.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private _http = inject(HttpClient);
  isLoading = signal<boolean>(false);

  public loadPokemons(page: number): Observable<Pokemon[]> {
    if (page < 0) page = 0;

    if (page !== 0) {
      --page;
    }


    return this._http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}&limit=20`)
      .pipe(
        map(res => {
          this.isLoading.set(true);
          const simplePokemons: Pokemon[] = res.results.map(poke => ({
            id: poke.url.split('/').at(-2)!,
            name: poke.name,
          }))
          return simplePokemons;
        }),
        tap(
          
        ),
        finalize(() => {
          this.isLoading.set(false);
        })
      )
  }
}
