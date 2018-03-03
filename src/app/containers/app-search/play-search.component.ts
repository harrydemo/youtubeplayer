import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
/* harry import { Jsonp, Response, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms'; */

@Component({
  selector: 'app-play-search',
  templateUrl: './play-search.component.html',
  styleUrls: ['./play-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaySearchComponent implements OnChanges  {

  @Input() query;
  @Output() queryChange = new EventEmitter<string>();
  @Output() search = new EventEmitter();
  // @Output() typing = new EventEmitter<string>();
  @ViewChild('mediaSearch') mediaSearch;

  // harry searchForm: FormGroup;

  params = {
    hl: 'en',
    ds: 'yt',
    xhr: 't',
    client: 'youtube'
  };

 /*  harry  constructor(private fb: FormBuilder) {
    this.searchForm = fb.group({
      searchInput: this.query
    });
  this.searchForm.valueChanges
      .debounceTime(400)
      .filter(value => !value.hasOwnProperty('isTrusted'))
      .subscribe(formState => {
        this.onQueryChange(formState.searchInput);
      });
  } */

  /* harry ngOnChanges(changes: SimpleChanges) {
    const changedQuery = changes && changes.query;
    if (changedQuery) {
      this.patchSearchInput(changedQuery.currentValue);
    }
  }

  patchSearchInput(searchInput: string) {
    this.searchForm.patchValue({ searchInput }, { emitEvent: false });
  }

  onQueryChange(query: string) {
    this.queryChange.emit(query);
  }

  onSearch() {
    const searchFormState = this.searchForm.value;
    this.search.emit(searchFormState.searchInput);
  }

  handleSelectSuggestion(suggestion: string) {
    this.selectSuggestion(suggestion);
  }

  selectSuggestion(suggestion: string) {
    this.search.emit(suggestion);
  } */
}

