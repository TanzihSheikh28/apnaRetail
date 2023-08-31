import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private location: Location
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25), this.strongPasswordValidations]],
    });
  }

  strongPasswordValidations(control: FormControl): { [key: string]: boolean } | null {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (control.value) {
      const isValid = strongPasswordRegex.test(control.value);
      return isValid ? null : { 'strongPassword': true };
    }
    return null;
  }

  onSubmit(){
    if (this.loginForm.invalid) {
      return;
    }
    let data ={
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.apiService.post('user/login',data).subscribe(res=>{
      console.log(res);
      
    })
  }
}
