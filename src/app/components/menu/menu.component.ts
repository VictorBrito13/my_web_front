import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') $menu:any

  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
  }

  displayMenu(){
    let close = this.$menu.nativeElement.classList.contains('menu-closed')

    close ?
    this.renderer2.removeClass(this.$menu.nativeElement, 'menu-closed') :
    this.renderer2.addClass(this.$menu.nativeElement, 'menu-closed')
  }
}
