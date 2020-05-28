import {Component, DoCheck} from '@angular/core';
import {PublishService} from './publish.service';
import {NgForm} from '@angular/forms';
import {NotifService} from './notif.service';
import {BackendBaseUrlService} from './backendBaseUrl.service';

@Component({
  selector: 'app-publish',
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit(form)" novalidate>
      <div class="form-group">
        <label for="prodName">Producer Name</label>
        <input class="form-control" name="first" ngModel required #first="ngModel" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="prodCatP">Product Category</label>
        <input class="form-control" input name="second" ngModel required #second="ngModel" placeholder="Category">
      </div>
      <div class="form-group">
        <label for="brand">Product brand</label>
        <input class="form-control" input name="third" ngModel required #third="ngModel" placeholder="Brand">
      </div>
      <button type ="submit" class="btn btn-default btn-block" >Publish</button>
    </form>
    <form (ngSubmit)="updateNotifs()" novalidate>
      <button type ="submit" class="btn btn-default btn-block" >Get Notifications</button>
      <table class="table">
        <thead>
        <tr>
          <th>Notifications</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let notif of notifs">{{notif}}</tr>
        </tbody>
      </table>
    </form>
    `
  ,
  providers: [PublishService, NotifService, BackendBaseUrlService]
})

export class AppPublishComponent{
  notifs: Array<string>;
  constructor(private pService: PublishService, private nService: NotifService) {}
  toArray(str): Array<string>{
    const strArr = [];
    let entry = '';
    let char = '';
    for (char of str)
    {
      if (char !== '[' && char !== ']' && char !== ',') {
        entry = entry + char;
      }else if (char === ','){
        strArr.push(entry);
        entry = '';
      }
    }
    if (entry !== ''){
      strArr.push(entry);
    }
    return strArr;
  }

  onSubmit(form: NgForm){
    this.pService.publish({brand: form.value.third, cat: form.value.second, name: form.value.first});
  }

  updateNotifs(){
    this.nService.getNotifications().subscribe(ns => {
      this.notifs = this.toArray(ns);
    });
  }
}

