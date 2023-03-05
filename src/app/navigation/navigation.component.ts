import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { IS_NAVIGATION_OPEN } from '../events';
import { data } from '../data';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  isOpen = false;
  public projects = data;

  @ViewChild('comp') comp!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    IS_NAVIGATION_OPEN.pipe(distinctUntilChanged()).subscribe(
      (state) => (this.isOpen = state)
    );
  }

  ngAfterViewInit() {
    console.log('comp', this.comp.nativeElement);
  }

  onSearchChange(e: Event): void {
    const target = e.target as HTMLTextAreaElement;
    this.projects = data;

    this.projects = this.projects.filter(
      (project) => project.title.indexOf(target.value) > -1
    );
  }
  scrollToProject(id: any): void {
    const project = 'project-' + id.toString();
    console.log('project', project);

    const p = document.getElementById(project);

    console.log('p', p);

    if (p) {
      p.scrollIntoView({
        behavior: 'smooth', // smooth scroll
        block: 'start', // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
      });
    }
  }
}
