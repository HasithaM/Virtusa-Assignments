import {CarModel} from './car-model';

export class Car {
  constructor(public carBrandName: string,
              public carNumber: string,
              public fuelType: string,
              public gearType: string,
              public noOfPassengers: string,
              public doorsCount: number,
              public mileagePerGallon: number,
              public acNonAc: string,
              public bagsCanHold: number,
              public pricePerHour: string,
              public carModel: CarModel) {
  }
}
