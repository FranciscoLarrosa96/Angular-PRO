import { ApplicationRef, Component, effect, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonCard } from "../pokemon-card/pokemon-card";
import { timeout } from 'rxjs/internal/operators/timeout';
import { PokemonsService } from '../../services/pokemons';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss'
})
export class PokemonList implements OnInit {
   private _pokemonsService = inject(PokemonsService);
   isLoading = signal<boolean>(false);
   public pokemonsList = input.required<Pokemon[]>();

   checkLoading = effect(() => {
    this.isLoading.set(this._pokemonsService.isLoading());
   });
   

  // private appRef = inject(ApplicationRef);

  // private $appState = this.appRef.isStable
  // .subscribe({
  //   next : (isStable) => {
  //     console.log(';isStable', isStable);
      
  //   }
  // })
  ngOnInit(): void {

  }


  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  //   this.$appState.unsubscribe();
  // }
}
