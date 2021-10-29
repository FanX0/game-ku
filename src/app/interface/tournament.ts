export interface tournament{
    id:          number;
    PlayingDate: Date;
    HomeTeam:    string;
    AwayTeam:    string;
    HomeScore:   number;
    AwayScore:   number;
    notes?:      string;
}