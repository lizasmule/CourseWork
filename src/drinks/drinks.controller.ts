import { DrinksService } from './drinks.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Drinks } from 'src/drinks/drinks.entity';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

@Controller('drinks')
@ApiTags('Напитки') // Тег для документации
export class DrinkController {
  constructor(private readonly drinkService: DrinksService) {}
  @Get()
    findall(){
      return this.drinkService.findAll();
    }
    
@ApiOperation({ summary: 'Создание напитка' }) // Операция для Swagger
  @Post()
  create(@Body() createDrinks: Drinks): import("c:/Users/Елизавета/education/src/drinks/drinks.entity").Drinks {
    return this.drinkService.create(createDrinks);
   }

// @Entity('drinks') //указываем что это не просто клас, а сущность в рамках TypeOrm, в БД будет храниться как таблица
// export class Drinks {
//   @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
//   @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
//   id: number;
//   @ApiProperty({ example: 'Пряный капучино', description: 'Название' })
//   @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
//   fullname: string;
// }

// export class CreateDrinkDto {
//   @ApiProperty({ example: 'Пряный капучино', description: 'Название' })
//   name: string;
//   @ApiProperty({ example: 'Капучино', description: 'Основа' })
//   base: string;
//   @ApiProperty({ example: 'Корица, шоколадный сироп', description: 'Добавки' })
//   additives: string;
//   @ApiProperty({ example: '150', description: 'Цена' })
//   price: number;
// }
}
// @Controller('drinks')
// export class DrinksController {
//   constructor(private readonly drinksService: DrinksService) {}
//   @Get()
//     findall(){
//         return this.drinksService.findAll();
//     }
// @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.drinksService.findOne(+id);
//     }
// @Put(':id')
//   update(@Param('id') id: string, @Body() updateDrinks: Drinks) {
//     return this.drinksService.update(+id, updateDrinks);
//     }
// @Post()
//   create(@Body() createDrinks: Drinks): import("src/drinks/drinks.entity").Drinks {
//     return this.drinksService.create(createDrinks);
//   }
// @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.drinksService.remove(+id);
//   }
// }
