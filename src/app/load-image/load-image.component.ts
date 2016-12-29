import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-load-image',
	templateUrl: './load-image.component.html',
	styleUrls: ['./load-image.component.scss']
})
export class LoadImageComponent implements OnInit {
	public base64Image: string;
	public fileName: string;
	public phrase: string; 
	public loadPhrase: string;
	@Output() onLogoChanged = new EventEmitter<string>();

	constructor() { 
		this.loadPhrase = 'Загрузить логотип';
	}

	ngOnInit() {
		this.phrase = this.loadPhrase;
	}

	onChange(event) {
		const file = event.srcElement.files[0];

		let reader = new FileReader();
        reader.onload = () => {
            this.base64Image = 'url(' + reader.result +')';
        };

        if (file.type.match(/image.*/)) {
			reader.readAsDataURL(file);
			this.fileName = file.name;
			this.phrase = 'Загрузить новый логотип';
		} else {
			this.base64Image = '';
			this.fileName = '';
			this.phrase = `Неверный тип файла! ${this.loadPhrase}`;
		}

		this.onLogoChanged.emit(this.fileName);
	}

}
