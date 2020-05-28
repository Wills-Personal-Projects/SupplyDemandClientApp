import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BackendBaseUrlService} from './backendBaseUrl.service';

@Injectable()
export class NotifService {
  constructor(private http: HttpClient, private urlService: BackendBaseUrlService) { }

  getNotifications(): Observable<string>{
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.urlService.getBaseUrl() + 'notifications', {responseType: 'text'});
  }
}
