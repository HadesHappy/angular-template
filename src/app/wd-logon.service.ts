import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './model/user';
import {Md5} from "ts-md5";

@Injectable({
  providedIn: 'root'
})
export class WdLogonService {
  wdurl = 'https://denver.wsi.edu.pl:8443/wd-auth/auth';
  loggedIn : boolean = false;
  username : string = '';
  wdauth : string = '';

  constructor(
    private http : HttpClient) { }

  login(user : string, password : string) {
    let md5 = Md5.hashStr(password);
    let fullrequest = this.wdurl + "?album=" + user + "&pass=" + md5;
    this.http.get<string>(fullrequest).subscribe(json=>{
      this.wdauth = json;
      console.log('wdauth = ' + this.wdauth)
    });
  }


}
