import { EducationComponent } from './components/education/education.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'education' , component: EducationComponent},
  { path: 'experiences' , component: ExperiencesComponent},
  { path: 'skills' , component: SkillsComponent},
  { path: 'projects' , component: ProjectsComponent},
  { path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
