import {Component, h} from "@stencil/core"

@Component({
  tag: 'main-footer',
  styleUrl: 'main-footer.scss',
})

export class MainFooter{
  render(){
    return (
      <footer class="main-footer bg-dark">
        <div class="container">
          <div class="py-3 text-center border-top">
            <strong>Todos os direitos reservados - {new Date().getFullYear()}</strong>
          </div>
        </div>
      </footer>
    )
  }
}
