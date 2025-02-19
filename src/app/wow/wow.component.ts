import { Component, OnInit } from '@angular/core';
import { BlizzardApiService } from '../services/blizzard-api.service';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { WowAccountProfile } from '../models/wowAccountProfile';
import { Character } from '../models/character';

@Component({
    selector: 'app-wow',
    templateUrl: './wow.component.html',
    styleUrls: ['./wow.component.scss']
})
export class WowComponent implements OnInit {

    characters: Character[] = [];

    loading = true;

    constructor(private blizzardApiService: BlizzardApiService) { }

    ngOnInit(): void {
        this.loading = true;
        this.blizzardApiService.getWowAccountProfile().pipe(
            switchMap((accountProfile: WowAccountProfile) => {
                const characterUrls = accountProfile.wow_accounts[2].characters
                    .slice(0, 12)
                    .map(character => character.character.href);

                return this.blizzardApiService.getCharacterDataBatch(characterUrls);
            }),
            catchError(error => {
                console.error('There was an error:', error);
                return of([]); // Return an empty array to handle the error gracefully
            })
        ).subscribe((characters: Character[]) => {
            this.loading = false;
            this.characters = characters.filter(character => character.characterInfo && character.characterMedia);
            // this.characters = characters;
            console.log('Combined Character Data:', this.characters);
        });
    }

}
