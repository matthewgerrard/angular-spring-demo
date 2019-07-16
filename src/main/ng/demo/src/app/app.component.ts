import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';

  private response: Observable<Object>;

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.response = this.http.get('/api/hello');
  }
}
