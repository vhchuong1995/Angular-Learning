import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
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
  ];

  constructor() { }

  getRooms() {
    return this.roomList;
  }
}
