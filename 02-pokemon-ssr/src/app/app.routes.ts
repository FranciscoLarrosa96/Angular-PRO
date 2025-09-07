import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about').then(m => m.About)
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing-page/pricing-page').then(m => m.PricingPage)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    },
    {
        path: '**',
        redirectTo: () => {
            return 'about';
        }
    }
];
