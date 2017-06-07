function Car(type, model, name){
  
  this.doors = 4;
  this.type = type;
  this.model = model;
  this.name = name;
  this.wheels = 4;
  
  if(name === undefined) {
    this.name = 'General';
  }
  
  if(model === undefined) {
    this.name = 'GM';
  }
  
  if(type === "Porshe" || type === "Koenigsegg")
  {
    this.doors = 2;
  }
  
  if(name === "trailer")
  {
    this.wheels = 8;
  }
  
  if(name === 'trailer')
  {
    this.speed = '0 km/h';
  }
  else
  {
    this.speed = '77 km/h'
  }
  
  
  
  this.drive = function(pedal)
  {
    let man  = new Car('MAN', 'Truck', 'trailer');
    return man;
  }
}


let car = new Car('MAN', 'Truck', 'trailer');
console.log(car.wheels);
