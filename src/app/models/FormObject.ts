export class FormObject {
  id?:string;
  name: string;
  added: Date;
  
  constructor(name: string) {
    this.name = name;
    this.added = new Date();
  }

}