import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.page.html',
  styleUrls: ['./ui2.page.scss'],
})
export class Ui2Page implements OnInit {
  objList: { title: string; subTitle: string; img: string }[] = [
    {
      title: 'Title 1',
      subTitle: 'sasdas 1',
      img: 'assets/icons/001-brain.png'
    },
    {
      title: 'Title 2',
      subTitle: 'sasdas 1',
      img: 'assets/icons/002-bulb-6.png'
    },
    {
      title: 'Title 3',
      subTitle: 'sasdas 1',
      img: 'assets/icons/003-rocket.png'
    },
    {
      title: 'Title 4',
      subTitle: 'sasdas 1',
      img: 'assets/icons/004-hot-air-balloon.png'
    },
    {
      title: 'Title 3',
      subTitle: 'sasdas 1',
      img: 'assets/icons/006-sprout.png'
    },
    {
      title: 'Title 4',
      subTitle: 'sasdas 1',
      img: 'assets/icons/007-head.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
