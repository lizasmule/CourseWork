// export class Clients {
//     id: number;
//     fullname: string;
//     phone: string;
//     email: string;
//   }

import { Cooker } from 'src/cooker/cooker.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('clients')
export class Clients {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fullname: string;
  @Column()
  phone: string;
  @Column()
  email: string;
  @ManyToMany((type) => Cooker, (cooker) => cooker.clients)
  @JoinTable({
    name: 'cooker_client',
    joinColumn: { name: 'client_id' },
    inverseJoinColumn: { name: 'cooker_id' },
  })
  cookers: Cooker[];
}
