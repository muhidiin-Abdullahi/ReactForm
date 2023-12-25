function Post(props){
   return <div className="flex justify-center m-10">
      <div className="border-2 mt-4 border-gray-500 ">
      <img className="h-[300px] w-[400px]" src={props.image} />
      <p>{props.title}</p>
      </div>
   </div>
}
export default Post