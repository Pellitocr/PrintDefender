import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { collection } from 'src/app/models/collection.interface'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getCollections(){
    
    const endpoint = '/collection/getCollections.php';
    return this.http.get<any>(environment.apiUrl + endpoint);
  }
}
