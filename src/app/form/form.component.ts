import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  EASY_PATTERN = /(^\p{L}+$)|(^\p{N}+$)|(^[^\p{L}\p{N}]+$)/u
  MEDIUM_PATTERN = /(^[\p{L}\p{N}]+$)|(^[^\p{L}]+$)|(^[^\p{N}]+$)/u
  STRONG_PATTERN = /(\p{L}+\p{N}+[^\p{L}\p{N}]+)/u;
  
  
  
  defineStrength(password: string) {

    if (password.match(this.EASY_PATTERN))
      return 'easy'
    if (password.match(this.MEDIUM_PATTERN))
      return 'medium'
    if (password.match(this.STRONG_PATTERN))
      return 'strong'
    return ''
  }
 
  
  passwordLength: number = 0;  
  passwordStrength: string = '';
  
  validatePassword(value: any) {
    this.passwordLength = value.length;
    this.passwordStrength = this.defineStrength(value)
    

  }

}
