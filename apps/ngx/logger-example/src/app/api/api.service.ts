import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root'})
export class ApiService {
  constructor(private readonly _httpClient: HttpClient) {}


  get(url: string){
    return this._httpClient.get<any>(environment.apiUrl + '/' + url)
  }


  post(url: string, body: unknown){
    return this._httpClient.post<any>(environment.apiUrl + '/' + url, body)
  }
}
