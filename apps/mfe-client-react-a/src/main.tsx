import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { ClientAppElement, ClientAppInfo } from '@microfr/shared/model';
import { defineCustomElement } from '@microfr/shell';
import { AppRoot } from './app/core/components';
import { appConfig } from './app/shared/constants';
import { shellStateHelper } from './app/shared/helpers';

class AppElement extends HTMLElement implements ClientAppElement {
  private observer: MutationObserver;
  private _appInfo: ClientAppInfo;

  constructor() {
    super();
    this.initObserver();
  }

  connectedCallback() {
    this.mountElement();
  }

  disconnectedCallback() {
    shellStateHelper.onDestroy();
    this.unmountElement();
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (oldValue === newValue) {
      return;
    }

    console.log('attributeChangedCallback :', name, oldValue, newValue);
  }

  set appInfo(data: ClientAppInfo) {
    console.log('set appInfo on mfe-client-react-a:', data);
    this._appInfo = data;
  }

  get appInfo(): ClientAppInfo {
    return this._appInfo;
  }

  private initObserver() {
    this.observer = new MutationObserver(this.updateElement.bind(this));
    this.observer.observe(this, { attributes: true });
  }

  private updateElement() {
    console.log('updateElement on MutationObserver :', this.attributes);
    this.unmountElement();
    this.mountElement();
  }

  private mountElement() {
    render(<AppRoot />, this);
  }

  private unmountElement() {
    unmountComponentAtNode(this);
  }
}

defineCustomElement(appConfig.element, AppElement);
