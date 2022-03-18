import { Component, OnInit } from '@angular/core';
import fantasyTeams from '../../assets/week-3';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams = fantasyTeams;
  positions: any[] = [];

  constructor() {
    this.teams = this.teams.map((team, id) => Object.assign({ id }, team));
  }

  ngOnInit() {
    this.positions = [
      { label: 'DEFENDER', value: 'DEFENDER' },
      { label: 'MIDFIELDER', value: 'MIDFIELDER' },
      { label: 'FORWARD', value: 'FORWARD' },
      { label: 'KEEPER', value: 'KEEPER' }
    ]
  }
}
