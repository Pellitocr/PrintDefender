import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private http: HttpClient) { }

  public getCollections(){
    
    const endpoint = '/collection/getCollections.php';
    return this.http.get<any>(environment.apiUrl + endpoint);
  }
}
