import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("user-key", "3f61963b3c7bd5dc68215669e32fedc2");

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private url = "https://developers.zomato.com/api/v2.1/";

  constructor(public http: HttpClient) { }

   //get request for user details
   public getApiCall = (restautrant_id: number) => {
    let myResponse = this.http.get(this.url + "reviews?res_id=" + restautrant_id + "&start=0&count=100", { headers })
    return myResponse;
  }//end request for user details
  
}
