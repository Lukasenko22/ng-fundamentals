import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{eventDetail?.name}}</h2>
      <div>Date: {{eventDetail?.date}}</div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="eventDetail?.time">Time: {{eventDetail?.time}}
        <span *ngSwitchCase="'8:00 am'"> (Early Start)</span>
        <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
        <span *ngSwitchDefault> (Normal Start)</span>
      </div>
      <div>Price: \${{eventDetail?.price}}</div>
      <div *ngIf="eventDetail?.location">
        <span>Location: {{eventDetail?.location?.address}}</span>
        <span class="pad-left">{{eventDetail?.location?.city}}, {{eventDetail?.location?.country}}</span>
      </div>
      <div *ngIf="eventDetail?.onlineUrl">
            Online URL: {{eventDetail?.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .thumbnail {
      min-height: 220px;
    }
    .pad-left {
      margin-left: 10px;
    }
    .well div {
      color: #bbb;
    }
  `]
})
export class EventThumbnailComponent {
  @Input() eventDetail: any

  getStartTimeClass() : any {
    if (this.eventDetail && this.eventDetail.time === '8:00 am'){
      return ["green", "bold"];
      // OR you can use return "green bold", or you can use
      // return {green: isEarlyEvent, bold: isEarlyEvent} and isEarlyEvent is variable with result of
      // condition this.eventDetail && this.eventDetail.time === '8:00 am'
    }
    return [];
  }
  getStartTimeStyle() : any {
    if (this.eventDetail && this.eventDetail.time === '8:00 am'){
      return {color: '#003300', 'font-weight': 'bold'}
    }
    return {};
  }
}
