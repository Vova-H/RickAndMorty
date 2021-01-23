import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from '../components/characters/characters.component';
import { EpisodesComponent } from '../components/episodes/episodes.component';
import { LocationsComponent } from '../components/locations/locations.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  },



  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'episodes',
    component: EpisodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
