import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlizzardApiService } from '../services/blizzard-api.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(private router: Router,
              private blizzardApiService: BlizzardApiService) {}

  ngOnInit(): void {
    const token = this.blizzardApiService.getToken();
    if (token) {
        this.blizzardApiService.setUserAccessToken(token.value).subscribe(() => {
            this.router.navigate(['/wow']);
        })
    } else {
        window.location.href = `https://us.battle.net/oauth/authorize?client_id=${environment.client_id}&response_type=code&redirect_uri=http://localhost:4200/redirect-success&scope=wow.profile`;
    }
  }

}
