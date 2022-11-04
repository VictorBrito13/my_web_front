import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { intersection } from 'src/helpers/intersectionObserver';
import { projects, ProjectInterface } from '../../../assets/projects'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects:ProjectInterface[]
  @ViewChild('projects_container') $projects_container:any

  constructor(
    private Renderer2:Renderer2
  ) {
    this.projects = projects
  }

  ngOnInit(): void {
    setTimeout(() =>{
      intersection(
        this.$projects_container.nativeElement,
        (entries:any[]) => entries.forEach(entry => {
          if(entry.isIntersecting) this.Renderer2.addClass(entry.target, 'projects-container-active')
        })
      )
    }, 10)
  }

  trackByProjects(index:number, project:ProjectInterface){
    return index
  }

}
