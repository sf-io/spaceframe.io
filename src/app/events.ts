import { BehaviorSubject, Subject } from 'rxjs';

export const PROJECT_IN_VIEW = new Subject<number>();
export const BOTH_SIDES_MATCH = new BehaviorSubject<boolean>(false);

export const NEXT_SLIDE = new Subject();
export const PREV_SLIDE = new Subject();
export const UP_PROJECT = new Subject();
export const DOWN_PROJECT = new Subject();
export const IS_NAVIGATION_OPEN = new BehaviorSubject<boolean>(false);
export const CURRENT_BREAKPOINT = new Subject<string>();
