import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  patterns = [/\p{L}/u,/\p{N}/u,/[^\p{L}\p{N}]/u]
  
  length: string = ''
  strength: number = 0
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
    if (value.length >= 8)
      return 'full'
    return 'weak'
  }
  
  validatePassword(value: string) {
    this.length=this.setLength(value)
    this.strength=this.setStrength(value)
  }

}
