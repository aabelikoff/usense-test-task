import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
  
export class PasswordComponent implements OnInit{
  patterns = [/\p{L}/u,/\p{N}/u,/[^\p{L}\p{N}]/u]
  minLength: number = 8
  length: string = ''
  strength: number = 0 //1-easy, 2-medium, 3-strong
  show: boolean = false
  
  ngOnInit() {
    
  }

  setShow() {
    this.show = !this.show
  }

  setStrength(value: string): number {
   return this.patterns.reduce((counter, pattern) => {
      if (value.match(pattern)) 
        return ++counter
      return counter
    }, 0)
  }

  setLength(value: string): string {
    if (!value.length) 
      return 'empty'
    if (value.length >= this.minLength)
      return 'full'
    return 'weak'
  }
  
  validatePassword(value: string) {
    this.length=this.setLength(value)
    this.strength=this.setStrength(value)
  }
}
