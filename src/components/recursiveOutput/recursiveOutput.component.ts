import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'recursive-output',
  templateUrl: 'recursiveOutput.component.html'
})
export class RecursiveOutpuutComponent {
  @Input() depth: number;

  @Input() cb: Function;
  @Output() clicked = new EventEmitter<any>();

  doCbFunction: Function;

  constructor() {
    this.doCbFunction = ($event, depth) => this.cbFunction($event, depth);
  }

  deepClick($event) {
    console.log('Clicked Depth: ', this.depth);
    this.cb($event, this.depth);
    this.clicked.emit({event: $event, depth: this.depth});
  }

  cbFunction($event, depth) {
    console.log(new Date().getTime(), 'CB', this.depth, depth, $event);
    this.cb($event, this.depth);
  }

  onClicked(data: any) {
    console.log(new Date().getTime(), 'CLICKED', this.depth, data.depth, data.$event);
    this.clicked.emit({$event: data, depth: this.depth});
  }
}