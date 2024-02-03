import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language/language.service';
import { TextSizeService } from '../../../services/text-size/text-size.service';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-event-picture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-picture.component.html',
  styleUrls: ['./event-picture.component.scss'],
})
export class EventPictureComponent implements OnInit {
  isDarkMode = false;
  showFixedBottomDiv = false;
  languageOptions: string[] = ['English', 'ਪੰਜਾਬੀ', 'हिंदी'];

  activeTab: string = 'All Collections'; // Set the default active tab
  lightboxImage: string | null = null;

  imageData = [
    { tab: 'All Collections', images: [] },
    {
      tab: 'Student Activities',
      images: [
        '../../../../assets/images/used/activites/2.jpg',
        '../../../../assets/images/used/gallery/26.jpg',
        '../../../../assets/images/used/gallery/23.jpg',
        '../../../../assets/images/used/gallery/12.jpg',
        '../../../../assets/images/used/gallery/10.jpg',
        '../../../../assets/images/used/gallery/8.jpg',
        '../../../../assets/images/used/gallery/6.jpg',
        '../../../../assets/images/used/gallery/4.jpg',
        '../../../../assets/images/used/gallery/3.jpg',
        '../../../../assets/images/used/gallery/1.jpg',
      ],
    },
    {
      tab: 'College Campus',
      images: [
        '../../../../assets/images/used/gallery/5.jpg',
        '../../../../assets/images/used/gallery/7.jpg',
        '../../../../assets/images/used/gallery/9.jpg',
        '../../../../assets/images/used/gallery/11.jpg',
        '../../../../assets/images/used/gallery/14.jpg',
        '../../../../assets/images/used/gallery/15.jpg',
        '../../../../assets/images/used/gallery/16.jpg',
        '../../../../assets/images/used/gallery/21.jpg',
        '../../../../assets/images/used/gallery/18.jpg',
        '../../../../assets/images/used/gallery/19.jpg',
        '../../../../assets/images/used/gallery/17.jpg',
        '../../../../assets/images/used/gallery/22.jpg',
        '../../../../assets/images/used/gallery/34.jpg',
        '../../../../assets/images/used/gallery/35.jpg',
        '../../../../assets/images/used/gallery/36.jpg',

      ],
    },
    // Add more tabs as needed
    {
      tab: 'Labs',
      images: [
        '../../../../assets/images/used/gallery/37.jpg',
        '../../../../assets/images/used/gallery/38.webp',
        '../../../../assets/images/used/gallery/39.jpg',
        '../../../../assets/images/used/gallery/40.jpg',
        '../../../../assets/images/used/gallery/41.jpg',
        '../../../../assets/images/used/gallery/42.jpg',
        '../../../../assets/images/used/gallery/43.jpg',
        '../../../../assets/images/used/gallery/44.jpg',
        '../../../../assets/images/used/gallery/45.jpg',
        '../../../../assets/images/used/gallery/46.jpg',
        '../../../../assets/images/used/gallery/47.jpg',
        '../../../../assets/images/used/gallery/48.jpg',
        '../../../../assets/images/used/gallery/49.jpg',
        '../../../../assets/images/used/gallery/50.jpg',
        '../../../../assets/images/used/gallery/51.jpg',
        '../../../../assets/images/used/gallery/52.jpg',
        '../../../../assets/images/used/gallery/53.jpg',
        '../../../../assets/images/used/gallery/54.jpg',
        '../../../../assets/images/used/gallery/55.webp',


      ],
    },
    {
      tab: 'Training',
      images: [
        '../../../../assets/images/used/gallery/55.webp',
        '../../../../assets/images/used/gallery/56.jpg',
        '../../../../assets/images/used/gallery/57.jpg',
        '../../../../assets/images/used/gallery/51.jpg',
        '../../../../assets/images/used/gallery/52.jpg',
        '../../../../assets/images/used/gallery/39.jpg',
        '../../../../assets/images/used/gallery/44.jpg',
        '../../../../assets/images/used/gallery/30.jpg',
        '../../../../assets/images/used/gallery/31.jpg',
        '../../../../assets/images/used/gallery/32.jpg',
        '../../../../assets/images/used/gallery/42.jpg',
        '../../../../assets/images/used/gallery/43.jpg',
        '../../../../assets/images/used/gallery/50.jpg',



      ]
    }
  ];

  constructor(
    private textSizeService: TextSizeService,
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
      // Update component styles or perform other actions based on darkMode
    });

    // Set the default active tab to 'All Collections' and load images
    this.changeTab(this.activeTab);
  }

  openImageInNewTab(_t14: string) {
    throw new Error('Method not implemented.');
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
  }

  getImageList(): string[] {
    return this.activeTab === 'All Collections'
      ? this.getAllImages()
      : this.getSelectedTabImages();
  }

  private getAllImages(): string[] {
    return this.imageData.reduce(
      (allImages: string[], tabData) => allImages.concat(tabData.images || []),
      []
    );
  }

  private getSelectedTabImages(): string[] {
    const activeTabData = this.imageData.find(
      (data) => data.tab === this.activeTab
    );
    return activeTabData ? activeTabData.images || [] : [];
  }

  getTextSize(): number {
    return this.textSizeService.getTextSize();
  }

  getCurrentLanguage() {
    return this.languageService.currentLanguage;
  }
}
