import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service'
import {Hero} from '../hero'
import {post} from '../posts'
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

ngOnInit(){
  this.getHeroes()
  this.getPosts()
}
  heroes: Hero[] = [];
  posts: post[]=[]
  errorMessage:string
  private ngUnsubscribe:Subject <void>= new Subject<void>()
  constructor(private heroSevice:HeroService) {

  }

getHeroes(){
  this.heroSevice.getHeroes().then(heroes => this.heroes=heroes.slice(1,5))
}
getPosts(){
  this.heroSevice.getPosts()
    .subscribe(posts => this.posts=posts,
    error=> this.errorMessage =<any>error)
}
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
