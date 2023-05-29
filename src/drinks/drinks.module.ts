import { Module } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { DrinkController } from './drinks.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Cooker } from 'src/cooker/cooker.entity';
import { Clients } from 'src/clients/clients.entity';
import { Drinks } from './drinks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   controllers: [DrinksController],
//   providers: [DrinksService],
//   imports: [DatasourceModule],
// })
// export class CookerModule {}

@Module({
  controllers: [DrinkController],
  providers: [DrinksService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Cooker, Clients, Drinks]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class CookerModule {}
