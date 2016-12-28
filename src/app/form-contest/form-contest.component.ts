import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Contest } from '../contest';

@Component({
	selector: 'app-form-contest',
	templateUrl: './form-contest.component.html',
	styleUrls: ['./form-contest.component.scss']
})
export class FormContestComponent implements OnInit {
	contest: FormGroup;

	constructor() { }

	ngOnInit() {
		const currentDate = new Date();
		const formatDate = currentDate.toISOString().substring(0, 10);

		this.contest = new FormGroup({
      		name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      		active: new FormControl(''),
      		date: new FormControl(formatDate, Validators.required),
      		description: new FormControl(''),
      		logo: new FormControl('')
      	})
	}

	onSubmit() {
		console.log(this.contest.value, this.contest.valid);
	}

}
