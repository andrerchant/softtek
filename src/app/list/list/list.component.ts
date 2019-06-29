import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsService, users } from 'src/app/contacts.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  usuarios:Array<any>;
  dataSource: MatTableDataSource<any>;

  constructor(
    _contacts:ContactsService
  ) { 
    this.usuarios = _contacts.users;
  }
  
  displayedColumns: string[] = ['id', 'first_name', 'last_name'];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.usuarios);
    this.dataSource.sort = this.sort;
  }

}
