import type { Blog } from '../../types/blog'

const BlogCard = ({ blog, setDetailed }: {
  blog: Blog, setDetailed: React.Dispatch<React.SetStateAction<string>>
}) => {

  return (
    <div className='flex flex-col gap-2.5 card border-2 border-gray-100 w-[90%] px-8 py-4 cursor-pointer' onClick={() => setDetailed(`${blog?.id}`)}>
      <div className='typeandDate text-gray-400 flex justify-between'>
        <div className='uppercase font-bold text-[0.9rem]'>{blog?.category[0]}</div>
        <div className='lowercase text-[0.8rem]'>{Math.floor((Date.now() - Date.parse(blog?.date)) / (1000 * 60 * 60 * 24 * 7))} weeks ago</div>
      </div>
      <div className='heading font-black text-2xl'>
        {blog?.title}
      </div>
      <div className='description font-400 text-gray-600 text-[1.1rem]'>
        {blog?.description}
      </div>
      <div className="tags bg-gray-300 w-fit px-2 py-1 rounded-full text-[0.9rem]">
        {blog?.category[1]??blog?.category[0]}
      </div>
    </div>
  )
}

export default BlogCard