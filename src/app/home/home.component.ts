import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.homeForm = this.formBuilder.group({
  		name: "",
  		alterEgo: ""
  	});
  }

  sampleFunction() {
  	alert("asdasdsa");
  }

}
  