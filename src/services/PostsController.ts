export class PostsController
{
  public posts;

  constructor() {}

  async getPosts(): Promise<Response>
  {
    const base: string = 'http://wp.api.test/wp-json/wp/v2/posts'
    return await fetch(base)
  }


}
