import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'player-resizer',
  templateUrl: './player-resizer.component.html',
  styleUrls: ['./player-resizer.component.scss']
})
export class PlayerResizerComponent implements OnInit {

  @Input() fullScreen: boolean;
  @Output() toggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit() { }

  togglePlayer() {
    this.toggle.next();
  }
}
