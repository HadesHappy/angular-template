import { Component, OnInit } from '@angular/core';
import {WdLogonService} from "../wd-logon.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Logowanie do WD";
  user = '';
  pass = '';

  constructor( private logonService : WdLogonService) { }

  ngOnInit() {

  }

  login() {
    this.logonService.login(this.user, this.pass);
  }

}
