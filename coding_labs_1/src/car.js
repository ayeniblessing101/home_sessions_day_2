/*class Car{
    constructor(name, model, type){
    if (name === undefined){
    this.name ="General";
    }
    else{
        this.name = name;
    }
    if (model === undefined){
    this.model = "GM";
    }
    else{
        this.model = model;
    }
    if (name === "Porshe" || name === "Koenigsegg"){
        this.numOfDoors = 2;
    }
    else{
        this.numOfDoors = 4;
    }
    if (type === "trailer"){
        this.numOfWheels = 8;
        this.isSaloon = false;
        this.speed = "0km/h";
        this.type = "trailer";
    }
    else{
        this.numOfWheels = 4;
        this.isSaloon = true;
    }
  }
drive(gear){
    if (this.type === "trailer"){
        this.speed = 11 *gear + " " + "km/h";
    }
    else{
        this.speed = 50 * gear + " " + "km/hr";
    }
    return this;
}
}*/

class Car{
    constructor(name, model, type){
    
    
    this. name  = name;
    this.model = model;
    this.type = type;
    this.numofWheels= 4;
    this.numofdoors = 4;

    if(this.name  === undefined && this.model === undefined){
         this.name   = 'General';
         this.model  = 'GM'
    }else{
        this.name = name;
    }
     if(this.name === 'Porshe' || this.name === 'Koenigsegg'){
        this.numOfDoors = 2;
    }else{
        this.numOfDoors = 4;
    }

    if(type === 'trailer'){
        this.numOfWheels = 8;
        this.speed = '0 km/h';
        this.isSaloon = false;
    } else {
        this.numOfWheels = 4;
        this.isSaloon = true;
    }
    
}

}

Car.prototype.drive = function(speed) {
 if(speed === 7){this.speed = '77 km/h';}
  else if(speed === 5){this.speed = '250 km/h';}
  return this;
}