import { BaseService } from "./base.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class StocksService extends BaseService {

    constructor(http: HttpClient) {
        super(http);
    }

    getHistoricalPrice(label: string, from: Date, to: Date): Observable<any> {
        return this.http.get<any>(
            `${this.baseUri}api/v3/historical-price-full/${label}?from=${from.toISOString()}&to=${to.toISOString()}`);
    }
}