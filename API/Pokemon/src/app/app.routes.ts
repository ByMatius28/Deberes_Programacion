import { Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pokemons' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
];
