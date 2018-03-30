import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TestProvider {

  constructor(public http: HttpClientModule) {
    console.log('Hello TestProvider Provider');
  }

}
