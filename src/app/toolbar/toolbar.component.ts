import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ThemeService } from 'src/app/service/theme.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isDarkMode: boolean;
  showFiller = false;

  ngOnInit(): void {
  }

  
  constructor(private themeService: ThemeService, public dialog: MatDialog) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }

}
