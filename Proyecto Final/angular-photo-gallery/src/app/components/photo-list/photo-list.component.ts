import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../../services/photo.service'

import { Router } from '@angular/router'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos = [];

  constructor(
    private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(
        res => {
          this.photos = res;
        },
        err => console.log(err)
      )
  }
  selectedCard(id: string){
    this.router.navigate(['/photos', id]);
  }
}
