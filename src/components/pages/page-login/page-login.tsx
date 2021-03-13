import {h, Component, getAssetPath, State, Element} from "@stencil/core";
import {authLogin, DataLogin} from "../../../store/user"

@Component({
  tag: 'page-login',
  styleUrl: 'page-login.scss'
})

export class PageLogin{
  @Element() element: HTMLElement;
  @State() loginData: DataLogin = {
    email: '',
    password: ''
  };

  handlerSubmit(e)
  {
    e.preventDefault()

    authLogin(this.loginData)

  }

  handleChange(ev: Event, loginData) {
    const field = ev.target as HTMLInputElement
    this.loginData[loginData] = field.value
  }

  render()
  {
    return(
      <section class="page-login">
        <div class="container">
          <div class="row content">
            <div class="col-lg-4">
              <div class="logo">
                <img class="logo" src={ getAssetPath('../assets/purple.png') } alt="Purple" />
              </div>
              <form class="form-login" onSubmit={ (e) => this.handlerSubmit(e) }>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    id="email"
                    value={this.loginData.email}
                    onInput={(e) => this.handleChange(e, 'email')}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Senha"
                    id="pass"
                    value=""
                    onInput={(e) => this.handleChange(e, 'password')}
                  />
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Logar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
