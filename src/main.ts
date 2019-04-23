import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Step 2: ng App should eb bootstrapped with a Module .. i.e AppModule 
platformBrowserDynamic().bootstrapModule(AppModule) 
  .catch(err => console.error(err));

