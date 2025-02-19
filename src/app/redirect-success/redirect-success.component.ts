import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlizzardApiService } from '../services/blizzard-api.service';

@Component({
    selector: 'app-redirect-success',
    templateUrl: './redirect-success.component.html',
    styleUrls: ['./redirect-success.component.scss']
})
export class RedirectSuccessComponent implements OnInit {

    constructor(private route: ActivatedRoute, 
                private router: Router,
                private blizzardApiService: BlizzardApiService) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            if (params['code']) {
                console.log(params);
                this.blizzardApiService.setUserAccessToken(params['code']).subscribe((userAccessToken: {value: string, expiry: Date}) => {
                    console.log(userAccessToken);
                    this.blizzardApiService.setToken(userAccessToken.value);
                    this.router.navigate(['/wow']);
                });
            }
        });
    }

}
