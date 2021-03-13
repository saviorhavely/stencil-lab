import {Component, h, Host, State} from '@stencil/core';
import {isLogged} from "../../store/auth";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})

export class AppRoot{
  @State() loading: boolean = false

  componentWillLoad() {
    // setInterval(() => state.seconds++, 1000);
  }

  getContentPage()
  {
    if ( isLogged() ){
      return (
        <main class="main-content">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/todo-list" component="todo-list" exact={true} />
              <stencil-route url="/blog" component="page-blog" exact={true} />
              <stencil-route url="/blog/:slug" component="single-blog" />
              {/*<stencil-route url="/profile/:name" component="app-profile" />*/}
            </stencil-route-switch>
          </stencil-router>
        </main>
      )
    }else {
        return <page-login />
    }
  }

  render(){
    return (
      <Host>
        <main-header />
        { this.getContentPage() }
        <main-footer />
      </Host>
    )
  }

}


