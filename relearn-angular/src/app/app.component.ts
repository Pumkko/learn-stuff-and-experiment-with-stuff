import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RickAndMortyService } from './rickAndMorty/rick-and-morty.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'relearn-angular';
  
  private readonly _rickAndMortyService = inject(RickAndMortyService);

  get rickAndMortyCharactersQuery() {
    return this._rickAndMortyService.query;
  }

}
