import { Component, OnInit, Output, EventEmitter } from '@angular/core';

class LogoImage {
	fileName: string;
	base64Image: string;

	constructor() {}
}

@Component({
	selector: 'app-load-image',
	templateUrl: './load-image.component.html',
	styleUrls: ['./load-image.component.scss']
})
export class LoadImageComponent implements OnInit {
	public base64Image: string;
	public file;
	public phrase: string; 
	public loadPhrase: string;
	@Output() onLogoChanged = new EventEmitter<any>();

	constructor() { 
		this.loadPhrase = 'Загрузить логотип';
	}

	ngOnInit() {
		this.phrase = this.loadPhrase;
	}

	onChange(event) {
		this.file = event.srcElement.files[0];
		let logoImage = new LogoImage();

		let reader = new FileReader();

        if (this.file.type.match(/image.*/)) {
			reader.readAsDataURL(this.file);
			this.phrase = 'Загрузить новый логотип';
			reader.onload = () => {
	            this.base64Image = 'url(' + reader.result +')';
	            logoImage.base64Image = reader.result;
	            logoImage.fileName = this.file.name;
	            this.onLogoChanged.emit(logoImage);
        	};
		} else {
			this.base64Image = '';
			this.phrase = `Неверный тип файла! ${this.loadPhrase}`;
			this.onLogoChanged.emit('');
		}

	}

}
