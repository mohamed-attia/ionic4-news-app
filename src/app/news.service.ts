import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;
  constructor(private httypClicnt: HttpClient) { }

  getData( url: string ){
    return this.httypClicnt.get(`${API_URL}/${url}apikey=${API_KEY}`);
  }
}
