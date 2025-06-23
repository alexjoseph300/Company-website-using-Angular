import { Component } from '@angular/core';
import { Carousel } from "../../ui/carousel/carousel";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports:[Carousel],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,
  
})
export class Home {

}
