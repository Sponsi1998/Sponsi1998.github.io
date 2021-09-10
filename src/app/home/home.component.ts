import { Component, OnInit, ViewChild, ElementRef, Directive } from '@angular/core';
import { BackgroundMusicService } from '../background-music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@ViewChild('videoPlayer', {static: true}) 

export class HomeComponent implements OnInit {


  constructor(private backgroundMusicService: BackgroundMusicService) {
    this.backgroundMusicService.setMusicSrc("../../assets/sounds/Homesound.mp3");
  }

  ngOnInit() {
  }
}
