import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { Observable } from "rxjs";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  fetchData(action = "", data?: Product): Observable<Product[]> {
    return this.http.jsonp<Product[]>(
      `https://demos.telerik.com/kendo-ui/service/Products/${action}?${this.serializeModels(data)}`,
      "callback"
    );
  }

  private serializeModels(data?: Product): string {
    return data ? `&models=${JSON.stringify([data])}` : "";
  }
}
