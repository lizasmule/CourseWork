import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Drinks } from "./drinks.entity";

@Injectable()
export class DrinksService {
    constructor(private readonly datasourceService: DatasourceService) {}
    create(drinks : Drinks) {
        this.datasourceService.getDrinks().push(drinks);
        return drinks;
    }
    findOne(id: number) {
        return this.datasourceService
          .getDrinks()
          .find((drinks) => drinks.id === id);
    }
      findAll(): Drinks[] {
        return this.datasourceService.getDrinks();
    }
    update(id: number, updatedCooker: Drinks) {
        const index = this.datasourceService
          .getDrinks()
          .findIndex((drinks) => drinks.id === id);
        this.datasourceService.getDrinks()[index] = updatedCooker;
        return this.datasourceService.getDrinks()[index];
    }
    remove(id: number) {
        const index = this.datasourceService
          .getDrinks()
          .findIndex((drinks) => drinks.id === id);
        this.datasourceService.getDrinks().splice(index, 1);
        return HttpStatus.OK;
    }
}