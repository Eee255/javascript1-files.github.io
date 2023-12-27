let cars = []
cars.push({make: "Toyoto", model: "Camry", year: "2018"})
cars.push({make: "Toyoto", model: "Camry", year: "2018"})
cars.push({make: "Toyoto", model: "Camry", year: "2018"})
cars.splice(0, 1)
cars.push({make: "Honda", model: "Civic", year: "2020"})
cars[1].model ="Accord"
console.log(cars)