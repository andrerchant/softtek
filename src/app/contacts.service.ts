import { Injectable } from '@angular/core';

export interface users{
  id:number,
  first_name:string,
  last_name:string,
  picture: string|any,
  addres?:string,
  map?:number,
  phone?:number,
  email?:string
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  users:Array<any> = [
    { id:1, first_name: "Robert", last_name:"Baratheon", picture:"assets/users/robert.jpg" },
    { id:2, first_name: "Aragorn", last_name:"Arathorn's son", picture:"assets/users/aragorn.jpg" },
    { id:3, first_name: "Lara", last_name:"Croft", picture:"assets/users/lara.jpg" },
    { id:4, first_name: "Peter", last_name:"Petegrew", picture:"assets/users/peter.jpg" },
    { id:5, first_name: "Fred", last_name:"Flinstone", picture:"assets/users/fred.jpg" },
    { id:6, first_name: "Rhianna", last_name:"Pérez", picture:"assets/users/rhianna.jpg" },
  ]

}
