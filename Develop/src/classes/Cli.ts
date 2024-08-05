// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  startCli() {
    throw new Error("Method not implemented.");
  }
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
  // TODO: You will need to use the Union operator to define additional types for the array
  // TODO: See the AbleToTow interface for an example of how to use the Union operator
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  // TODO: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): any {
    inquirer
      .prompt(
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((this.vehicles:) { vin: string, make: string, model: string }) => ({
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            }) as inquirer.QuestionCollection<{ selectedVehicleVin: string }>,
        },
      )
      .then((answers: { color: string; make: string; model: string; year: string; weight: string; topSpeed: string; }) => {
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = car.vin;
        // perform actions on the selected vehicle
        this.performActions();
      };
  )}

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // TODO: Update the choices array to include Truck and Motorbike
          choices: ['Car'],
        },
      ])
      .then((answers: { vehicleType: string; }) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar();
        }
        // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
      });
  }

  // method to create a car
  createCar(); void {
    inquirer
      .prompt([
        {
          type: 'input', name: 'color', message: 'Enter Color',
        },{
          type: 'input', name: 'make', message: 'Enter Make',
        },{
          type: 'input', name: 'model', message: 'Enter Model',
        },{
          type: 'input', name: 'year', message: 'Enter Year',
        },{
          type: 'input', name: 'weight', message: 'Enter Weight',
        },{
          type: 'input', name: 'topSpeed', message: 'Enter Top Speed',
        },
      ])
      .then((answers: { color: string; make: string; model: string; year: string; weight: string; topSpeed: string; }) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(); void {
    inquirer
      .prompt([
        {
          type: 'input', name: 'color', message: 'Enter Color',
        },{
          type: 'input', name: 'make', message: 'Enter Make',
        },{
          type: 'input', name: 'model', message: 'Enter Model',
        },{
          type: 'input', name: 'year', message: 'Enter Year',
        },{
          type: 'input', name: 'weight', message: 'Enter Weight',
        },{
          type: 'input', name: 'topSpeed', message: 'Enter Top Speed',
        },{
          type: 'input', name: 'towingCapacity', message: 'Enter Towing Capacity',
        },
      ])
      .then((answers: any) => {
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          parseInt(answers.wheels)
          parseInt(answers.towingCapacity),
        );
        this.vehicle.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
        // TODO: Use the answers object to pass the required properties to the Truck constructor
        // TODO: push the truck to the vehicles array
        // TODO: set the selectedVehicleVin to the vin of the truck
        // TODO: perform actions on the truck
      }),
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input', name: 'color', message: 'Enter Color',
        },{
          type: 'input', name: 'make', message: 'Enter Make',
        },{
          type: 'input', name: 'model', message: 'Enter Model',
        },{
          type: 'input', name: 'year', message: 'Enter Year',
        },{
          type: 'input', name: 'weight', message: 'Enter Weight',
        },{
          type: 'input', name: 'topSpeed', message: 'Enter Top Speed',
        },{
          type: 'input', name: 'frontWheelDiameter', message: 'Enter Front Wheel Diameter',
        },{
          type: 'input', name: 'frontWheelBrand', message: 'Enter Front Wheel Brand',
        },{
          type: 'input', name: 'rearWheelDiameter', message: 'Enter Rear Wheel Diameter',
        },{
          type: 'input', name: 'rearWheelBrand', message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers: any) => {
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          new Wheel(answers.frontWheelDiameter, answers.frontWheelBrand),
          new Wheel(answers.rearWheelDiameter, answers.rearWheelBrand)
        );
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
        // TODO: Use the answers object to pass the required properties to the Motorbike constructor
        // TODO: push the motorbike to the vehicles array
        // TODO: set the selectedVehicleVin to the vin of the motorbike
        // TODO: perform actions on the motorbike
      });
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  findVehicleToTow(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles
          .filter((vehicle: any) => vehicle !== Truck)
          .map((vehicle: { vin: any; make: any; model: any; }) => ({
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle,
          })),
      },
    ])
      .then((answers: any) => {
        const vehicleToTow = answers.vehicleToTow;
        if (vehicleToTow instanceof Truck) {
          console.log("A truck cannot tow another truck.");
          this.performActions();
        } else {
          truck.tow(vehicleToTow);
          this.performActions();
        }
        // TODO: check if the selected vehicle is the truck
        // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
        // TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // TODO: add options to tow and wheelie
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow vehicle',
            'Perform wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers: { action: string; }) => {
        // perform the selected action
        if (answers.action === 'Print details')  {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        }
        // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
        else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } else {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers: { CreateOrSelect: string; }) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      }),
  }
}


// export the Cli class
export default Cli;
function createCar() {
  throw new Error("Function not implemented.");
}

function createTruck() {
  throw new Error("Function not implemented.");
}

function createVehicle() {
  throw new Error("Function not implemented.");
}

function createMotorbike() {
  throw new Error("Function not implemented.");
}

function findVehicleToTow() {
  throw new Error("Function not implemented.");
}

function performActions() {
  throw new Error("Function not implemented.");
}

function startCli() {
  throw new Error("Function not implemented.");
}

