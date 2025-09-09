import { ApplicationRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PokemonCard } from "../pokemon-card/pokemon-card";
import { timeout } from 'rxjs/internal/operators/timeout';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss'
})
export class PokemonList implements OnInit {
  isLoading = signal<boolean>(true);
  // private appRef = inject(ApplicationRef);

  // private $appState = this.appRef.isStable
  // .subscribe({
  //   next : (isStable) => {
  //     console.log(';isStable', isStable);
      
  //   }
  // })
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 7000);
  }


  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  //   this.$appState.unsubscribe();
  // }
}
