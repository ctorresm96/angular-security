import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css", "../common/forms.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      email: ["test@gmail.com", Validators.required],
      password: ["test", Validators.required],
      confirm: ["test", Validators.required],
    });
  }

  ngOnInit() {}

  signUp() {
    const val = this.signupForm.value;
    if (this.signupForm.valid) {
      this.authService.signUp(val.email, val.password).subscribe((res) => {});
    }
    console.log(val);
  }
}
