import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nowy',
  templateUrl: './nowy.component.html',
  styleUrls: ['./nowy.component.css']
})
export class NowyComponent implements OnInit {
  sekret = 'abra-kadabra';

  constructor() { }

  ngOnInit() {
  }

  ukryj() {
    this.sekret = '********';
  }
}
