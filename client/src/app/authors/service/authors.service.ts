import {inject, Injectable} from '@angular/core';
import {Author} from '../model/author';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private http: HttpClient = inject(HttpClient);

  public getAuthor(id: string): Observable<any> {
    // @GetMapping("/authors/{id}")
    return this.http.get<any>(Url + 'authors' + id).pipe(
      map(response => response._embedded ? response._embedded.authors : undefined )
    );
  }
}
