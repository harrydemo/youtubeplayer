import { Component, OnInit } from '@angular/core';

// harry import { AppApi } from '@api/app.api';

@Component({
  selector: 'app-brand',
  templateUrl: './app-brand.component.html',
  styleUrls: ['./app-brand.component.scss']
})
export class AppBrandComponent implements OnInit {

  // harry constructor(private appApi: AppApi) { }
  ngOnInit() { }

  toggleSidebar() {
    // harry return this.appApi.toggleSidebar();
  }
}
