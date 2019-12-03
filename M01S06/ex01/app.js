var car = {
    make: 'Audi',
    color: 'black',
    wheels: 4,
    speed: 50,
    nospeed: 0,
    topSpeed: 160,
    TopReverseSpeed: -50,
    isTrunkOpen: false,
    areLightsOn: false,
    openTrunk: function()
    {
        this.isTrunkOpen = true;
    },
    closeTrunk: function()
    {
        this.isTrunkOpen = false
    },
    LightsOn: function()
    {
        this.areLightsOn = true;
    },
    LightsOff: function()
    {
        this.areLightsOn = false;
    },
    accelerate: function() {
        this.speed++;
    },
    decelerate: function() {
        this.speed--;
    },
    flashLights: function()
    {
        this.LightsOn()
        this.LightsOff()
     
    },
    setSpeed: function(speed)
    {
        if(speed > this.topSpeed)
        {
            this.speed = this.topSpeed;
            return;
        }


        if(speed < this.topSpeed)
        {
            this.speed = this.TopReverseSpeed;
            return;
        }

        
        this.speed = speed;
    },
    stop: function()
    {
        this.speed = false;
    }
};



console.log(`Masina are marca ${car.make} si are viteza ${car.speed} km/h`)

car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
console.log(`Viteza noua este ${car.speed} km/h`)
console.log(`Viteza este acum de ${car.nospeed} km/h , Iar acum este de ${car.speed} km/h`)
