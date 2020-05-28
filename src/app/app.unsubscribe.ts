import {Component} from '@angular/core';
import {UnSubscribeService} from './unsubscibe.service';
import {NgForm} from '@angular/forms';
import {BackendBaseUrlService} from './backendBaseUrl.service';

@Component({
  selector: 'app-unsubscribe',
  template: `
    <form form #form="ngForm" (ngSubmit)="onSubmit(form)" novalidate>
        <div class="form-group">
          <label for="retNameS">Retailer Name</label>
          <input name="first" ngModel required #first="ngModel" type="name" class="form-control" id="retNameU" placeholder="Name">
        </div>
        <div class="form-group">
          <label for="prodCatU">Product Category</label>
          <input name="second" ngModel required #second="ngModel" type="category" class="form-control" id="prodCatU" placeholder="Category">
        </div>
        <button type ="submit" class="btn btn-default btn-block">Unsubscribe</button>
      </form>
    `
  ,
  providers: [UnSubscribeService, BackendBaseUrlService]
})

export class AppUnSubscribeComponent {

  constructor(private service: UnSubscribeService) {}

  onSubmit(form: NgForm){
    this.service.unsubscribe({cat: form.value.second, name: form.value.first});
  }
}
