import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'hotelinventoryapp';
  role = 'Admin';

  // @ViewChild('name', { static: true}) name !: ElementRef;

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngOnInit(): void {
    // this.name.nativeElement.innerText = 'Hilton Hotel';
  }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 50;
  }
}
