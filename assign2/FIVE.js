// vehicleid                a number
// brand                      a string
// model                     a string
// variant                    a string
// specifications             an object containing the following members:
//                                     firstGear          a function which logs some message
//                                     secondGear     a function which logs some message
//                                     maxSpeed       a number
//                                     changeGear    a function which calls “firstGear” and 
//     “secondGear” functions 





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
            console.log("max speed is:" + Math.random()*100);
        },
        changeGear:function(){
        this.firstGear()
        this.secondGear()
        }

        }

}
console.log("vehicle id is:"+vehicle.Vid+"\n brand is:"+ vehicle.brand+"\n model is :"+ vehicle.model+"\nvarient is: "+vehicle.varient);
vehicle.specification.maxSpeed();
vehicle.specification.changeGear();
