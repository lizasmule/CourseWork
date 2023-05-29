// import { HttpStatus, Injectable } from "@nestjs/common";
// import { DatasourceService } from "src/datasource/datasource.service";
// import { Cooker } from "./cooker.entity";

// @Injectable()
// export class CookerService {
//   findIncomplete() {
//     throw new Error('Method not implemented.');
//   }
//     constructor(private readonly datasourceService: DatasourceService) {}
//     create(cooker: Cooker) {
//         this.datasourceService.getCooker().push(cooker);
//         return cooker;
//     }
//     findOne(id: number) {
//         return this.datasourceService
//           .getCooker()
//           .find((cooker) => cooker.id === id);
//     }
//       findAll(): Cooker[] {
//         return this.datasourceService.getCooker();
//     }
//     update(id: number, updatedCooker: Cooker) {
//         const index = this.datasourceService
//           .getCooker()
//           .findIndex((cooker) => cooker.id === id);
//         this.datasourceService.getCooker()[index] = updatedCooker;
//         return this.datasourceService.getCooker()[index];
//     }
//     remove(id: number) {
//         const index = this.datasourceService
//           .getCooker()
//           .findIndex((cooker) => cooker.id === id);
//         this.datasourceService.getCooker().splice(index, 1);
//         return HttpStatus.OK;
//     }
// }