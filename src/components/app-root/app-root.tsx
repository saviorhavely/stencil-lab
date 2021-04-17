import {Component, h, Host, State} from '@stencil/core';
import {PrivateRoute} from "./PrivateRoute";
import {checkAuth} from "../../store/auth";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})

export class AppRoot{
  @State() loading: boolean = false

  componentWillLoad() {
    checkAuth()
  }

  render(){
    return (
      <Host>
        <main-header />
        <main class="main-content">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <PrivateRoute url="/" component="app-home" redirectUrl="/login" exact={true} />
              {/*<stencil-route url="/" component="app-home" exact={true} />*/}
              <PrivateRoute url="/sobre" component="todo-list" exact={true} />
              <stencil-route url="/login" component="page-login" exact={true} />
              <PrivateRoute url="/blog" component="page-blog" exact={true} />
              <PrivateRoute url="/blog/:slug" component="single-blog" />
              {/*<stencil-route url="/profile/:name" component="app-profile" />*/}
            </stencil-route-switch>
          </stencil-router>
        </main>
        <main-footer />
      </Host>
    )
  }

}


