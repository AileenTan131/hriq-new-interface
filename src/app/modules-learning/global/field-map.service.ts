import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class fieldMapService01 extends BehaviorSubject<any> {
  public loading = false;
  private BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/';
  private tableName = 'Categories';

  constructor(private http: HttpClient) {
    super(null);
  }

  public query(): void {
    this.fetch(this.tableName)
      .subscribe(x => super.next(x));
  }

  private fetch(tableName: string): any {
    const queryStr = `$skip=0&$count=true`;
    this.loading = true;
    return this.http
      .get(`${this.BASE_URL}${tableName}?${queryStr}`)
      .pipe(
        map(response => response['value']),
        tap(() => this.loading = false)
      );
  }
}

