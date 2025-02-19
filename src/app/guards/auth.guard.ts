import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BlizzardApiService } from '../services/blizzard-api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private blizzardApiService: BlizzardApiService) { }

    canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
        if (this.blizzardApiService.getToken()) {
            return true;
        } else {
            return false;
        }
    }
}