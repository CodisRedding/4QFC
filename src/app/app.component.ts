import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import fantasyTeams from '../assets/week-3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MLS Fantasy Team Generator';
  teams = fantasyTeams;
  positions: any[] = [];

  constructor(private primengConfig: PrimeNGConfig) {
    this.teams = this.teams.map((team, id) => Object.assign({ id }, team));
  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.positions = [
      { label: 'DEFENDER', value: 'DEFENDER' },
      { label: 'MIDFIELDER', value: 'MIDFIELDER' },
      { label: 'FORWARD', value: 'FORWARD' },
      { label: 'KEEPER', value: 'KEEPER' }
    ]
  }
}
