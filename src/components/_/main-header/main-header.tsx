import {h, Component, getAssetPath} from "@stencil/core";

@Component({
  tag: 'main-header',
  styleUrl: 'main-header.scss',
  assetsDirs: ['assets']
})

export class MainHeader{
  render(){
    return (
      <header class="main-header">

        <div class="container site-header sticky-top">
          <nav class="navbar navbar-expand-lg px-0" >

            <stencil-route-link class="d-flex navbar-brand" url={'/'}>
              <img class="logo" src={ getAssetPath('../assets/purple.png') } alt="Purple" />
            </stencil-route-link>


            <div class="collapse navbar-collapse">

              <ul class="navbar-nav pr-lg-3">

                <li class="nav-item">
                  <stencil-route-link url={'/'} exact={true}>
                    <button class="btn">
                      Página Inicial
                    </button>
                  </stencil-route-link>
                </li>
                <li class="nav-item">
                  <stencil-route-link url={'/sobre'}>
                    <button class="btn">
                      Sobre
                    </button>
                  </stencil-route-link>
                </li>
                <li class="nav-item">
                  <stencil-route-link url={'/blog'}>
                    <button class="btn">
                      Blog
                    </button>
                  </stencil-route-link>
                </li>
                <li class="nav-item">
                  <stencil-route-link url={'/contato'}>
                    <button class="btn">
                      Contato
                    </button>
                  </stencil-route-link>
                </li>

              </ul>

              <button type="button" class="btn btn-success ml-md-3" data-toggle="modal" data-target="#modalLogin">Entrar</button>

            </div>

          </nav>
        </div>

      </header>
    )
  }
}
