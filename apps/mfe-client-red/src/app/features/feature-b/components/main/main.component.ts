import { Component } from '@angular/core';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  /*
  // TODO: ensure lazy-loading code-splitting doesn't disable the initial load of the
  // entire module.
  constructor(private readonly lazyLoader: LazyLoaderService) {}
  onLoadModule() {
    const moduleLoad = () =>
      import('../../../feature-a/feature-a.module').then((m) => m.FeatureAModule);
    this.lazyLoader.loadModule(moduleLoad);
  } */
}
