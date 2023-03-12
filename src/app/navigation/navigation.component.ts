import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { CURRENT_BREAKPOINT, IS_NAVIGATION_OPEN } from '../events';
import { data } from '../data';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isOpen = false;
  public projects = data;

  @ViewChild('comp') comp!: ElementRef;

  constructor(public $helperService: HelperService) {}

  ngOnInit(): void {
    IS_NAVIGATION_OPEN.pipe(distinctUntilChanged()).subscribe(
      (state) => (this.isOpen = state)
    );

    /*
    CURRENT_BREAKPOINT.pipe(distinctUntilChanged()).subscribe((b) => {
      console.log('log', b);
    });*/
  }

  callme() {
    console.log('Called med');
  }

  onSearchChange(e: Event): void {
    const target = e.target as HTMLTextAreaElement;
    this.projects = data;

    this.projects = this.projects.filter((project) => {
      const p = Object.keys(project);
      console.log('log', p);
    });
    /** 
    this.projects = this.projects.filter(
      (project) => project.title.indexOf(target.value) > -1
    );**/
  }
  scrollToProject(id: any): void {
    const projectId = 'project-' + id.toString();
    const projectElement = document.getElementById(projectId);

    if (projectElement) {
      projectElement.scrollIntoView({
        behavior: 'smooth', // smooth scroll
        block: 'start', // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
      });
    }
  }
}
