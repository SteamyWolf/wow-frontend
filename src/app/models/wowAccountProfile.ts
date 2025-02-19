export interface WowAccountProfile {
    collections: { href: string };
    id: number;
    wow_accounts: { characters: { character: { href: string } }[] }[];
}