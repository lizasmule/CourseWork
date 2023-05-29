import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Clients } from "src/clients/clients.entity";
import { Drinks } from "src/drinks/drinks.entity";
import { In, Repository } from "typeorm";
import { Cooker } from "src/cooker/cooker.entity";
import { CreateDrinksDto } from "./dto/DrinksDTO";

@Injectable()
export class DrinksService {
  findIncomplete() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Cooker)
    private readonly cookerRepository: Repository<Cooker>, // "внедряем" репозиторий Author в сервис
    @InjectRepository(Clients)
    private readonly clientRepository: Repository<Clients>, // "внедряем" репозиторий Affiliation в сервис
    @InjectRepository(Drinks)
    private readonly drinkRepository: Repository<Drinks>, // "внедряем" репозиторий Artilcle в сервис
  ) {}

    async create(drinkDto: CreateDrinksDto): Promise<Drinks>
 {
    //получаем объект CreateAuthorDto
    const drinks = this.drinkRepository.create(); //создаем объект Author из репозитория
    drinks.name = drinkDto.name; //заполняем поля объекта Author
    drinks.base = drinkDto.base;
    drinks.additives = drinkDto.additives;
    drinks.price = drinkDto.price;
    await this.drinkRepository.save(drinks); //сохраняем объект Author в БД
    return drinks; //возвращаем объект Author
  }

  findOne(id: number): Promise<Drinks> {
    // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
    return this.drinkRepository.findOne({
      //получаем объект Author по id
      where: { id }, //указываем условие поиска по id
      relations: { cookers: true }, //получаем связанные объекты
    });
  }

    async findAll(): Promise<Drinks[]> {
        const drinks = await this.drinkRepository.find({
          //получаем связанные объекты
          relations: {
            cookers: true,
          },
        }); //получаем массив Author из БД
        return drinks; //возвращаем массив Author
      }
    
    async update(id: number, updatedDrink: Drinks) {
    //получаем объект Author для обновления по id
    const drinks = await this.drinkRepository.findOne({ where: { id } }); //получаем объект Author по id из БД
    drinks.name = updatedDrink.name; //обновляем поля объекта Author
    drinks.base = updatedDrink.base;
    drinks.additives = updatedDrink.additives;
    drinks.price = updatedDrink.price;
    drinks.cookers = updatedDrink.cookers;
    await this.drinkRepository.save(drinks); //сохраняем объект Author в БД
    return drinks; //возвращаем объект Author
  }

  remove(id: number) {
    this.drinkRepository.delete({ id }); //удаляем объект Author из БД
  }
}

  