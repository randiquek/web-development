// Task 1: Create a Car object

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    color: 'black',
    drive: function() {
        console.log('The car is driving.');
    }
}

car.drive();

// Task 2: Modify the Car object

car.color = 'blue';
console.log("The car's color is now", car.color);

car.fuelType = 'gasoline';
console.log("The car has a fuel type of", car.fuelType);

delete car.year;
console.log("The car's year,", car.year, "was deleted.");

// Task 3: Create a Driver object

let driver = {
    name: 'John Doe',
    licenseNumber: 'ABC123456',
    age: 30
}

car.driver = driver;

console.log('Driver:', car.driver.name);

// Task 4: Convert the Car object to JSON

let carJSON = JSON.stringify(car);
console.log(carJSON);

// Task 5: Parse a JSON string into a Car object

let carParse = JSON.parse(carJSON);
console.log(carParse);
