import {h, Component, Prop, State} from "@stencil/core";
import {MatchResults} from "@stencil/router";
import {Utils} from "../../../utils";

@Component({
  tag: 'single-blog',
  styleUrl: 'single-blog.scss'
})

export class SingleBlog{
  @Prop({ mutable: true }) baseUrl: string = 'http://wp.api.test/wp-json/wp/v2/posts'
  @Prop() match: MatchResults
  @State() post: Object

  constructor() {
    this.post = {}
  }

  async getPost()
  {
    const base = this.baseUrl + '?slug=' + this.match.params.slug
    try{
      const response = await fetch( base )
      return await response.json()
    }catch(err) {
      console.log('ERROR', err)
    }
  }

  componentDidLoad()
  {
    this.getPost().then(res => {
      this.post = res[0]
    })
  }

  componentWillUpdate()
  {
    console.log(this.post)
  }

  render()
  {
    if( !Utils.isEmpty(this.post) ){
      return (
        <div class="single-blog py-4">
          <div class="container">
            <div class="row">
              <div class="col-lg-9">
                <h1 innerHTML={ this.post['title'].rendered }/>
                <div innerHTML={ this.post['content'].rendered } />
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      return <section-loading />
    }
  }
}
