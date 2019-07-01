import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ContactsService,users } from 'src/app/contacts.service';
// import { google } from 'google-maps';
declare let google;

// const google = google;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  marker:any;
  map:any;

  constructor(
    _contacts:ContactsService
  ) { }

  @Input('udata') users_data:users;
  @Output() changeWindow = new EventEmitter<boolean>();
  @ViewChild('map',{static: false}) $map: ElementRef;

  send_close(){
    this.changeWindow.emit();
  }

  createMap(coords:Array<number>) {
    
    this.map = new google.maps.Map(this.$map.nativeElement, {
      center: { lat: coords[0], lng: coords[1] },
      zoom: 13,
      scrollwheel: false,
      styles: [
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [{ 'visibility': 'off' }]
        },
        {
          featureType: 'poi',
          stylers: [{ 'visibility': 'off' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.icon',
          stylers: [{ 'visibility': 'off' }]
        },
        {
          featureType: 'transit',
          stylers: [{ 'visibility': 'off' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#d8d7d5' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#c8c8c8' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#b1bdd7' }]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{ color: '#c3dd9f' }]
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'geometry',
          stylers: [{ color: '#e6e5e4' }]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#c8c8c8' }]
        },
      ]
    });

    this.marker = new google.maps.Marker({
      position: { lat: coords[0], lng: coords[1] },
      map: this.map,
      draggable: true,
      title: this.users_data.first_name
    });

  }

  ngOnInit() {
    this.createMap(this.users_data.map);
    this.map.panTo({lat:this.users_data.map[0],lng:this.users_data.map[1]})
  }

}
