import { ClientService } from './ClientService';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Clients } from 'src/clients/clients.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('clients')
@ApiTags('Посетители') // Тег для документации
export class ClientsController {
  constructor(private readonly clientService: ClientService) {}
  @Get()
    findall(){
      return this.clientService.findAll();
    }
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
    }
@Put(':id')
  update(@Param('id') id: string, @Body() updateClients: Clients) {
    return this.clientService.update(+id, updateClients);
    }
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
    
@ApiOperation({ summary: 'Создание бариса' }) // Операция для Swagger
  @Post()
  create(@Body() createClient: Clients) {
    return this.clientService.create(createClient);
   }

// @Entity('client') //указываем что это не просто клас, а сущность в рамках TypeOrm, в БД будет храниться как таблица
// export class Clients {
//   @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
//   @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
//   id: number;
//   @ApiProperty({ example: 'Петров Петр Петрович', description: 'ФИО' })
//   @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
//   fullname: string;
// }

// export class CreateClientDto {
//   @ApiProperty({ example: 'Петров Петр Петрович', description: 'ФИО' })
//   fullname: string;
//   @ApiProperty({ example: '89909999999', description: 'Номер телефона' })
//   phone: string;
//   @ApiProperty({ example: 'mypost@mail.com', description: 'Почта' })
//   email: string;
//   cooker: number[];
// }
}

// @Controller('clients')
// export class ClientsController {
//   constructor(private readonly clientsService: ClientsService) {}
//   @Get()
//     findall(){
//         return this.clientsService.findAll();
//     }
// @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.clientsService.findOne(+id);
//     }
// @Put(':id')
//   update(@Param('id') id: string, @Body() updateClients: Clients) {
//     return this.clientsService.update(+id, updateClients);
//     }
// @Post()
//   create(@Body() createClients: Clients): import('src/clients/clients.entity').Clients {
//     return this.clientsService.create(createClients);
//   }
// @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.clientsService.remove(+id);
//   }
// }
