import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home } from '../../pages/home/home';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
