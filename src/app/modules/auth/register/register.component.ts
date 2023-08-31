import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private location: Location
  ) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25), this.strongPasswordValidations]],
      // company_name: ['', null],
      // fqdn: ['', [this.forbiddenCharactersValidator]],
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

  forbiddenCharactersValidator(control: FormControl): { [key: string]: boolean } | null {
    const forbidden = /[^a-z0-9.-]/.test(control.value);
    return forbidden ? { 'forbiddenCharacters': true } : null;
  }

  onSubmit(){
    if (this.registerForm.invalid) {
      return;
    }
    let data ={
      firstname: this.registerForm.get('first_name')?.value,
      lastname: this.registerForm.get('last_name')?.value,
      // mobile: 0,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value
    }
    console.log(data);
    
    this.apiService.post('user/register',data).subscribe(res=>{
      console.log(res);
      
    })
  }
}
