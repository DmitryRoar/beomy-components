import {Injectable} from '@angular/core';
import {Camera, CameraDirection, CameraResultType, CameraSource} from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  private photosWebviewPath: string | undefined;

  constructor() { }

  public async addNewToGallery(): Promise<void> {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100,
      direction: CameraDirection.Front
    });

    this.photosWebviewPath = capturedPhoto.dataUrl;
  }

  public getPhotosWebviewPath(): string | undefined {
    return this.photosWebviewPath;
  }
}
