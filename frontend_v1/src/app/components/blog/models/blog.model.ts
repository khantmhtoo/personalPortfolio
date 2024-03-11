export type MCBlog = {
  _id?: any;
  blogTitle: string;
  summary: string;
  author?: string;
  date: string;
  content: content[];
  tags: string[];
};

type content = {
  section: string;
  description: any;
  visuals?: string;
  subContent?: any;
};

export class MBlog {
  private blogList: MCBlog[] = [];

  // Make it so that data is avaliable to get
  get Blog() {
    return this.blogList;
  }

  getBlogs(datas: MCBlog[]) {
    this.blogList = datas;
  }

  getBlogById(id: string) {
    return this.blogList.find((blog: MCBlog) => blog._id === id);
  }

  deleteBlog(id: string) {}

  updateBlog(data: MCBlog) {}

  createBlog(data: MCBlog) {}
}
