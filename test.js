var ford = {
  engine: 'V8',
  make: 'Ford',
  model: 'F250',
  year: 1992,
  color: 'pink',
  owners: ['kelly', 'Joe', 'Carl'],
  serviceRecord:{
    crashed: false,
    lastOil: 2015,
    mileage: 300000,
    condition: 'good'
  },
  tellMake: function(){
    console.log('the make is ' + this.make);
  }
}
// ex code: console.log(car[0].owners[1]);
//console.log(car.year);
console.log(`What is the make?: ` + ford.make);
console.log(`What is the year?: ` + ford.year);
console.log(`What is the color?: ` + ford.color);
console.log(`Has it been crashed?: ` + ford.crashed);
// console.log(`What when was the last oil change? `);
ford.tellMake();

//console.log(`What is the condition?: `);
var hotel = {
  capacity: 120,
  rez: 57,
  avail: function(){
    return this.capacity - this.rez
}}
console.log(hotel.avail());
hotel.name = "Best Western"
console.log(hotel);
