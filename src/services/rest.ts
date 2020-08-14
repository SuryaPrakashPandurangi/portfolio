import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestApi {
  constructor(private http: HttpClient) {
    providedIn: 'root'
  }

  url: string = "https://samplegeturl.com";

  public getSampleData(){
    return this.http.get(this.url);
  }

}