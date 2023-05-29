// export class Cooker {
//     id: number;
//     fullname: string;
//     position: string;
//     grade: string;
//   }

  import { Clients } from 'src/clients/clients.entity';
  import { Drinks } from 'src/drinks/drinks.entity';
  import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('cookers') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
  export class Cooker {
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    id: number;
    @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
    fullname: string;
    @Column()
    position: string;
    @Column()
    grade: string;
    @ManyToMany((type) => Clients, (clients) => clients.cookers) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
    @JoinTable({
      //join таблица с названием author_article
      name: 'cookers_clients',
      joinColumn: { name: 'cooker_id' }, //для связи с идентификатором автора
      inverseJoinColumn: { name: 'client_id' }, //для связи с идентификатором статьи
    })
    clients: Clients[]; //объект, в котором будем автоматически получать все статьи автора
    @ManyToMany((type) => Drinks, (drinks) => drinks.cookers) //тоже самое для аффилиаций
    @JoinTable({
      name: 'cookers_drinks',
      joinColumn: { name: 'cooker_id' },
      inverseJoinColumn: { name: 'drink_id' },
    })
    drinks: Drinks[];
  }
  