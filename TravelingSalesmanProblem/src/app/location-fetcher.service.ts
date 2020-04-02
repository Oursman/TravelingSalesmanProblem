import { Injectable } from '@angular/core';
import {GeoPoint} from "./interfaces/geopoint";
import {HttpClient} from "@angular/common/http";

export interface GeoPointsResponse {
  success: boolean;
  message?: string; // present in case of failure
  results?: GeoPoint[]; // present in case of success
}

@Injectable({
  providedIn: 'root'
})
export class LocationFetcherService {
  static readonly SERVER_URL = "http://localhost:8888";

  constructor(private http: HttpClient) { }

  async fetchGeoPoints(prefix: string, limit: number = 100): Promise<GeoPointsResponse> {
    let url = `${LocationFetcherService.SERVER_URL}/searchByPrefix/${encodeURIComponent(prefix)}?limit=${limit}`;
    try {
      return await this.http.get<GeoPointsResponse>(url).toPromise();
    } catch (error) {
      return {"success": false, "message": error.message};
    }
  }
}
