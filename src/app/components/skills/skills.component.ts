import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { techs, TechInterface } from '../../../assets/techs'
import { intersection } from '../../../helpers/intersectionObserver'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public techs:Array<TechInterface>
  @ViewChild('skills_container') $skills_container:any

  constructor(
    private Renderer2:Renderer2
  ) {
    this.techs = techs
  }

  ngOnInit(): void {
    setTimeout(() => {
      intersection(
        this.$skills_container.nativeElement,
        (entries:any[]) => entries.forEach(entry => {
          if(entry.isIntersecting)this.Renderer2.addClass(entry.target, 'skills-container-intersecting')
        })
      )
    }, 0)
  }

  accordion(e:any){
    if(e.target instanceof HTMLDivElement)e.target.classList.toggle("skill-active")
  }

  trackBySkills(index:number, skill:TechInterface){
    return index
  }
}
