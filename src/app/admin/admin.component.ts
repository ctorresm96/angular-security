import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["../common/forms.css"],
})
export class AdminComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      userEmail: ["student@gmail.com", Validators.required],
    });
  }

  loginAsUser() {}
}
