import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) {
   }

  formdata : PaymentDetail = new PaymentDetail();
    readonly baseURL = "http://localhost:27290/api/PaymentDetails"
    list : any
    refreshList(){
      this.http.get(this.baseURL)
      .toPromise()
      .then(res=>this.list = res as PaymentDetail);
    }

  postPaymentDetail(){
    return this.http.post(this.baseURL,this.formdata);
  }
  putPaymentDetail(){
    return this.http.put(this.baseURL,this.formdata);
  }
}
