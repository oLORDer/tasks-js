class Car {
  #key = 1337;
  constructor({ year, oil, type }) {
    this.year = year;
    this.oil = oil;
    this.type = type;
  }

  fuel = 0;

  refuel(litres) {
    this.fuel += litres;
  }

  go() {
    console.log('go-go');

    const idGo = setInterval(() => {
      if (this.fuel === 0) {
        clearInterval(idGo);
        this.stop();
        return;
      }

      this.fuel -= 1;
      console.log('you left: ' + this.fuel + ' litres oil.');
    }, 500);
  }

  stop() {
    console.log("Haven't oil");
  }
}

const tesla = new Car({ year: 2020, type: 'sedan', oil: 'electro' });
// tesla.refuel(5);
// tesla.refuel(3);
tesla.go();
// console.log(tesla);
