import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  @Input() projects: any = '';
  sizeA = 0;
  sizeB = 0;
  @ViewChild('imageA') imageA: ElementRef | undefined;
  @ViewChild('imageB') imageB: ElementRef | undefined;


  constructor(private $cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const windowWidth = window.innerWidth;
        
        if (entry.target.classList.contains('scale_a')) {
          this.sizeA = Math.floor(entry.target.clientWidth / windowWidth * 100);
        }
        if (entry.target.classList.contains('scale_b')) {
          this.sizeB = Math.floor(entry.target.clientWidth / windowWidth * 100);
        }

        this.$cdr.detectChanges();
      });
    });

    document
      .querySelectorAll('.scale_observer')
      .forEach(node => observer.observe(node));
  }
}
