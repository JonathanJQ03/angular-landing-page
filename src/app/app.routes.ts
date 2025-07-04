import { Routes } from '@angular/router';
import { LadingPageComponent } from './components/landingPage/lading-page.component/lading-page.component';

export const routes: Routes = [

    {
        path: 'landingpage',
        component: LadingPageComponent,
        title: 'Landing Page'
    },
    {
        path: '',
        component: LadingPageComponent,
        title: 'Landing Page'
    }
];
