import {Component} from '@angular/core';
import {SubscribeService} from './subscribe.service';
import {NgForm} from '@angular/forms';
import {BackendBaseUrlService} from './backendBaseUrl.service';

@Component({
  selector: 'app-subscribe',
  template: `
    <form form #form="ngForm" (ngSubmit)="onSubmit(form)" novalidate>
        <div class="form-group">
          <label for="retNameS">Retailer Name</label>
          <input name="first" ngModel required #first="ngModel" type="name" class="form-control" id="retNameS" placeholder="Name" >
        </div>
        <div class="form-group">
          <label for="prodCatS">Product Category</label>
          <input name="second" ngModel required #second="ngModel" type="category" class="form-control" id="prodCatS" placeholder="Category">
        </div>
        <button type ="submit" class="btn btn-default btn-block">Subscribe</button>
      </form>
    `
  ,
  providers: [SubscribeService, BackendBaseUrlService]
})

export class AppSubscribeComponent {

  constructor(private service: SubscribeService) {}

  onSubmit(form: NgForm){
    this.service.subscribe({cat: form.value.second, name: form.value.first});
  }
}
