import { Avatar } from "./BlogCard"
import Navbar from "./Navbar"
import { Blog } from "../hooks"
const SingleBlog = ({blog}: {blog: Blog}) => {
    return (
      <div>
          <Navbar/>
          <div className="flex justify-center">
            
              <div className="grid grid-cols-12 px-6 w-full pt-12 max-w-screen-xl gap-3 pr-4">
                  <div className="col-span-8">
                      <div className="text-5xl font-extrabold">
                          {blog.title}
                      </div>
                      <div className="text-slate-500 pt-2">
                          Post on 2nd Dec 2023
                      </div>
                      <div className="pt-4">
                          {blog.content}
                      </div>
                  </div>

                  <div className="col-span-4 px-4">
                      <div className="text-slate-600 text-lg">
                          Author
                      </div>
                      <div className="flex w-full">
                          <div className="pr-4 flex flex-col justify-center">
                              <Avatar size="big" name={blog?.author?.name || "Anonymous"}/>
                          </div>
                          <div>
                              <div className="text-xl font-bold">
                                  {blog?.author?.name || "Anonymous"}
                              </div>
                              <div className="pt-2 text-slat-500">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, neque. Deserunt repellendus impedit distinctio praesentium.
                              </div>
                          </div>
                     </div>
                  </div>
                 
              </div>
          </div>
      </div>
    )
  }
  export default SingleBlog