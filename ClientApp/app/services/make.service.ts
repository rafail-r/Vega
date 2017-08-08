import { Injectable, Injector, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MakeService {
    constructor(private http: Http, @Inject('ORIGIN_URL') private originUrl: string) {
    }

    getMakes() {
        return this.http.get(this.originUrl + '/api/makes')
            .map(res => res.json());
    }
}
