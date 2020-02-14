import { Component, OnInit } from '@angular/core';

import { EvtBusEventType } from '@microfr/shared/util/event-bus-dom';
import { EvtBusActionType } from '@microfr/shared/util/event-bus-obs';
import { EvtBusDomService } from '../../../../../core/services/evt-bus-dom.service';
import { EvtBusObservablesService } from '../../../../../core/services/evt-bus-obs.service';

@Component({
  templateUrl: './main.view.html',
  styleUrls: ['./main.view.scss'],
})
export class FooAMainView implements OnInit {
  constructor(
    private readonly evtBusObs: EvtBusObservablesService,
    private readonly evtBusDom: EvtBusDomService
  ) {}

  ngOnInit() {}

  onFooClick() {
    const sampleEventData = { payload: 'Fired from Angular App A' };
    this.evtBusObs.dispatch({
      type: EvtBusActionType.SampleAction,
      payload: sampleEventData,
    });
    this.evtBusDom.dispatch(EvtBusEventType.SampleEvent, sampleEventData);
  }
}
