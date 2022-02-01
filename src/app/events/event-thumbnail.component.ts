import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{eventDetail.name}}</h2>
      <div>Date: {{eventDetail.date}}</div>
      <div>Time: {{eventDetail.time}}</div>
      <div>Price: \${{eventDetail.price}}</div>
      <div>
        <span>Location: {{eventDetail.location.address}}</span>
        <span class="pad-left">{{eventDetail.location.city}}, {{eventDetail.location.country}}</span>
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
}
