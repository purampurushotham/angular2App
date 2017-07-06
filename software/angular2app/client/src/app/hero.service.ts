import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from './mock-heroes'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import {post} from './posts'
import {Http,Response} from '@angular/http'
@Injectable()
export class HeroService {
  private url='https://jsonplaceholder.typicode.com/posts'
  constructor(private _http: Http) {
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES)
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id)
    )
  }

  getPosts(): Observable<post[]> {
    return this._http.get(this.url)
      .map((response: Response) => <post[]> response.json())
      .do(data => console.log(data))
      .catch(this.handleError)
  }
  private handleError(error: Response){
    let message='error at ${{error.status}} at ${{error.url}}'
    return Observable.throw(message)
  }

}
