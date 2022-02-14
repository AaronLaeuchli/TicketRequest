import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-btn',
  templateUrl: './dropdown-btn.component.html',
  styleUrls: ['./dropdown-btn.component.scss']
})
export class DropdownBtnComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.btnSearchClick();
  }

  btnSearchClick() {
    this.router.navigate(['/search-bar']);
  };

}
