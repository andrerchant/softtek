import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsService, users } from 'src/app/contacts.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  usuarios:Array<users>;
  dataSource: MatTableDataSource<users>;
  detailson:boolean = false;
  selectedUser:users;

  constructor(
    _contacts:ContactsService
  ) { 
    this.usuarios = _contacts.users;
  }
  
  displayedColumns: string[] = ['id', 'picture', 'first_name', 'last_name'];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  toogleDetails(eto:users){
    this.detailson = !this.detailson;
    if(!eto) return;
    this.selectedUser = eto;
    console.log("Elegiste a:",eto);
  }
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.usuarios);
    this.dataSource.sort = this.sort;
  }

}
