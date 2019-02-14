import { Component, OnInit, ViewChild, OnChanges, DoCheck} from '@angular/core';
import {AuthService} from '../Services/auth.service';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogginComponent } from '../loggin/loggin.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  constructor( private auth: AuthService, private route: Router
  ) { }
  public user: string;
  public valor: boolean;
  ngOnInit() {
  }
  ngDoCheck() {
    this.checkLoggin();
  }
  checkLoggin(): void {
   // console.log('entro');
    if (this.auth.getCurrenUser() === null) {
      this.user = ' ';
      this.valor = false;
    } else {
      this.user = this.auth.getCurrenUser();
      this.valor = true;
    }
  }
  cerrarSesion(): void  {
    this.auth.logoutUser();
    this.route.navigate(['/loggin']);
  }

}
