import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    getOwner() { // http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=252490&key=AEF42CD321DA8F79C2A1476D921EF97D&steamid=76561198355761491
      return this.http.get('https://jsonplaceholder.typicode.com/users/1')
    }
}
