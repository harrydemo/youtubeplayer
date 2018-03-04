import { Injectable } from '@angular/core';
import { Authorization } from './authorization.service';
/* harry import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment'; */

interface YoutubeApiServiceOptions {
  url?: string;
  // harry http?: HttpClient;
  idKey?: string;
  authService?: Authorization;
  config?: any;
  authorize?: boolean;
}

const defaultParams = {
  'part': 'snippet,contentDetails',
  // harry 'key': environment.youtube.API_KEY,
  'maxResults': '50',
  'pageToken': ''
};

// @Injectable()
export class YoutubeApiService {
  url: string;
  // harry http: HttpClient;
  idKey: string;
  authorize = false;
  isSearching = false;
  // harry params: HttpParams;
  nextPageToken: string;

  constructor(options: any, private authService?: Authorization) {
    this.resetConfig();
    if (authService) {
      this.authorize = true;
    }
    if (options) {
      this.url = options.url;
      // harry this.http = options.http;
      this.idKey = options.idKey || '';
      if (options.config) {
        // harry this.setConfig(options.config);
      }
    }
  }

/* harry   setConfig(options) {
    this.params = Object.keys(options).reduce((params, option) => {
      return params.set(option, options[option]);
    }, this.params);
  } */

  hasToken(): boolean {
    return this.authService && this.authService.accessToken.length > 0;
  }

  resetConfig() {
    // harry this.params = new HttpParams({ fromObject: defaultParams });
  }

  getList() {
    this.isSearching = true;
    const options = {
      // harry params: this.params,
      headers: this.createHeaders(),
    };
    // harry return this.http.get(this.url, options);
  }

  list(id) {
    if (this.idKey) {
      // harry this.setConfig({ [this.idKey]: id });
      // this.params[this.idKey] = id;
    }

    this.isSearching = true;
    const options = {
      // harry params: this.params,
      headers: this.createHeaders()
    };
  /* harry   return this.http.get(this.url, options)
      .map((response: any) => {
        this.nextPageToken = response.nextPageToken;
        this.isSearching = false;
        return response;
      }); */
  }

  fetchNextPage() {
    if (!this.isSearching) {
      // this.params['pageToken'] = this.nextPageToken;
      this.setPageToken(this.nextPageToken);
    }
  }

  resetPageToken() {
    // this.params['pageToken'] = '';
    this.setPageToken('');
  }

  setPageToken(pageToken) {
    // harry this.setConfig({ pageToken });
  }

  deletePageToken() {
    /* harry  this.params = this.params.delete('pageToken');
    console.log('remove pageToken', this.params.toString()); */
  }

  createHeaders() {
    const accessToken = this.authService && this.authService.accessToken;
    const headers = {};
    if (accessToken && this.authorize) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return headers;
  }
}
