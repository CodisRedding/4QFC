import { Club } from "./club.model";
import { Position } from "./position.model";

export interface Player {
  id: number;
  cost: number;
  avg: number;
  last_5_avg: number;
  last_3_avg: number;
  team: Club;
  position: Position;
}
