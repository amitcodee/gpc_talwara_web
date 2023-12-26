import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-picture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-picture.component.html',
  styleUrls: ['./event-picture.component.scss'],
})
export class EventPictureComponent {
  openImageInNewTab(_t14: string) {
    throw new Error('Method not implemented.');
  }
  activeTab: string = 'all';
  lightboxImage: string | null = null;

  imageData = [
    { tab: 'All Collections', images: [] },
    {
      tab: 'Student Activites ',
      images: [
        '../../../../assets/images/used/college/h.jpg',
        '../../../../assets/images/used/college/hero.jpg',
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

  constructor() {
    this.changeTab('All Collections');
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
}
