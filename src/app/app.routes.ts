import { Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './main/header.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './form/reactiveform/reactiveform.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'main',component:HeaderComponent},
    {path:'contact',component:ContactComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'directive',component:DirectiveComponent},
    {path:'form',component:FormComponent},
    {
        path: 'reactiveform', component:ReactiveformComponent}
        
    
];
