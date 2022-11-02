import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";

import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";

const routes:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent}
]

export const routesModule = RouterModule.forRoot(routes)