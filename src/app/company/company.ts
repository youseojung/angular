export class Company {
    name:string;
    year:number;
    address:string;
    constructor(values:Object={}){
        Object.assign(this,values);
    }
}
