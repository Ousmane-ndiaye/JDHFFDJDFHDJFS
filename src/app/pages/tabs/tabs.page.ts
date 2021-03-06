import { MsalService } from 'src/app/services/msal.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
	selector: 'app-tabs',
	templateUrl: 'tabs.page.html',
	styleUrls: [ 'tabs.page.scss' ]
})
export class TabsPage implements OnInit {
	currentImage: any;
	name: string;
	constructor(private camera: Camera, private msalService: MsalService) {}

	ngOnInit() {
		const user = this.msalService.getUser();
		this.name = user.name;
	}

	takePicture() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		};

		this.camera.getPicture(options).then(
			(imageData) => {
				this.currentImage = 'data:image/jpeg;base64,' + imageData;
			},
			(err) => {
				// Handle error
				console.log('Camera issue:' + err);
			}
		);
	}
}
