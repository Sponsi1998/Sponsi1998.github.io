import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundMusicService {
  private backgroundMusic = new Audio();
  isMusicPlaying: boolean = true;

  constructor() {
    this.backgroundMusic.volume = 0.5;
    this.backgroundMusic.loop = true;
  }

  setMusicSrc(url: string) {
    this.backgroundMusic.src = url;
    if(this.isMusicPlaying){
      this.backgroundMusic.play();
    }
  }

  toggleMusic() {
    if (this.isMusicPlaying) {
      this.backgroundMusic.pause();
      this.isMusicPlaying = false;

    } else {
      this.backgroundMusic.play();
      this.isMusicPlaying = true;
    }
  }

  setMusicVol(num: number) {
    this.backgroundMusic.volume = num/100;
  }
}
