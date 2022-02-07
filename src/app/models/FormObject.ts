export class FormObject {
  id?:string;
  name: string;
  added: any;
  
  constructor(name: string) {
    this.name = name;
    this.added = new Date();
  }

}