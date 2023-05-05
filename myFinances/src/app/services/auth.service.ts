import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class registerService {

  constructor(private http: HttpClient) { }

  onSubmit(form:NgForm){
    if(form.invalid){
      return;
    }
  }
}
