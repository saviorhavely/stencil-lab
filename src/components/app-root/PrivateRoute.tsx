import {h} from "@stencil/core";
import state from "../../store";

export const PrivateRoute = ({ component, ...props}: { [key: string]: any }) => {
  const Component = component;
  const redirectUrl = props.redirectUrl || "/login";

  return (
    <stencil-route {...props} routeRender={
      (props: { [key: string]: any}) => {
        if (state.auth.token) {
          return <Component {...props} {...props.componentProps} />;
        }
        return <stencil-router-redirect url={redirectUrl} />
      }
    }/>
  );
}
