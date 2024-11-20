import { Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './main/header.component';
import { DatabindingComponent } from './databinding/databinding.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'main',component:HeaderComponent},
    {path:'contact',component:ContactComponent},
    {path:'databinding',component:DatabindingComponent}
];
