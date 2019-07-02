import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ContactsService, users } from 'src/app/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor(
    private FB : FormBuilder,
    private _contactService : ContactsService,
    public router:Router
    ) { }

  contactForm = this.FB.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    phone: ['',Validators.required],
    email: ['',Validators.required],
    address: ['',Validators.required],
  });

  onSubmit(){
    let newPerson:users ={
      id: this._contactService.users.length +1,
      first_name:this.contactForm.get("firstName").value,
      last_name:this.contactForm.get("lastName").value,
      phone:this.contactForm.get("phone").value,
      email:this.contactForm.get("email").value,
      address:this.contactForm.get("address").value,
      picture: 'assets/users/duck',
      map: this._contactService.coords
    };
    console.log("adding this guy: ",newPerson);
    this._contactService.addUser(newPerson);
    this.router.navigate(['']);
    alert(`${newPerson.first_name} was added succesfully`);
    
  }

  ngOnInit() {
    this._contactService.getLocation();
  }

}
