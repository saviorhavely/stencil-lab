import { h, Component, State, getAssetPath } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: './todo-list.scss',
  assetsDirs: ['assets']
})

export class TodoList{
  @State() task: string = ""
  @State() tasks: string[] = []

  componentWillLoad()
  {
    fetch('https://api.github.com/users/saviorhavely')
      .then( (response: Response) => {
        console.log(response)
      })
      .then( response => {
        console.log(response)
      })
  }

  handleSubmit = ( ev: Event ) => {
    ev.preventDefault()
    if(this.task.trim()){
      this.tasks.push(this.task)
      this.task = ''
    }
  }

  handleInput = ( ev: Event ) => {
    ev.preventDefault()
    const field = ev.target as HTMLInputElement
    this.task = field.value
  }

  removeTask = (index: number) => {
    this.tasks = this.tasks.filter( (_item: string, i: number) => {
      return i !== index
    })
  }

  render(){
    return(
      <div class="todo-list">
        <div class="container py-4">
          <div class="row">
            <div class="col-8 px-0">

                <div class="card">
                  <div class="card-header">
                    Lista de tarefas
                  </div>
                  <div class="card-body">
                    { this.tasks.length >= 1 ?
                    <ul class="list-group">
                      { this.tasks.map( (t, i) => (
                        <li class="list-group-item">
                          <span>{ t }</span>
                          <span class="actions">
                          {/*<input type="checkbox" />*/}
                          <button onClick={() => this.removeTask(i)} class="close" title="Remover">
                            <span class="btn-close"></span>
                          </button>
                        </span>
                        </li>
                      ) ) }
                    </ul> :
                    <div class="jumbotron p-3">
                      <h1 class="display-4">Nenhuma tarefa adicionada!</h1>
                      <p class="lead">Use o formulário ao lado para adicionar tarefas.</p>
                      <hr class="my-4" />
                    </div> }
                  </div>
                </div>

            </div>
            <div class="col-4">
              <img class="w-100 mb-3" src={getAssetPath(`../assets/apresentation-clock.svg`)} />
              <form class="container-fluid" action="" onSubmit={this.handleSubmit}>
                <input
                  onInput={this.handleInput}
                  value={this.task}
                  type="text"
                  placeholder="Titulo da tarefa"
                  class="form-control mb-3" />
                <div class="d-flex justify-content-end">
                  <button class="btn btn-sm btn-success" type="submit">Adicionar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
