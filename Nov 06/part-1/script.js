/* Let's try creating an object of a car */

let car = {
  modelName: "Honda City",
  brand: "Honda",
  color: "Black",
  topSpeed: 200,
  engine: "Petrol",
  isAutomatic: true,
  isConvertible: false,
  currentAcceleration: 0,
  drive: function () {
    console.log("Driving the car");
  },
  break: function () {
    console.log("Stopping the car");
  },
  accelerate: function () {
    console.log("Accelerating the car");
    this.currentAcceleration += 10;
    console.log("Current Accelation:", this.currentAcceleration, "Km/h");
  },
  deAccelerate: function () {
    console.log("De accelerating the car");
    this.currentAcceleration -= 10;
    console.log("Current Accelation:", this.currentAcceleration, "Km/h");
  },
};

let motorbike = {
  modelName: "Pulser",
  brand: "Bajaj",
  color: "Black",
  topSpeed: 180,
  engine: "Petrol",
  isAutomatic: false,
  isConvertible: false,
  currentAcceleration: 0,
  drive: function () {
    console.log("Driving the bike");
  },
  break: function () {
    console.log("Braking the bike");
  },
  stop: function () {
    console.log("Stoping the bike");
  },
  accelerate: function () {
    console.log("Accelerating the bike");
    this.currentAcceleration += 10;
    console.log("Current Accelation:", this.currentAcceleration, "Km/h");
  },
  deAccelerate: function () {
    console.log("De accelerating the bike");
    this.currentAcceleration -= 10;
    console.log("Current Accelation:", this.currentAcceleration, "Km/h");
  },
}

/* this keyword refers to the current object where it is called. */

car.drive();
car.accelerate();
car.accelerate();
car.accelerate();
car.deAccelerate();
// console.log("Current Accelation:", car.currentAcceleration);