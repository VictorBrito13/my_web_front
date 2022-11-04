import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';

import { SkillsComponent } from 'src/app/components/skills/skills.component';


@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
