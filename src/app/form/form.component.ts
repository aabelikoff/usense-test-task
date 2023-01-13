import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  EASY_PATTERN = /(^\p{L}+$)|(^\p{N}+$)|(^[^\p{L}\p{N}]+$)/u
  MEDIUM_PATTERN = /(^[\p{L}\p{N}]+$)|(^[^\p{L}]+$)|(^[^\p{N}]+$)/u
  STRONG_PATTERN = /(\p{L}+\p{N}+[^\p{L}\p{N}]+)/u
  
  // password = {
  //   length: '',
  //   strength: ''
  // }
  
  length = ''
  strength = ''

  defineStrength(value:string) {
    if (value.match(this.EASY_PATTERN))
      return 'easy'
    if (value.match(this.MEDIUM_PATTERN))
      return 'medium'
    if (value.match(this.STRONG_PATTERN))
      return 'strong'
    return ''
  }

  defineLength(value: string) {
    if (!value.length) 
      return 'empty'
    if (value.length >= 8)
      return 'strong'
    return 'easy'
  }
  
  validatePassword(value: any) {
    this.length = this.defineLength(value)
    this.strength = this.defineStrength(value)
    console.log(this.length + '  ' + this.strength);
    console.log(value)
    console.log(value.match(this.STRONG_PATTERN))
  }

}
