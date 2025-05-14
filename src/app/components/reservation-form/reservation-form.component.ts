import {Component, OnInit} from '@angular/core';
import {FormsModule, FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  standalone:true
})
export class ReservationFormComponent implements OnInit {

  public reservationForm: FormGroup = new FormGroup({});


 constructor(private formBuilder: FormBuilder) {

 }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required,Validators.email]],
      roomNumber: ['', Validators.required],
    })
  }

 public onSubmit(){
    if(this.reservationForm.valid){
      console.log(this.reservationForm.value);
    }else{
      console.error('error');
      console.log('test')
    }
 }

}
