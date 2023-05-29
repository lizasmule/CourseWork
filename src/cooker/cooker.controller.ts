//import { CookerService } from './cooker.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Cooker } from 'c:/Users/Елизавета/education/src/cooker/cooker.entity';
import { CookerService } from './CookerService';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateCookerDto } from './dto/CookerDTO';

@Controller('cooker')
@ApiTags('Бариста') // Тег для документации
export class CookerController {
  constructor(private readonly cookerService: CookerService) {}
  @Get()
    findall(){
      return this.cookerService.findAll();
    }
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.cookerService.findOne(+id);
    }
@Put(':id')
  update(@Param('id') id: string, @Body() updateCooker: Cooker) {
    return this.cookerService.update(+id, updateCooker);
    }
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.cookerService.remove(+id);
  }
@Get('incomplete')
findIncomplete() {
  this.cookerService.findIncomplete();
}
    
@ApiOperation({ summary: 'Создание бариса' }) // Операция для Swagger
  @Post()
  create(@Body() createCooker: Cooker) {
    return this.cookerService.create(createCooker);
   }

// @Entity('cooker') //указываем что это не просто клас, а сущность в рамках TypeOrm, в БД будет храниться как таблица
// export class Cooker {
//   @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
//   @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
//   id: number;
//   @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
//   @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
//   fullname: string;
// }

// export class CreateCookerDto {
//   @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО' })
//   fullname: string;
//   @ApiProperty({ example: 'Старший бариста', description: 'Должность' })
//   position: string;
//   @ApiProperty({ example: 'Шеф', description: 'Уровень' })
//   grade: string;
//   @ApiProperty({
//     example: [1, 2],
//     description: 'Список идентификаторов напитков',
//   })
//   clients: number[];
// }
}
// @Controller('cooker')
// export class CookerController {
//   constructor(private readonly cookerService: CookerService) {}
//   @Get()
//     findall(){
//         return this.cookerService.findAll();
//     }
// @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.cookerService.findOne(+id);
//     }
// @Put(':id')
//   update(@Param('id') id: string, @Body() updateCooker: Cooker) {
//     return this.cookerService.update(+id, updateCooker);
//     }
// @Post()
//   create(@Body() createCooker: Cooker): import("c:/Users/Елизавета/education/src/cooker/cooker.entity").Cooker {
//     return this.cookerService.create(createCooker);
//   }
// @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.cookerService.remove(+id);
//   }
// @Get('incomplete')
// findIncomplete() {
//   this.cookerService.findIncomplete();
// }
// }
