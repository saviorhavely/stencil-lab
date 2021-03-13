import { createStore } from "@stencil/store";

// interface MainState{
//   name: string,
//   clicks?: number,
//   seconds?: number,
//   squaredClicks?: number
// }

const DEFAULT_STATE = {
  authenticated: false,
  user: {
    login: false,
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93cC5hcGkudGVzdCIsImlhdCI6MTYxNTU3MjM4NywibmJmIjoxNjE1NTcyMzg3LCJleHAiOjE2MTYxNzcxODcsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.DJZxDOJv1kfy4yRrtMClqNekYL8p_XbQB2vc56QT4O0",
  }
}

const { state } = createStore(DEFAULT_STATE);

// onChange('clicks', value => {
//   state.squaredClicks = value ** 2;
// });

export default state;

