import {Component, OnInit} from '@angular/core';
import {StateService} from "../state.service";
import {distinctUntilChanged} from "rxjs";
import {DataService} from "../data.service";

@Component({
  selector: 'app-modal-navigation',
  templateUrl: './modal-navigation.component.html',
  styleUrls: ['./modal-navigation.component.scss']
})
export class ModalNavigationComponent implements OnInit {
  showModal = false;
  sliders: any;

  constructor(
    private $stateService: StateService,
    private $dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.$stateService.showModal$.pipe(distinctUntilChanged()).subscribe(toggle => {
      this.showModal = toggle;
    })

    this.sliders = this.$dataService.sliders;
  }
}
