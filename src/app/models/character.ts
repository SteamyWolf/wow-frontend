export interface Character {
    characterInfo: {
        name: string;
        race: {
            name: {
                en_US: string;
            };
        };
        character_class: {
            name: {
                en_US: string;
            };
        };
        gender: {
            name: {
                en_US: string;
            };
        };
        realm: {
            name: {
                en_US: string;
            };
        };
        faction: {
            name: {
                en_US: string;
            };
        };
        level: number;
        media: {
            href: string;
        };
        appearance: {
            href: string;
        };
    };
    characterMedia: {
        assets: {
            key: string;
            value: string;
        }[];
    };
}