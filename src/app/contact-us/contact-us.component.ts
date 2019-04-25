import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ContactUs } from "./contact.message.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {
  rForm: FormGroup;
  post: any;

  name: string = "";
  email: string = "";
  cell: string = "";
  message: string = "";
  showSucces: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.rForm = fb.group({
      name: [null, Validators.required],
      email: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      cell: [null, Validators.required],
      message: [
        null,
        Validators.compose([Validators.required, Validators.minLength(15)])
      ]
    });
  }

  ngOnInit() {}

  send(cont: ContactUs) {
    this.http
      .post<any>(`http://sehla-trading.co.za/email.php`, cont)
      .subscribe(response => {
        this.showSucces = true;
        this.name = "";
      });
  }
}
