import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BackendBaseUrlService} from './backendBaseUrl.service';

@Injectable()
export class UnSubscribeService {
  constructor(private http: HttpClient, private urlService: BackendBaseUrlService) { }

  unsubscribe(body): void{
    this.http.post(this.urlService.getBaseUrl() + 'unsubscribe', body).subscribe({
      error: error => console.error(error)
    });
  }
}
