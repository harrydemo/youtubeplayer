import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation,
  AfterViewChecked,
  NgZone,
  SimpleChanges
} from '@angular/core';

/* harry import * as NowPlaylist from '@store/now-playlist';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { flyOut } from '@shared/animations/fade-in.animation';
import { isNewChange } from '@shared/utils/data.utils'; */

@Component({
  selector: 'now-playlist',
  // harry animations: [flyOut],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './now-playlist.component.html',
  styleUrls: ['./now-playlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NowPlaylistComponent implements OnChanges, AfterViewChecked {

  // harry @Input() playlist: NowPlaylist.INowPlaylist;
  // harry @Output() select = new EventEmitter<GoogleApiYouTubeVideoResource>();
  @Output()
  selectTrack = new EventEmitter<{
    time: string;
    // harry media: GoogleApiYouTubeVideoResource;
  }>();
  // @Output() sort = new EventEmitter<GoogleApiYouTubeSearchResource>();
  // harry @Output() remove = new EventEmitter<GoogleApiYouTubeVideoResource>();

  public activeTrackElement: HTMLUListElement;
  public hasActiveChanged = false;

  constructor(public zone: NgZone) { }

  ngAfterViewChecked() {
    if (this.hasActiveChanged && this.activeTrackElement) {
      this.zone.runOutsideAngular(() => this.scrollToActiveTrack());
    }
  }

  ngOnChanges({ activeId }: SimpleChanges) {
    if (activeId) {
      // harry this.hasActiveChanged = isNewChange(activeId);
    }
  }

  scrollToActiveTrack() {
    if (this.activeTrackElement) {
      this.activeTrackElement.scrollIntoView();
    }
  }

  /* harry selectVideo(media: GoogleApiYouTubeVideoResource) {
    this.select.emit(media);
  }

  removeVideo(media: GoogleApiYouTubeVideoResource) {
    this.remove.emit(media);
  }

  sortVideo(media: GoogleApiYouTubeVideoResource) {
    // this.sort.next(media);
  } */

  isActiveMedia(mediaId: string, trackElement: HTMLUListElement) {
   /* harry  const isActive = this.playlist.selectedId === mediaId;
    if (isActive) {
      this.activeTrackElement = trackElement;
    }
    return isActive; */
  }

  selectTrackInVideo(trackEvent: { time; media }) {
    this.selectTrack.emit(trackEvent);
  }
}
