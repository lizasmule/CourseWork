import { Module } from '@nestjs/common';
import { ClientService } from './ClientService';
import { ClientsController } from './clients.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Cooker } from 'src/cooker/cooker.entity';
import { Clients } from './clients.entity';
import { Drinks } from 'src/drinks/drinks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   controllers: [ClientsController],
//   providers: [ClientsService],
//   imports: [DatasourceModule],
// })
// export class CookerModule {}

@Module({
  controllers: [ClientsController],
  providers: [ClientService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Cooker, Clients, Drinks]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class CookerModule {}
