import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() projects: any = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  scaleUp(e: any): void {
    console.log('e', e);
    console.log('e', e.target.parentElement.classList.add('sizer'));
    e.target.parentElement.classList.add('sizer');

    console.log('e', e.target.style.width = '100%')
  }

  resetScale(e: any): void {
    console.log('e', e);
    console.log('e', e.target.style.width = '50%')
  }

}
