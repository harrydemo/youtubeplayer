import { Injectable } from '@angular/core';
import { YoutubeApiService } from './youtube-api.service';
import { Authorization } from './authorization.service';
// harry import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

interface IYoutubeVideosInfo {
  items: GoogleApiYouTubeVideoResource[];
}
@Injectable()
export class YoutubeVideosInfo {
  public api: YoutubeApiService;

  constructor(
    // harry private http: HttpClient,
    auth: Authorization
  ) {
    this.api = new YoutubeApiService({
      url: 'https://www.googleapis.com/youtube/v3/videos',
      // harry http: this.http,
      idKey: 'id',
      config: {
        part: 'snippet,contentDetails,statistics'
      }
    }, auth);
  }

  fetchVideoData(mediaId: string) {
   /* harry  return this.api
      .list(mediaId)
      .map(response => response.items[0]); */
  }

  fetchVideosData(mediaIds: string) {
   /* harry return this.api
      .list(mediaIds)
      .map(response => response.items); */
  }
}
