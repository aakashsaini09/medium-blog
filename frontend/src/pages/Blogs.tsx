import BlogCard from "../components/BlogCard"
import Navbar from "../components/Navbar"
import { useBlogs } from "../hooks"
const Blogs = () => {
  const { loading, blogs} = useBlogs()
  if(loading){
    return <div>
    <Navbar/>
    <div className='h-screen flex flex-col justify-center'>
      <div className='flex justify-center'>
        loading....
      </div>
    </div>
  </div>
  }
  return (
    <div>
      <Navbar/>
    <div className="flex justify-center">
      <div className="max-w-xl">
        {blogs.map((blog) => <BlogCard 
          autherName={blog.author.name || "Anonymous"}
          id={blog.id}
          title={blog.title}
          key={blog.id}
          content={blog.content}
          publishedDate={"22nd Jan 2024"}/>
        )}
         </div>
    </div>
    </div>
  )
}

export default Blogs
