function Car(type, model, name){
  this.type = type;
  this.model = model;
  this.name = name;
  
  if(name === undefined) {
		this.name = 'General';
	}
  
  if(this.name === 'Porshe' || this.name === 'Koenigsegg')
  {
    this.door = 2;
  }
  else
  {
    this.door = 4;
  }
  
  this.drive = function() {
    if(this.type === 'trailer')
    {
      this.speed = '0km/h';
    }
    else
    {
      this.speed = '250km/h';
    }
  };
}

var car = Car('MAN', 'Truck', 'trailer');