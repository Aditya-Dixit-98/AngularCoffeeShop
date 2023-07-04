import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
  standalone:true,
  imports:[
    MatToolbarModule
  ]
})
export class AppBarComponent {

}
