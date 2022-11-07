import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact_form:FormGroup
  @ViewChild('success_sended') succes_paragraph:any

  constructor(
    private http: HttpService,
    private renderer2: Renderer2
  ) {
    this.contact_form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      cellphone: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  submit_offer(form:HTMLFormElement){
    return this.http.new_offer(this.contact_form.value).subscribe(
      (res) => {
        console.log(res)
        form.reset()
        this.renderer2.addClass(this.succes_paragraph.nativeElement, 'success-active')
      },
      (err) => {
        console.error(err)
        if(err.status === 400) alert('please fill all the fields')
        if(err.status >= 500 && err.status <= 600) alert('An error has occurred but is not your foul, please try again more later')
      }
    )
  }

}
