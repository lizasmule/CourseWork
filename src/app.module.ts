import { Module } from '@nestjs/common';
import { CookerModule } from './cooker/cooker.module';
import { DatasourceModule } from './datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CookerModule, 
    DatasourceModule, 
    TypeOrmModule.forRoot({
    type: 'postgres', //тип подключаемой БД
    port: 5432, //порт
    username: 'postgres', //имя пользователя
    password: 'postgres', //пароль
    host: 'localhost', //хост, в нашем случае БД развернута локально
    synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
    logging: 'all', //включим логирование для удобства отслеживания процессов
	  entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),

],
  controllers: [],
  providers: [],
})
export class AppModule {}