export class Company {
    companyname:string;
    empcount:number;
    constructor(values:Object={}){
        Object.assign(this,values);
    }
}
