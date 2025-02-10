import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent ,title: 'Home Page'},
  {path:'about', component: AboutComponent ,title: 'About Page'},
  {path:'contact', component: ContactComponent, title: 'Contact Page'},
  {path:'gallery', component: GalleryComponent, title: 'Gallery   Page'},

  {path:'**', component: NotfoundComponent, title: 'Not Found Page'},
];
