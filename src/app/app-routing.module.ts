import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TournamentComponent } from './tournament/tournament.component';



const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'leaderboard', component: LeaderboardComponent},
  {path:'profile', component: ProfileComponent},
  {path:'tournament', component: TournamentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
