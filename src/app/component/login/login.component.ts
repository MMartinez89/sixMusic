import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { 
    this.authService.login().subscribe(data=>{
      this.router.navigate(['/home']);
    }, err=>{
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
