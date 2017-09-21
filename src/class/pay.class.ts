export class Pay {
    date:string;
    desc:string = "";
    amount:number;
    type:string = "";

    constructor(date:string, desc:string, amount:number,type:string) {
      this.date = date;
      this.desc = desc;
      this.amount = amount;
      this.type = type;
    }
}