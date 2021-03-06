import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserService {

  selectedUser : User;

  userid:string;

  constructor(private router: Router, private httpClient: HttpClient, private toastr : ToastrService) { }

  postUser(user : User)
  {
      this.httpClient.post('https://jsonplaceholder.typicode.com/posts', user).subscribe(
       res => {
         localStorage.setItem('currentUser', JSON.stringify(res));
         this.router.navigate(['/dashboard']);
         this.toastr.success('New Record Added Successfully','Employee Register');
       },
       err => {
         console.log("Error occured");
       }
     );
     // return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',user);
  }

}
