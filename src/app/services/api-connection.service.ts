import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiConnectionService<T> {

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Expose-Headers': 'allow',
            'access-token': localStorage.getItem('access-token'),
            'client': localStorage.getItem('client'),
            'uid': localStorage.getItem('uid'),
        })
    };

    constructor(
        private http: HttpClient
    ) { }

    getHttpOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Expose-Headers': 'allow',
                'access-token': localStorage.getItem('access-token'),
                'client': localStorage.getItem('client'),
                'uid': localStorage.getItem('uid'),
            })
        };
    }

    get(path: string): Observable<T> {
        return this.http.get<T>(path, this.getHttpOptions());
    }

    put(path: string, data: T): Observable<T> {
        return this.http.put<T>(path, data, this.getHttpOptions());
    }

    post(path: string, data: T): Observable<T> {
        return this.http.post<T>(path, data, this.getHttpOptions());
    }

    delete(path: string, data: T): Observable<T> {
        return this.http.delete<T>(path, data);
    }

    signIn(path: string, data: T): Observable<HttpResponse<any>> {
        return this.http.post(path, data, {
            observe: 'response'
        });
    }
}
