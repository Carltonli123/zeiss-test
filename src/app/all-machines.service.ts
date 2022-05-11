import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Machine } from './machine'

@Injectable({
  providedIn: 'root'
})
export class AllMachinesService {

  targetURL = 'http://' + environment.hostname + '/api/v1/machines';

  constructor(private http: HttpClient) { }

  showAllMachines(){
    return this.http.get(`${this.targetURL}`);
  }
}
