import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/login/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService, private toastr : ToastrService) { }

  ngOnInit() {

  }

  onSubmit(form : NgForm)
  {
    this.userService.postUser(form.value);

    form.reset();
  }
}
