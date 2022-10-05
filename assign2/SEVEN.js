const vehicle={

    Vid:12345,
    brand:'HYUNDAI',
    model: 'CRETA',
    varient:'E',

    specification:{

        firstGear : function(){
            console.log('this is first gear ')

        },
        secondGear:function(){
            console.log('you are in second gear')
        },
        maxSpeed:function(){
            console.log("max speed is:" + (Math.random()*100).toString());
            
        },
        changeGear:function(){
        this.firstGear()
        this.secondGear()
        }

        }

}
//console.log("vehicle id is:"+vehicle.Vid+"\n brand is:"+ vehicle.brand+"\n model is :"+ vehicle.model+"\nvarient is: "+vehicle.varient);
//vehicle.specification.maxSpeed();
//vehicle.specification.changeGear();


const getDetails=(vehicle)=>{
    console.log(vehicle.Vid)
    console.log(vehicle.brand)
    console.log(vehicle.model)
    console.log(vehicle.varient)
    vehicle.specification.maxSpeed()
}

getDetails(vehicle)

