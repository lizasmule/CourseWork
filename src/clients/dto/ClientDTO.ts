import { Cooker } from "src/cooker/cooker.entity";

export class CreateClientDto {
    fullname: string;
    phone: string;
    email: string;
    cookers: Cooker[];
  }