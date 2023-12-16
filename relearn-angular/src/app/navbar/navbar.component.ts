import { Component } from '@angular/core';
import { LanguagePickerComponent } from './language-picker/language-picker.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LanguagePickerComponent
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
