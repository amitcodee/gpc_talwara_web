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
        '../../../../assets/images/used/college/h.jpg',
        '../../../../assets/images/used/college/hero.jpg',
        '../../../../assets/images/used/student-activity/1.jpg',
        '../../../../assets/images/used/student-activity/36.jpg',
        '../../../../assets/images/used/student-activity/45.jpg',
        '../../../../assets/images/used/student-activity/68.jpg',
        '../../../../assets/images/used/student-activity/69.jpg',
        '../../../../assets/images/used/student-activity/b.jpg',
        '../../../../assets/images/used/student-activity/c.jpg',
      ],
    },
    {
      tab: 'College Campus',
      images: [
        '../../../../assets/images/used/college/heroo.jpg',
        '../../../../assets/images/used/1.jpg',
      ],
    },
    // Add more tabs as needed
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
