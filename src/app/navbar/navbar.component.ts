import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BackgroundMusicService } from '../background-music.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  value: number = 50;
  playPauseButton: string = "";

  constructor(private http: HttpClient, private router: Router, private backgroundMusicService: BackgroundMusicService) { }

  ngOnInit() {}
  //   if(this.backgroundMusicService.isMusicPlaying){
  //     this.playPauseButton = "green";
  //   }
  //   else{
  //     this.playPauseButton = "red";
  //   }
  // }

  // get volumen(){
  //   return this.value;
  // }

  // set volumen(num:number){
  //   this.value = num;
  //   this.backgroundMusicService.setMusicVol(num);
  // }

  // toggleMusic(){
  //   this.backgroundMusicService.toggleMusic();
  //   if(this.backgroundMusicService.isMusicPlaying){
  //     this.playPauseButton = "green";
  //   }
  //   else{
  //     this.playPauseButton = "red";
  //   }
  // }
}
