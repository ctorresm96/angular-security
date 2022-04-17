import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css", "../common/forms.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ["test@gmail.com", Validators.required],
      password: ["Password10", Validators.required],
      confirm: ["Passdword10", Validators.required],
    });
  }

  ngOnInit() {}

  signUp() {
    const val = this.signupForm.value;
    console.log(val);
  }
}
