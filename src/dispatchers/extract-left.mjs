import {isFuture} from '../future';
import {throwInvalidFuture} from '../internal/throw';

export function extractLeft(m){
  if(!isFuture(m)) throwInvalidFuture('Future.extractLeft', 0, m);
  return m.extractLeft();
}
