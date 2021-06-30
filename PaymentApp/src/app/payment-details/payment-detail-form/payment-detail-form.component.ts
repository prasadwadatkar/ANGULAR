import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service : PaymentDetailService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    
    this.service.postPaymentDetail().subscribe(
      res => {this.resetForm(form);
      this.toastr.success("Submitted sucessfully","Payment detail register");
      this.service.refreshList();
      },
      err => {console.log(err)}
    );
    }

resetForm(form : NgForm){

  form.form.reset();
  this.service.formdata = new PaymentDetail();
}

  }

