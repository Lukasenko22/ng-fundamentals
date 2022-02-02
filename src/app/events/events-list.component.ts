import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToastrService} from "./common/toastr.service";

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
        <div class="col-md-6" *ngFor="let eventItem of events">
          <event-thumbnail (click)="handleThumbnailClick(eventItem.name)"  [eventDetail]="eventItem"></event-thumbnail>
        </div>
      </div>
    </div>

  `
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService, private toastrService:ToastrService) {
    this.events = [];
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName:any) {
    this.toastrService.successMessage(eventName);
  }
}
