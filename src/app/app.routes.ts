import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';




import { Cloudservices } from './pages/cloudservices/cloudservices';
import { Cybersecurity } from './pages/cybersecurity/cybersecurity';
import { Dataengineering } from './pages/dataengineering/dataengineering';
import { Gis } from './pages/gis/gis';
import { Carousel } from './ui/carousel/carousel';

export const routes: Routes = [ { path: '', component: Home },
  

  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'services', component: Services},{path: 'pages/cloudservices',component:Cloudservices},
  {path: 'pages/cybersecurity',component:Cybersecurity},
  {path: 'pages/dataengineering',component:Dataengineering},
  {path: 'pages/gis',component:Gis},
  { path: 'carousel', component: Carousel },
  { path: '', redirectTo: '/carousel', pathMatch: 'full' }

  

];


