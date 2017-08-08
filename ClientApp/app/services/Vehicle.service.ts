import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleService {
    constructor(private http: Http, @Inject('ORIGIN_URL') private originUrl: string) {
    }

    getMakes() {
        return this.http.get(this.originUrl + '/api/makes')
            .map(res => res.json());
    }

    getFeatures() {
        return this.http.get(this.originUrl + '/api/features').map(res => res.json());
    }
}
