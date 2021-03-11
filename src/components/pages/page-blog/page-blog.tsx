import {h, Component, State, Prop} from "@stencil/core"

@Component({
  tag: "page-blog",
  styleUrl: "page-blog.scss"
})

export class PageBlog{
  @State() posts: any[]
  @Prop({ mutable: true }) baseUrl: string = 'http://wp.api.test/wp-json/wp/v2/posts?_embed'

  constructor() {
    this.posts = []
  }

  async getPosts()
  {
    try{
      const response = await fetch( this.baseUrl )
      return await response.json()
    }catch(err) {
      console.log('ERROR', err)
    }
  }

  getFeaturedImage(data)
  {
    const featuredmedia = data._embedded['wp:featuredmedia'];

    return featuredmedia
      ?  <img class="card-img-top" src={ featuredmedia[0].source_url } alt="Card image cap" />
      :  ''

  }

  componentDidLoad()
  {
    this.getPosts().then( res => this.posts = res )
  }

  componentWillUpdate()
  {
    console.log(this.posts)
  }

  render()
  {
    return (
      <div class="page-blog pt-5 pb-4">
        <div class="container">
          <div class="row">
            { this.posts.map(( post, _index) =>
              <div class="col-8 col-md-6 col-lg-4">
                <div class="card">
                  { this.getFeaturedImage(post) }
                  <div class="card-body">
                    <h5 class="card-title">{ post.title.rendered }</h5>
                    <div class="card-text" innerHTML={ post.excerpt.rendered } />
                    <stencil-route-link url={'/blog/' + post.slug}>
                      <button class="btn read-more">
                        [ ler mais ]
                      </button>
                    </stencil-route-link>
                  </div>
                </div>
              </div>
            ) }
          </div>
        </div>
      </div>
    )
  }
}
