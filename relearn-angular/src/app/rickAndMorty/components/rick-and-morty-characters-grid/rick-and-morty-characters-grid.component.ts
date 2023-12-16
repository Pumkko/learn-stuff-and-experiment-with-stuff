import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RickAndMortyService } from '../../rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty-characters-grid',
  standalone: true,
  imports: [],
  templateUrl: './rick-and-morty-characters-grid.component.html',
  providers: [RickAndMortyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RickAndMortyCharactersGridComponent {

  private readonly _rickAndMortyService = inject(RickAndMortyService);

  get rickAndMortyCharactersQuery() {
    return this._rickAndMortyService.query;
  }

}
