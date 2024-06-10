import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../pokemons.service';  // Asegúrate de que la ruta sea correcta
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NzCardModule, FormsModule, NzInputModule, NzButtonModule],
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemon: any;
  searchTerm: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  searchPokemon(): void {
    if (this.searchTerm.trim() !== '') {
      this.pokemonService.getPokemonByIdOrName(this.searchTerm.toLowerCase())
        .subscribe((data: any) => {
          this.pokemon = data;
        }, (error) => {
          console.error('Error fetching Pokémon:', error);
          this.pokemon = null; // Clear previous results if not found
        });
    } else {
      this.pokemon = null; // Clear the current Pokémon if search term is empty
    }
  }
}