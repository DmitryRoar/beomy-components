import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {UploadImageService} from './upload-image.service';

@Component({
  selector: 'gen-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadImageComponent {

  @Input()
  gender: 'man' | 'woman' = 'man';

  @Output() readonly upload: EventEmitter<string> = new EventEmitter<string>();
  private imagePath?: string;

  get photosWebviewPath(): string {
    return this.imagePath || `assets/img/upload-image/photo-${this.gender}.svg`;
  }

  nameIcon = 'gen-camera';
  status = 'Upload';

  constructor(
    public imageService: UploadImageService,
    private cdr: ChangeDetectorRef,
  ) {
  }


  async addPhotoToGallery(): Promise<void> {
    try {
      await this.imageService.addNewToGallery();
      this.imagePath = this.imageService.getPhotosWebviewPath();
      this.upload.emit(this.photosWebviewPath);
      this.status = 'Change';
      this.nameIcon = 'gen-camera-edit';
      this.cdr.detectChanges();
    } catch (err) {
    }
  }

}
