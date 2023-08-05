import { ChangeDetectionStrategy, Component, Input, OnChanges, Output, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnDestroy(): void {
    console.log('On Destroy is called');
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
