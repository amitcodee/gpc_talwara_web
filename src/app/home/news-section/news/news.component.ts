import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language/language.service';
import { TextSizeService } from '../../../services/text-size/text-size.service';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-news',
  styleUrls: ['./news.component.scss'],
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  isDarkMode = false;
  showFixedBottomDiv = false;
  languageOptions: string[] = ['English', 'ਪੰਜਾਬੀ', 'हिंदी'];
  selectedNews: any;
  imagePath: any;
link: any;

  constructor(
    private textSizeService: TextSizeService,
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
    });

    this.selectedNews = this.newsList[0];
  }

  getTextSize(): number {
    return this.textSizeService.getTextSize();
  }

  getCurrentLanguage() {
    return this.languageService.currentLanguage;
  }

  selectNews(news: any): void {
    this.selectedNews = news;
  }
  newsList = [
    {
      "heading":"Latest News And Events",
      "heading_punjabi":"ਤਾਜ਼ਾ ਖ਼ਬਰਾਂ ਅਤੇ ਸਮਾਗਮ",
      "heading_hindi":"नवीनतम समाचार और घटनाएँ",
    },
    {
      "id": "first_news",
      "title": "Admission Process Started",
      "description": "Admission process for session 2023-24 started",
      "link_explore":"Explore More",
      "punjabi_title": "ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਹੋ ਗਈ ਹੈ",
      "punjabi_description":"ਸੈਸ਼ਨ 2023-24 ਲਈ ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ",
      "punjabi_link_explore":"ਹੋਰ ਪੜਚੋਲ ਕਰੋ",
      "hindi_title":"प्रवेश प्रक्रिया शुरू हो गई है",
      "hindi_description":"सत्र 2023-24 के लिए प्रवेश प्रक्रिया शुरू",
      "hindi_link_explore":"और ज्यादा खोजें",
      "imagePath": "../../../assets/images/used/addmision/2.webp",
      "link": "https://eakadamik.in/psbte_2022/",
    },
    {
      "id": "second_news",
      "title": "Admission Helpline Desk",
      "description": "ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਲਈ ਸੰਪਰਕ: 9501107354, 9501648500, 7009110372, 8437700636, 9417433471,7696889004",
      "punjabi_title":"ਦਾਖਲਾ ਹੈਲਪਲਾਈਨ ਡੈਸਕ",
      "punjabi_description":"ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਲਈ ਸੰਪਰਕ: 9501107354, 9501648500, 7009110372, 8437700636, 9417433471,7696889004",
      "hindi_title":"प्रवेश हेल्पलाइन डेस्क",
      "hindi_description":"प्रवेश प्रक्रिया के लिए संपर्क करें: 9501107354, 9501648500, 7009110372, 8437700636, 9417433471,7696889004",
      "imagePath": "../../../assets/images/used/addmision/3.webp",
      "link": "/second-news",
    },
    {
      "id": "third_news",
      "title": "third-news",
      "imagePath": "../../../assets/images/used/addmision/5.webp",
      "description": "Admission process for session 2023-24 started.",
      "link": "/third-news",
      "punjabi_title":"ਤੀਜੀ ਖਬਰ",
      "punjabi_description":"ਸੈਸ਼ਨ 2023-24 ਲਈ ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਹੋ ਗਈ ਹੈ।",
      "hindi_title":"तीसरी खबर",
      "hindi_description":"सत्र 2023-24 के लिए प्रवेश प्रक्रिया शुरू हो गई है।",


    },
    {
      "id": "fourth_news",
      "title": "fourth News",
      "imagePath": "../../../assets/images/used/addmision/7.webp",
      "description": "Admission process for session 2023-24 started.",
      "link": "/fourth-news",
      "punjabi_title":"ਚੌਥੀ ਖਬਰ",
      "punjabi_description":"ਸੈਸ਼ਨ 2023-24 ਲਈ ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਹੋ ਗਈ ਹੈ।",
      "hindi_title":"चौथी खबर",
      "hindi_description":"सत्र 2023-24 के लिए प्रवेश प्रक्रिया शुरू हो गई है।"

    }
  ];
}