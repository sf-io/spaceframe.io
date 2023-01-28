import {Component, OnInit} from '@angular/core';
import {StateService} from "../state.service";

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.scss']
})
export class NavigationItemsComponent implements OnInit {
  toggle = false;

  constructor(
    private $stateService: StateService
  ) {
  }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.toggle = !this.toggle;
    this.$stateService.showModal$.next(this.toggle);
  }

}
