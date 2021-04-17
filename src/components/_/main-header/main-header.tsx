import {h, Component, getAssetPath} from "@stencil/core";
import state from "../../../store";
import {clearAuthentication} from "../../../store/auth";

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

              { state.auth.token ?
                <button class="btn btn-success" onClick={ () => clearAuthentication() }>
                  Sair
                </button>
                :
                <stencil-route-link url={'/login'}>
                  <button class="btn btn-success">
                    Entrar
                  </button>
                </stencil-route-link> }

            </div>

          </nav>
        </div>

      </header>
    )
  }
}
