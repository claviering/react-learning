import { ADDICON, GOBACKICON } from './actions-type';
export function change (state = true , action) {
  switch (action.type) {
    case ADDICON:
     state = true
    break
    case GOBACKICON:
      state = false
    break
    default:
      state = true
  }
  return state
}