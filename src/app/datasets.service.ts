import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dataset } from './dataset';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(private messageService: MessageService, private http: HttpClient) { }
  datasets: Observable<Dataset[]> = new Observable();

  getDatasets(): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    return this.http.get('https://oncoscape.v3.sttrcancer.org/public/datasets', {headers: new HttpHeaders(headerDict)});
  }


}
