import {h, Component, State} from "@stencil/core"

@Component({
  tag: "page-blog",
  styleUrl: "page-blog.scss"
})

export class PageBlog{
  @State() posts: any[]

  componentDidLoad() {


  }

  render()
  {
    return (
      <div class="page-blog">

      </div>
    )
  }
}
