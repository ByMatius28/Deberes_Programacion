import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonByIdOrName(idOrName: string): Observable<any> {
    const url = `${this.baseUrl}/pokemon/${idOrName}`;
    return this.http.get<any>(url);
  }
}
