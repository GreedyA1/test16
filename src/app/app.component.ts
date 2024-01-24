import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test16';

  http = inject(HttpClient)

  $api = this.http.get('/api/',{responseType: 'text'})
  $apiShmaybe = this.http.get('/api/shmaybe', {responseType: 'text'})
}
