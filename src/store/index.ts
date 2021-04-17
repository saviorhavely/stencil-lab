import { createStore } from "@stencil/store";

// interface MainState{
//   name: string,
//   clicks?: number,
//   seconds?: number,
//   squaredClicks?: number
// }

const DEFAULT_STATE = {
  auth: {
    token: false
  }
}

const { state } = createStore(DEFAULT_STATE);

// onChange('clicks', value => {
//   state.squaredClicks = value ** 2;
// });

export default state

