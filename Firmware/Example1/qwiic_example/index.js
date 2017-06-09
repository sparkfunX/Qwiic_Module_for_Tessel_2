var five = require("johnny-five");
var t2 = require("tessel-io");

var board = new five.Board({
   io: new t2()
});

//when the board is ready...
board.on("ready", function() {
  //create a new multi object for the specific i2c sensor (BME280)
  var multi = new five.Multi({
    //using the BME280 barometric pressure sensor
    controller: "BME280",
    //read the sensor at a frequency of 1000 ms
    freq:1000,
    //if you are using the Qwicc Tessel board on port B uncomment the port below
    //port: "B"
  });
  //when the multi object receives data log it to the console...
  multi.on("data", function() {
    console.log("Thermometer");
    console.log("  celsius      : ", this.thermometer.celsius);
    console.log("  fahrenheit   : ", this.thermometer.fahrenheit);
    console.log("  kelvin       : ", this.thermometer.kelvin);
    console.log("--------------------------------------");

    console.log("Barometer");
    console.log("  pressure     : ", this.barometer.pressure);
    console.log("--------------------------------------");

    console.log("Hygrometer");
    console.log("  humidity     : ", this.hygrometer.relativeHumidity);
    console.log("--------------------------------------");

    console.log("Altimeter");
    console.log("  feet         : ", this.altimeter.feet);
    console.log("  meters       : ", this.altimeter.meters);
    console.log("--------------------------------------");
  });
});
