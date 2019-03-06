import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
 
  @Input() postTitle: string;
  @Input() postLoveIts: number;
  @Input() postContent: string;
  @Input() postDate: string;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if(this.postLoveIts > 0){
      return 'green';
    } else if(this.postLoveIts < 0) {
      return 'red';
    }
  }

  onLove() {
    this.postLoveIts += 1;
  }

  onHate() {
    this.postLoveIts -= 1;
  }

}
