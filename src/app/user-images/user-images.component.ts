import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-user-images',
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss']
})
export class UserImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(function () {

      $(".heart").on("click", function () {
        $(this).toggleClass("heart-blast");
      });
    });
  }

}
