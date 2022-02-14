export class Tickets{
    id:string | undefined;
    number:string;
    title:string;
    exists:boolean;

     constructor(number:string, title:string, exists:boolean){
        this.number = number;
        this.title = title;
        this.exists = exists;
    }



} 