import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUs } from '../contact-us/contact.message.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  name: string = "";
  email: string = "";
  cell: string = "";
  message: string = "Please call me back";
  showSucces: boolean;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {}

  send() {
    if(this.email == ""){
      return false;
    }
    let cont = {
      name:this.name,
      email:this.email,
      message:this.message,
      cell:this.cell
    }
    this.http
      .post<any>(`http://sehla-trading.co.za/email.php`, cont)
      .subscribe(response => {
        this.showSucces = true;
        this.name = "";
      });
  }
}
