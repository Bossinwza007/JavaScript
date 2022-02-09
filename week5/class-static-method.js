class Dog{
    constructor(name){
        this._name = name;
    }
    introduce(){
        console.log("This is "+this._name+"!")
    }
    static bark(){
        console.log("woof!")
    }
}
const myDog=new Dog("buster");
myDog.introduce();

Dog.bark();