import { Injectable } from '@angular/core';

export interface users{
  id:number,
  first_name:string,
  last_name:string,
  picture: string|any,
  address?:string,
  map?:Array<number>,
  phone?:number,
  email?:string
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  users:Array<users> = [
    { id:1, phone:5546895616, email: "robert67@gmail.com", first_name: "Robert", last_name:"Baratheon", picture:"assets/users/robert", address:"1100 6th Ave Room H13-16, New York, NY 10036, EE. UU.",map:[40.7549431,-73.9859609]},
    { id:2, phone:5551689246, email: "dunedain@minastirith.com", first_name: "Aragorn", last_name:"Arathorn's son", picture:"assets/users/aragorn", address:"24 Dundas St, Seatoun, Wellington 6022, Nueva Zelanda",map:[-41.3229216,174.8301798]},
    { id:3, phone:5549535183, email: "rider@gmail.com", first_name: "Lara", last_name:"Croft", picture:"assets/users/lara", address:"Rua Dr. Marcelo Cândia, 742 - Santa Rita, Macapá - AP, 68901-901, Brasil",map:[0.0356218,-51.0717187]},
    { id:4, phone:4489567512, email: "mousetail@gmail.com", first_name: "Peter", last_name:"Petegrew", picture:"assets/users/peter", address:"58 Victoria St, Westminster, London SW1E 6QW, Reino Unido",map:[51.4963852,-0.1354508]},
    { id:5, phone:6859203458, email: "yabadabadu@yahoo.com.mx", first_name: "Fred", last_name:"Flinstone", picture:"assets/users/fred", address:"Church St, Amesbury, Salisbury SP4 7EU, Reino Unido",map:[51.1774351,-1.7869499]},
    { id:6, phone:8046513219, email: "powerpuffgirl1@gmail.com", first_name: "Rhianna", last_name:"Pérez", picture:"assets/users/rhianna", address:"95 S Pine Ave, Long Beach, CA 90802, EE. UU.",map:[33.778676,-118.2121173]},
  ]

}
