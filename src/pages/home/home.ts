import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileChooserProvider } from '../../providers/file-chooser/file-chooser';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  paths: any[] = [];

  constructor(public navCtrl: NavController, private fileChooser: FileChooserProvider, private file: File) {

  }

  ngOnInit(): void {

  }

  onClick(): void {
    this.paths = [];
    this.fileChooser.open().then(file => {
      try {
        const files = JSON.parse(file); // Multiple Files
        for (let f of files) {
          this.file.resolveLocalFilesystemUrl(f["path"]).then(url => this.paths.push(url.name)).catch((e) => alert("Error: " + e));
        }
      } catch (ex) {
        this.file.resolveLocalFilesystemUrl(file).then(url => this.paths.push(url.name)).catch((e) => alert("Error: " + e));
      }
    }).catch(e => alert("Error: " + e));
  }

}
