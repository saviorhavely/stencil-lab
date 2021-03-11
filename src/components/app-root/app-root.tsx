import {Component, h, Host} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})

export class AppRoot{
  render(){
    return (
      <Host>
        <main-header />
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
        <main-footer />
      </Host>
    )
  }

}


