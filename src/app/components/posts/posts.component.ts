import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any


  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
   this._userService.getPosts()
   .subscribe(res =>{
    this.posts = res
    console.log(res)
   })
  }

  getPosts(){
    this._userService.getPosts()
    .subscribe(post => {
      this.posts = post.splice(0,10)
    })
  }

  deletePost(i:any){
    this.posts.splice(i,1)
    console.log(this.posts[i])
  }
}
