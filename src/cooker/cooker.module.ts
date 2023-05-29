import { Module } from '@nestjs/common';
//import { CookerService } from './cooker.service';
import { CookerController } from './cooker.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { Cooker } from './cooker.entity';
import { Clients } from 'src/clients/clients.entity';
import { Drinks } from 'src/drinks/drinks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CookerService } from './CookerService';

// @Module({
//   controllers: [CookerController],
//   providers: [CookerService],
//   imports: [DatasourceModule],
// })
// export class CookerModule {}

@Module({
  controllers: [CookerController],
  providers: [CookerService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Cooker, Clients, Drinks]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class CookerModule {}
