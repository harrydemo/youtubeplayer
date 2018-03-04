import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  HostListener
} from '@angular/core';

@Component({
  selector: 'media-info',
  templateUrl: './media-info.component.html',
  styleUrls: ['./media-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaInfoComponent implements OnInit {
  @Input() player: any = {};
  @Input() minimized: GoogleApiYouTubeVideoResource;
  @Output() thumbClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  @HostListener('window:keyup.Escape', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.player.fullscreen.on) {
      this.handleThumbClick();
    }
  }

  handleThumbClick() {
    this.thumbClick.next();
  }

  get _minimized() {
    return !this.minimized.hasOwnProperty('id');
  }
}
