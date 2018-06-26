// counter.actions.ts
import { Action } from '@ngrx/store';

export enum FilterActionTypes {
  SET = '[Filter] Set'
}

export class Set implements Action {
  public readonly type = FilterActionTypes.SET;

  constructor(public readonly filter: string) { }
}

export type FilterActionsUnion = Set;
