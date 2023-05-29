import { Clients } from "src/clients/clients.entity";
import { Drinks } from "src/drinks/drinks.entity";

export class CreateCookerDto {
  fullname: string;
  position: string;
  grade: string;
  drinks: Drinks[];
  clients: Clients[];
}
