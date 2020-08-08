import { Component, OnInit } from '@angular/core';
//Importing service
import { UserService } from 'src/app/service/user.service';
// Importing router
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  repos: any;

  constructor(private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService.getUser(username)
        .subscribe(user => this.user = user);
      // const repo = params['repo'];
      this.userService.getRepo(username, 'repos')
        .subscribe(repos => {
          this.repos = repos
        });
    })


  }

}
