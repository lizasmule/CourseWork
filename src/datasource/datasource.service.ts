import { Injectable } from '@nestjs/common';
import { Clients } from 'src/clients/clients.entity';
import { Cooker } from 'src/cooker/cooker.entity';
import { Drinks } from 'src/drinks/drinks.entity';

@Injectable()
export class DatasourceService {
  private cooker: Cooker[] = [];
  private clients: Clients[] = [];
  private drinks: Drinks[] = [];

  getCooker(): Cooker[] {
    return this.cooker;
  }
  getClients(): Clients[] {
    return this.clients;
  }
  getDrinks(): Drinks[] {
    return this.drinks;
  }
}