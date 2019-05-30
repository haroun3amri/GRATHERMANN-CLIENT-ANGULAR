import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject, throwError as observableThrowError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class StatService {

    public _statUrl: string = "https://localhost:44376/api/stat"

    constructor(private _http: HttpClient) {
    }

  public getStats(): Observable<Object[]> {
    return this._http.get(this._statUrl).pipe(
    map(this.extractData.bind(this)),
    catchError(this.handleError)) as Observable<Object[]>;
}

private extractData(response: Response) {
    return response || {};
}

private handleError(error: Response) {
    console.log(error);
    return observableThrowError(error || 'Server error');
}

}