/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {A11yModule} from '@angular/cdk/a11y';
import {MdCommonModule} from '@angular/material/core';
import {MdDialogFull, MD_DIALOG_SCROLL_STRATEGY_PROVIDER_FULL} from './dialog';
import {MdDialogContainerFull} from './dialog-container';
import {
  MdDialogCloseFull,
  MdDialogContentFull,
  MdDialogTitleFull,
  MdDialogActionsFull
} from './dialog-content-directives';


@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    A11yModule,
    MdCommonModule,
  ],
  exports: [
    MdDialogContainerFull,
    MdDialogCloseFull,
    MdDialogTitleFull,
    MdDialogContentFull,
    MdDialogActionsFull,
    MdCommonModule,
  ],
  declarations: [
    MdDialogContainerFull,
    MdDialogCloseFull,
    MdDialogTitleFull,
    MdDialogActionsFull,
    MdDialogContentFull,
  ],
  providers: [
    MdDialogFull,
    MD_DIALOG_SCROLL_STRATEGY_PROVIDER_FULL,
  ],
  entryComponents: [MdDialogContainerFull],
})
export class MdDialogModuleFull {}

export * from './dialog';
export * from './dialog-container';
export * from './dialog-content-directives';
export * from './dialog-config';
export * from './dialog-ref';
