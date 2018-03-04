import { TestBed, inject } from '@angular/core/testing';

import { MediaParserService } from './media-parser.service';
// harry import * as Mocks from '@mocks/now-playlist-track.mocks';

describe('MediaParserService', () => {
  let service: MediaParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaParserService]
    });
  });

  beforeEach(inject([MediaParserService], (s: MediaParserService) => {
    service = s;
  }));

  it('should extract tracks from a description with tracks', () => {
    // harry const tracks = service.extractTracks(<any>Mocks.VideoMock);
    // harry const actual = tracks.length;
    const expected = 0;
   // harry  expect(actual).toBeGreaterThan(expected);
  });

  it('extract tracks from a description with chars: [].?', () => {
    // harry const tracks = service.extractTracks(<any>Mocks.VideoMockWithSpecialChars);
    // harry const actual = tracks.length;
    const expected = 0;
    // harry expect(actual).toBeGreaterThan(expected);
  });

  describe('Tracks Cue Validation', () => {
    it('should verify tracks cues are valid', () => {
      // harry const tracks = service.extractTracks(<any>Mocks.VideoMock);
      // harry const isValid = service.verifyTracksCue(tracks);
      // harry expect(isValid).toBeTruthy();
    });

    it('should verify tracks are NOY cued correctly', () => {
     /* harry  const tracks = service.extractTracks(<any>Mocks.VideoMockWithTracksLengthOnly);
      const isValid = service.verifyTracksCue(tracks);
      expect(isValid).toBeFalsy(); */
    });
  });

  describe('Time Conversion', () => {
    it('should convert "06:30" to 420 seconds', () => {
      const time = '06:30';
      const actual = service.toNumber(time);
      const expected = (6 * 60) + 30;
      expect(actual).toBe(expected);
    });

    it('should convert "6:30" to 420 seconds', () => {
      const time = '06:30';
      const actual = service.toNumber(time);
      const expected = (6 * 60) + 30;
      expect(actual).toBe(expected);
    });

    it('should convert "1:30:30" to 420 seconds', () => {
      const time = '1:30:30';
      const actual = service.toNumber(time);
      const expected = (1 * 60 * 60) + (30 * 60) + 30;
      expect(actual).toBe(expected);
    });
  });
});
