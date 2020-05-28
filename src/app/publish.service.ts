import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BackendBaseUrlService} from './backendBaseUrl.service';

@Injectable()
export class PublishService {
  constructor(private http: HttpClient, private urlService: BackendBaseUrlService) { }

  publish(body): void{
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    this.http.post(this.urlService.getBaseUrl() + 'publish', body, config).subscribe({
      error: error => console.error(error)
    });
  }
}
