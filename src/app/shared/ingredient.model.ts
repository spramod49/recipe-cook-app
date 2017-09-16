// export class Ingredient{
//     public name:string;                      //Shortcut for this type of declarations is shown below
//     public amount:number;
//
//     constructor(name:string, amount:number){
//         this.name= name;
//         this.amount = amount;
//     }
// }

export class Ingredient{
    constructor(public name:string, public amount:number){}
}
