import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import * as fromComps from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';

const EXPORTED_DECLARATIONS: any[] = [...fromComps.exports, ...fromContainers.exports];

@NgModule({
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  exports: [EXPORTED_DECLARATIONS],
  declarations: [EXPORTED_DECLARATIONS],
  providers: [...fromServices.exports],
})
export class MainModule {}
