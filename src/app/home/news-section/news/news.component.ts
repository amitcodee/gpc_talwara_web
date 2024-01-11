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
      "id": "first_news",
      "title": "Admission Process Started",
      "imagePath": "../../../assets/images/used/addmision/2.webp",
      "description": "Admission process for session 2023-24 started",
      "link": "https://eakadamik.in/psbte_2022/",
      "first_punjabi_title": "ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਹੋ ਗਈ ਹੈ",
      "first_punjabi_description":"ਸੈਸ਼ਨ 2023-24 ਲਈ ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ",
      "first_hindi_title":"प्रवेश प्रक्रिया शुरू हो गई है",
      "first_hindi_description":"सत्र 2023-24 के लिए प्रवेश प्रक्रिया शुरू"
    },
    {
      "id": "second_news",
      "title": "Admission Helpline Desk",
      "imagePath": "../../../assets/images/used/addmision/3.webp",
      "description": "ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਲਈ ਸੰਪਰਕ: 9501107354, 9501648500, 7009110372, 8437700636, 9417433471,7696889004",
      "link": "/second-news",
      "second_punjabi_title":"ਦਾਖਲਾ ਹੈਲਪਲਾਈਨ ਡੈਸਕ",
      "second_punjabi_description":"ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਲਈ ਸੰਪਰਕ: 9501107354, 9501648500, 7009110372, 8437700636, 9417433471,7696889004",
      "second_hindi_title":"प्रवेश हेल्पलाइन डेस्क",
      "second_hindi_description":"प्रवेश प्रक्रिया के लिए संपर्क करें: 9501107354, 9501648500, 7009110372, 8437700636, 9417433471,7696889004",


     

    },
    {
      "id": "third_news",
      "title": "third-news",
      "imagePath": "../../../assets/images/used/addmision/5.webp",
      "description": "Admission process for session 2023-24 started.",
      "link": "/third-news",
      "third_punjabi_title":"ਤੀਜੀ ਖਬਰ",
      "third_punjabi_description":"ਸੈਸ਼ਨ 2023-24 ਲਈ ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਹੋ ਗਈ ਹੈ।",
      "third_hindi_title":"तीसरी खबर",
      "third_hindi_description":"सत्र 2023-24 के लिए प्रवेश प्रक्रिया शुरू हो गई है।",


    },
    {
      "id": "fourth_news",
      "title": "fourth News",
      "imagePath": "../../../assets/images/used/addmision/7.webp",
      "description": "Admission process for session 2023-24 started.",
      "link": "/fourth-news",
      "fourth_punjabi_title":"ਚੌਥੀ ਖਬਰ",
      "fourth_punjabi_description":"ਸੈਸ਼ਨ 2023-24 ਲਈ ਦਾਖਲਾ ਪ੍ਰਕਿਰਿਆ ਸ਼ੁਰੂ ਹੋ ਗਈ ਹੈ।",
      "fourth_hindi_title":"चौथी खबर",
      "fourth_hindi_description":"सत्र 2023-24 के लिए प्रवेश प्रक्रिया शुरू हो गई है।"

    }
  ];
}