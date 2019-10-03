import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plugin, IonicNativePlugin, Cordova } from '@ionic-native/core';

/*
  Generated class for the FileChooserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Plugin({
  pluginName: 'cordova-plugin-filechooser', // should match the name of the wrapper class
  plugin: 'cordova-plugin-filechooser', // NPM package name
  pluginRef: 'fileChooser', // name of the object exposed by the plugin
  repo: 'https://github.com/sethu1012/cordova-filechooser.git', // plugin repository URL
  platforms: ['Android'] // supported platforms
})
@Injectable()
export class FileChooserProvider extends IonicNativePlugin {

  @Cordova()
  open(): Promise<string> {
    return;
  }

}
