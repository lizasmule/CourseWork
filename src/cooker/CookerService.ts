import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Clients } from "src/clients/clients.entity";
import { Drinks } from "src/drinks/drinks.entity";
import { In, Repository } from "typeorm";
import { Cooker } from "./cooker.entity";
import { CreateCookerDto} from "src/cooker/dto/CookerDTO";

@Injectable()
export class CookerService {
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

    async create(cookerDto: CreateCookerDto): Promise<Cooker>
 {
    //получаем объект CreateAuthorDto
    const cooker = this.cookerRepository.create(); //создаем объект Author из репозитория
    cooker.fullname = cookerDto.fullname; //заполняем поля объекта Author
    cooker.position = cookerDto.position;
    cooker.grade = cookerDto.grade;
    const drinks = await this.drinkRepository.findBy({
      //получаем массив Affiliation по id
      id: In(cookerDto.drinks),
    });
    cooker.drinks = drinks;
    await this.cookerRepository.save(cooker); //сохраняем объект Author в БД
    return cooker; //возвращаем объект Author
  }

  findOne(id: number): Promise<Cooker> {
    // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
    return this.cookerRepository.findOne({
      //получаем объект Author по id
      where: { id }, //указываем условие поиска по id
      relations: { drinks: true, clients: true }, //получаем связанные объекты
    });
  }

    async findAll(): Promise<Cooker[]> {
        const cooker = await this.cookerRepository.find({
          //получаем связанные объекты
          relations: {
            drinks: true,
            clients: true,
          },
        }); //получаем массив Author из БД
        return cooker; //возвращаем массив Author
      }
    
    async update(id: number, updatedCooker: Cooker) {
    //получаем объект Author для обновления по id
    const cooker = await this.cookerRepository.findOne({ where: { id } }); //получаем объект Author по id из БД
    cooker.fullname = updatedCooker.fullname; //обновляем поля объекта Author
    cooker.position = updatedCooker.position;
    cooker.grade = updatedCooker.grade;
    cooker.drinks = updatedCooker.drinks;
    cooker.clients = updatedCooker.clients;
    await this.cookerRepository.save(cooker); //сохраняем объект Author в БД
    return cooker; //возвращаем объект Author
  }

  remove(id: number) {
    this.cookerRepository.delete({ id }); //удаляем объект Author из БД
  }
}

  