import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 // Required for Angular's directives
 

import { EmployeeService } from './employee.service';

@NgModule({
  
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule, 
    CommonModule // Required for Angular's directives
  ],
  providers: [EmployeeService]
})
export class AppModule { }