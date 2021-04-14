import {NgModule} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  exports: []
})
export class IconRegistryModule {

  private folderPathIcons = '/assets/icons';
  private globalPrefix = 'gen-';

  private icons: {name: string, path: string}[] = [
    {
      name: 'camera',
      path: 'upload-image'
    },
    {
      name: 'camera-edit',
      path: 'upload-image'
    },
    {
      name: 'send',
      path: 'chats'
    },
    {
      name: 'select-closed',
      path: 'select'
    }
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.initRegistry();
  }

  private initRegistry(): void {
    this.icons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        `${this.globalPrefix}${icon.name}`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.folderPathIcons}/${icon.path}/${icon.name}.svg`)
      );
    });
  }
}
