import { Component, OnInit, signal } from '@angular/core';
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
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 7000);
  }
}
