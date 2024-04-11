import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllCategory() {
    console.log(Constant.API_ENDPOINT + Constant.METHODS.GET_ALL_CATEGORY)
    return this.http.get(Constant.API_ENDPOINT + Constant.METHODS.GET_ALL_CATEGORY);
  };
  
}
