import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'image-blur',
  templateUrl: './image-blur.component.html',
  styleUrls: ['./image-blur.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageBlurComponent {

  @Input() media: GoogleApiYouTubeVideoResource;
  get style() {
    const hasMedia = this.media && this.media.snippet;
    return {
      backgroundImage: hasMedia
        ? `url(${this.extractBestImage(hasMedia.thumbnails as any)})`
        : ''
    };
  }

  extractBestImage(thumbnails: GoogleApiYouTubeThumbnailResource) {
    const quality =
      thumbnails && thumbnails.hasOwnProperty('high') ? 'high' : 'default';
    const hasContent = thumbnails && quality && thumbnails[quality];
    return hasContent ? thumbnails[quality].url : '';
  }
}
