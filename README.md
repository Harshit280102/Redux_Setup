# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

//                 Typescript Notes


let name:String;
let age:Number;
let isStudent:boolean;
let hobbies:string[];
let role:[number,string];
let height:Number | string; //union type



type Person={
  name:string,
  age?:number, //making the property optional
}

let person:Person={
  name:"Hrashit",
};

let lotsofpeople:Person[];

// function printname(name:String){
//   console.log(name);
// }

// printname("Harshit Joshi")

// let printName:Function;

let printName:(name:String) => Number; //void returns undefined but never returns notthing

// Type Alias 

interface Human {
  name:String,
  age?:number
}  

interface Guy extends Human{
  profession:string;
}

//Extend Type to interface

type X ={
a:String,
b:number,
};

interface Y extends X {
 name:String
}
