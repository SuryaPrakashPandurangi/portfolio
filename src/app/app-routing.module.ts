import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent }
  ,{ path: 'work', component: HomeComponent }
  ,{ path: 'projects', component: ProjectsComponent }
  ,{ path: 'skills', component: SkillsComponent }
  ,{ path: 'resume', component: ResumeComponent }
  ,{ path: 'contact', component: ContactComponent }

  ,{ path: '', component: HomeComponent}
  ,{ path: ' ', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}