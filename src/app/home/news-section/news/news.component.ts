// src/app/news/news.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  styleUrls: ['./news.component.scss'],
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
})
export class NewsComponent {
  newsList = [
    {
      "id": "first_news",
      "title": "Admission Process Started",
      "imagePath": "../../../assets/images/used/addmision/2.webp",
      "description": "Admission process for session 2023-24 started",
      "link": "https://eakadamik.in/psbte_2022/"
    },
    {
      "id": "second_news",
      "title": "Admission Helpline Desk",
      "imagePath": "../../../assets/images/used/addmision/3.webp",
      "description": "Contact for admission process: 9501107354, 9501648500, 7009110372, 8437700636, 9417433471,7696889004",
      "link": "/second-news"

    },
    {
      "id": "third_news",
      "title": "third-news",
      "imagePath": "../../../assets/images/used/addmision/5.webp",
      "description": "Admission process for session 2023-24 started.",
      "link": "/third-news"


    },
    {
      "id": "fourth_news",
      "title": "fourth News",
      "imagePath": "../../../assets/images/used/addmision/7.webp",
      "description": "Admission process for session 2023-24 started.",
      "link": "/fourth-news"

    }
  ];

  selectedNews: any;
imagePath: any;

  ngOnInit(): void {
    // Set the selectedNews to the first news in the newsList array
    this.selectedNews = this.newsList[0];
  }

  selectNews(news: any): void {
    this.selectedNews = news;
  }
}
