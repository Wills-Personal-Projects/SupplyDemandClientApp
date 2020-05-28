import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BackendBaseUrlService} from './backendBaseUrl.service';

@Injectable()
export class SubscribeService {
  constructor(private http: HttpClient, private urlService: BackendBaseUrlService) { }

  subscribe(body): void {
    this.http.post(this.urlService.getBaseUrl() + 'subscribe', body).subscribe({
      error: error => console.error(error)
    });
  }
}
