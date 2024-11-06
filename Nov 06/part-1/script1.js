/* Let's try creating a class */

class Vehile {
  constructor(vehicleType, modelName, brand, color, topSpeed, engine, isAutomatic, isConvertible) {
    this.vehicleType = vehicleType;
    this.modelName = modelName;
    this.brand = brand;
    this.color = color;
    this.topSpeed = topSpeed;
    this.engine = engine;
    this.isAutomatic = isAutomatic;
    this.isConvertible = isConvertible;
    this.currentAcceleration = 0;
  }

  drive() {
    console.log(`Driving the ${this.vehicleType}`);
  }

  accelerate() {
    this.currentAcceleration += 10;
    console.log(`Accelerating the ${this.vehicleType}`);
    console.log("Current Accelation:", this.currentAcceleration, "Km/h");
  };

  deAccelerate() {
    this.currentAcceleration -= 10;
    console.log(`De-accelerating the ${this.vehicleType}`);
    console.log("Current Accelation:", this.currentAcceleration, "Km/h");
  }

  break() {
    console.log(`Stoppin the ${this.vehicleType}`);
  }
}

let car = new Vehile("Car", "Honda City", "Honda", "Black", 200, "Petrol", true, false);

let bike = new Vehile("Bike", "Pulser", "Bajaj", "Black", 180, "Petrol", false, false);

let scooty = new Vehile("Scooty", "Activa", "Honda", "Black", 150, "Petrol", true, true);


car.drive();
car.accelerate();
car.accelerate();
car.accelerate();
car.deAccelerate();

bike.drive();
bike.accelerate();
bike.accelerate();
bike.accelerate();
bike.deAccelerate();

scooty.drive();
scooty.accelerate();
scooty.accelerate();
scooty.accelerate();
scooty.deAccelerate();