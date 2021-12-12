import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  RedirectNewDestinatario(){
    this.router.navigateByUrl('/');
  }
  RedirectTransfer(){
    this.router.navigateByUrl('/transfer');

  }
  RedirectHistory(){
    this.router.navigateByUrl('/history');

  }
}
