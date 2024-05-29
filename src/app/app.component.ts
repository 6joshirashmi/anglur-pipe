import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyTitleCasePipe } from './title-case.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyTitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'anglur-pipe';

}
