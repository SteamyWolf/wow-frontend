import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TokenData } from '../models/tokenData';
import { Character } from '../models/character';
import { WowAccountProfile } from '../models/wowAccountProfile';

@Injectable({
    providedIn: 'root'
})
export class BlizzardApiService {

    private token: TokenData | null = null;

    constructor(private http: HttpClient) { }

    public setToken(token: string) {
        const expiryTime = new Date(Date.now() + (60 * 60 * 24 * 1000));
        const tokenData = {
            value: token,
            expiry: expiryTime
        }
        localStorage.setItem('userAccessToken', JSON.stringify(tokenData));
    }

    public getToken(): TokenData | null {
        const tokenData = localStorage.getItem('userAccessToken');
        if (tokenData) {
            this.token = JSON.parse(tokenData);
            return this.token;
        } else {
            return null;
        }
    }

    public setUserAccessToken(accessToken: string): Observable<{value: string, expiry: Date}> {
        return this.http.post<{value: string, expiry: Date}>('http://localhost:8080/oauth2/setUserAccessToken', accessToken);

    }

    public getWowAccountProfile(): Observable<WowAccountProfile> {
        return this.http.get<WowAccountProfile>('http://localhost:8080/api/blizzard/wowAccountProfile');
    }

    public getCharacterDataBatch(urls: string[]): Observable<Character[]> {
        return this.http.post<Character[]>('http://localhost:8080/api/blizzard/characterDataBatch', urls);
    }

    // public getCharacterData(url: string): Observable<any> {
    //     return this.http.get<any>('http://localhost:8080/api/blizzard/characterInfo', { params: { url: url } });
    // }

    // public getCharacterMedia(url: string): Observable<any> {
    //     return this.http.get<any>('http://localhost:8080/api/blizzard/characterMedia', { params: { url: url } });
    // }

    // public getCharacterAppearance(url: string): Observable<any> {
    //     return this.http.get<any>('http://localhost:8080/api/blizzard/characterAppearance', { params: { url: url } });
    // }
}