import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent {
  fpForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private location: Location
  ) {}
  ngOnInit() {
    this.fpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(){
    if (this.fpForm.invalid) {
      return;
    }
    let data ={
      email: this.fpForm.get('email')?.value,
    }
    this.apiService.post('user/forgot-password',data).subscribe(res=>{
      console.log(res);
    })
  }
}
