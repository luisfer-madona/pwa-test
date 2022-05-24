import { Component, OnInit } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
videos=[
  {
    video:'9kYZQijOvlQ'
  },
  {
    video:'1yER_ZWAXHE'
  }
];



  constructor(  
    ) {
    
   }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  

}
