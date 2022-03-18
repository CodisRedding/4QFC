import { Player } from "./player.model";

export interface Team {
  cost: number;
  last_5_avg_points: number;
  last_3_avg_points: number;
  players: Player[]
}
