import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Contest } from '../contest';
import { ContestsApiService } from '../contests-api.service';

@Component({
	selector: 'app-form-contest',
	templateUrl: './form-contest.component.html',
	styleUrls: ['./form-contest.component.scss']
})
export class FormContestComponent implements OnInit {
	contest: FormGroup;
	url: string;

	constructor(private contestsApi: ContestsApiService) { 
		this.url = this.contestsApi.apiUrl + 'addContest.php';
	}

	ngOnInit() {
		const currentDate = new Date();
		const formatDate = currentDate.toISOString().substring(0, 10);

		this.contest = new FormGroup({
      		name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      		active: new FormControl(''),
      		date: new FormControl(formatDate, Validators.required),
      		description: new FormControl(''),
      		logo: new FormControl('', Validators.required)
      	})
	}

	onLogoChanged(logoImage: any) {
		this.contest.controls['logo'].setValue(logoImage.fileName);
		this.contest.addControl('base64Image', new FormControl(logoImage.base64Image))
		console.log(this.contest);
	}

	onSubmit() {
		this.contestsApi.saveData(this.url, this.contest.value)
			.subscribe(
        		() => {},
        		error => console.log('Error saving voice'));
	}

}
