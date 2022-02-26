export enum Sponsor {
  "steam" = "Steam",
}

export type GameCardProps = {
  imageUrl: string;
  gameName: string;
  prize: number;
  teamSize: number;
  sponsor: Sponsor;
  date: Date;
};
