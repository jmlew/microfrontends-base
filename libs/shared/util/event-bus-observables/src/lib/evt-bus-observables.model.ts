import { Observable, Subject } from 'rxjs';

export interface EvtBusAction {
  type: EvtBusActionType;
  payload?: any;
}

export enum EvtBusActionType {
  ClientIsLoaded = 'Client is Loaded',
  AllClientsAreLoaded = 'All Clients are Loaded',
  ChangeRoute = 'Change Route',
  ChangeClientInfo = 'Change Client Info',
  SendClientOrangeMessage = 'Send Client Orange Message',
  SampleAction = 'Sample Action',
}

export interface EvtBusObservablesImpl {
  actions$: Observable<EvtBusAction>;
  dispatch: (action: EvtBusAction) => void;
  destroy: (subject: Subject<unknown>) => void;
}
