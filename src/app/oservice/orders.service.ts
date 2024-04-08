import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
    getorders(){
      return this.http.get("https://rmsadmin-backend-2.onrender.com/api/orders")
  }
}
