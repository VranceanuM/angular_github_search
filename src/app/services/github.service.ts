import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id='a6c795d6a65957d1abd7';
  private client_secret='fb9392ad7a37118944657bb2d1d010cfce9722fc';
  constructor( private _http:Http ){
    console.log('Github Service Ready...');
    this.username='bradtraversy';
  }
  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
  }
  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
  }
  updateUser(username:string){
    this.username=username;
  }
}
