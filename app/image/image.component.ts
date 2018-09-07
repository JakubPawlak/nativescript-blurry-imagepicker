import {Component, OnInit} from '@angular/core';
import * as imagepicker from "nativescript-imagepicker";
import {ImageAsset} from "tns-core-modules/image-asset";

@Component({
    moduleId: module.id,
    selector: 'app-image',
    templateUrl: './image.component.html',
})
export class ImageComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    choosePhoto() {
        let context = imagepicker.create({
            mode: 'single',
        });
        this.startSelection(context); // lower SDK versions will grant permission from AndroidManifest file
    }

    startSelection(context) {
        let that = this;

        context
            .authorize()
            .then(() => {
                return context.present();
            })
            .then((selection: ImageAsset[]) => {
                return selection.length > 0 ? selection[0] : null;
            })
            .then((imageAsset: ImageAsset) => {
                console.log('photo chosen');
            })
            .catch(function (e) {
                console.log(e);
            });
    }
}
