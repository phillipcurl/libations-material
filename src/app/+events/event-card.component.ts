import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Event, EventService } from './../shared';

@Component({
    moduleId: module.id,
    selector: 'event-card',
    directives: [
        ...ROUTER_DIRECTIVES
    ],
    styles: [`
      :host md-card{
        margin: 25px;
      }
    `],
    template: `
      <div mdl>
        <md-card>
          {{event.name}}
        </md-card>
      </div>
    `
})

export class EventCardComponent {
  @Input() event: Event;
  @Input() isDetail: boolean;
}