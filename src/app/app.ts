import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './ui/navbar/navbar';
import { Carousel } from './ui/carousel/carousel';
import { Footer } from './ui/footer/footer';
import { Accordion } from './ui/accordion/accordion';
import { Card } from './ui/card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  template: '<app-cloudservices><app-cloudservices>',
})




export class App {
  protected title = 'Angular-Project';
}

