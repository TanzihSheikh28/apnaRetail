import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent {
  rpForm!: FormGroup;
  token:any
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private location: Location
  ) {}
  ngOnInit() {
    this.rpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(){
    if (this.rpForm.invalid) {
      return;
    }
    let data ={
      email: this.rpForm.get('email')?.value,
    }
    this.apiService.put('user/reset-password/'+this.token,data).subscribe((res: any)=>{
      console.log(res);
    })
  }
}
