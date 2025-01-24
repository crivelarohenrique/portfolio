import { Routes } from '@angular/router';
import { ProjectsComponent } from './features/projects/projects.component';
import { AboutMeComponent } from './features/about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent}
];
