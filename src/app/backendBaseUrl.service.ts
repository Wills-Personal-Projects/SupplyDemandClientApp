import {Injectable} from '@angular/core';

@Injectable()
export class BackendBaseUrlService {
  private baseUrl = 'http://supplydemandwebservice-env.eba-nutp8cwh.us-east-2.elasticbeanstalk.com/SupplyDemand/';
  getBaseUrl(){
    return this.baseUrl;
  }
}
