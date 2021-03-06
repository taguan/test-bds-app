/**
 * Card API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { Card } from '../model/card';



@Injectable()
export class ApiService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();

    constructor(protected httpClient: HttpClient) {

    }




    /**
     * create a card
     * create a card on the server. The server is responsible for assigning a new ID
     * @param body the card to create
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createCard(body: Card, observe?: 'body', reportProgress?: boolean): Observable<Card>;
    public createCard(body: Card, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Card>>;
    public createCard(body: Card, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Card>>;
    public createCard(body: Card, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createCard.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.request<Card>('post',`${this.basePath}/cards`,
            {
                body: body,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * get all cards
     * retrieves all cards from the server
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCards(observe?: 'body', reportProgress?: boolean): Observable<Array<Card>>;
    public getCards(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Card>>>;
    public getCards(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Card>>>;
    public getCards(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Card>>('get',`${this.basePath}/cards`,
            {
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
