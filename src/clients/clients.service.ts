// import { HttpStatus, Injectable } from "@nestjs/common";
// import { DatasourceService } from "src/datasource/datasource.service";
// import { Clients } from "./clients.entity";

// @Injectable()
// export class ClientsService {
//     constructor(private readonly datasourceService: DatasourceService) {}
//     create(clients: Clients) {
//         this.datasourceService.getClients().push(clients);
//         return clients;
//     }
//     findOne(id: number) {
//         return this.datasourceService
//           .getClients()
//           .find((clients) => clients.id === id);
//     }
//       findAll(): Clients[] {
//         return this.datasourceService.getClients();
//     }
//     update(id: number, updatedClients: Clients) {
//         const index = this.datasourceService
//           .getClients()
//           .findIndex((clients) => clients.id === id);
//         this.datasourceService.getClients()[index] = updatedClients;
//         return this.datasourceService.getClients()[index];
//     }
//     remove(id: number) {
//         const index = this.datasourceService
//           .getClients()
//           .findIndex((clients) => clients.id === id);
//         this.datasourceService.getCooker().splice(index, 1);
//         return HttpStatus.OK;
//     }
// }