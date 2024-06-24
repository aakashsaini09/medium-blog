interface BlogCardProps{
    autherName: string;
    title: string; 
    content: string;
    publishedDate: string
}
const BlogCard = ({autherName, title, content, publishedDate}: BlogCardProps) => {
  return (
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen max-w-screen-md cursor-pointer">
      <div className="flex items-center gap-3 my-3">
        <div className="flex justify-center flex-col "><Avatar name={autherName} /></div>
         <div className="font-bold text-2xl text-slate-800">{autherName}</div> 
         <div className="font-extralight text-gray-600 text-base">{publishedDate}</div>
      </div>

      <div className="font-bold text-3xl mb-2">{title}</div>
      <div className="text-slate-900 text-base"> {content.slice(0, 150) + "..."}</div>
      <div className="text-gray text-base font-extralight text-slate-500 mt-4 pb-3 mb-1"> {`${Math.ceil(content.length / 100)} Minutes`} </div>
    </div>
  )
}
function Avatar({name}: {name: string}){
  let tempNameValue : string = name.toUpperCase()
  return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full">
  <span className="font-medium text-gray-300">{tempNameValue[0]}</span>
</div>
}

export default BlogCard
