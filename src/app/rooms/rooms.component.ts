import { Component, ViewChild, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { Room, RoomList } from './rooms'
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  hotelName: string = 'Hilton Hotel';
  numberOfRooms: number = 20;
  hideRooms: boolean = false;
  selectedRoom!: RoomList;
  title: string = '---Rooms List---';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
    temp: null,
  }

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'AC, TV, Wifi',
        price: 500,
        photos: 'https://www.google.com',
        checkinTime: new Date('28-Jul-2023'),
        checkoutTime: new Date('29-Jul-2023'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'AC, TV, Wifi',
        price: 1000,
        photos: 'https://www.google.com',
        checkinTime: new Date('28-Jul-2023'),
        checkoutTime: new Date('29-Jul-2023'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private Room',
        amenities: 'AC, TV, Wifi',
        price: 10000,
        photos: 'https://www.google.com',
        checkinTime: new Date('28-Jul-2023'),
        checkoutTime: new Date('29-Jul-2023'),
        rating: 2.6,
      },
    ]
  }

  ngDoCheck(): void {
    console.log("Do check when anything in app changes...");
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = '***Rooms List***';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Private Room',
      amenities: 'AC, TV, Wifi, Fridge',
      price: 1000,
      photos: 'https://www.google.com',
      checkinTime: new Date('28-Jul-2023'),
      checkoutTime: new Date('29-Jul-2023'),
      rating: 8.6,
    }

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
