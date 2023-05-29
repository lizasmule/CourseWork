import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Clients } from "src/clients/clients.entity";
import { Drinks } from "src/drinks/drinks.entity";
import { In, Repository } from "typeorm";
import { Cooker } from "src/cooker/cooker.entity";
import { CreateClientDto} from "src/clients/dto/ClientDTO";

@Injectable()
export class ClientService {
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

    async create(clientDto: CreateClientDto): Promise<Clients>
 {
    //получаем объект CreateAuthorDto
    const clients = this.clientRepository.create(); //создаем объект Author из репозитория
    clients.fullname = clientDto.fullname; //заполняем поля объекта Author
    clients.phone = clientDto.phone;
    clients.email = clientDto.email;
    await this.clientRepository.save(clients); //сохраняем объект Author в БД
    return clients; //возвращаем объект Author
  }

  findOne(id: number): Promise<Clients> {
    // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
    return this.clientRepository.findOne({
      //получаем объект Author по id
      where: { id }, //указываем условие поиска по id
      relations: { cookers: true }, //получаем связанные объекты
    });
  }

    async findAll(): Promise<Clients[]> {
        const clients = await this.clientRepository.find({
          //получаем связанные объекты
          relations: {
            cookers: true,
          },
        }); //получаем массив Author из БД
        return clients; //возвращаем массив Author
      }
    
    async update(id: number, updatedClient: Clients) {
    //получаем объект Author для обновления по id
    const clients = await this.clientRepository.findOne({ where: { id } }); //получаем объект Author по id из БД
    clients.fullname = updatedClient.fullname; //обновляем поля объекта Author
    clients.phone = updatedClient.phone;
    clients.email = updatedClient.email;
    clients.cookers = updatedClient.cookers;
    await this.clientRepository.save(clients); //сохраняем объект Author в БД
    return clients; //возвращаем объект Author
  }

  remove(id: number) {
    this.cookerRepository.delete({ id }); //удаляем объект Author из БД
  }
}

  