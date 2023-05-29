// export class Drinks {
//     id: number;
//     name: string;
//     base: string;
//     additives: string;
//     price: number;
//   }

import { Cooker } from 'src/cooker/cooker.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('drinks')
export class Drinks {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true }) //поле должно быть уникальным
  name: string;
  @Column()
  base: string;
  @Column()
  additives: string;
  @Column()
  price: number;
  @ManyToMany((type) => Cooker, (cooker) => cooker.drinks)
  @JoinTable({
    name: 'cooker_drink',
    joinColumn: { name: 'drink_id' },
    inverseJoinColumn: { name: 'cooker_id' },
  })
  cookers: Cooker[];
}
