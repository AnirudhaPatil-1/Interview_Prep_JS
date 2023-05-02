//class accessors
//get method and set method when used turns a function/method into a property
// get method  is executed when you read/get the value
//set method is executed when you assign/set the value

console.log("----------");

class Vehicle{
    get model(){
        console.log("get method executed");
        return "---";
    }
    set model(value){
        console.log(`set method executed with value: ${value}`);
    }
}

const obj = new Vehicle(); 
console.log(obj.model); //get method executed
obj.model = "Maruti"; //set method executed with value: Maruti

console.log("------2.changing/customizing property ----");

class Vehicle1{
    #_model = '';
    get model(){
        // console.log(this.#_model + "is get getting executed?");
        return this.#_model;
    }
    set model(para){
        if(para.length < 3){
            this.#_model = "Maruti is better than " + para;
            
        }else{
            this.#_model = para;
        }
        console.log(this.#_model);
    }
}

const obj1 = new Vehicle1();
console.log(obj1.model);
obj1.model = "VW"; //Maruti is better than VW