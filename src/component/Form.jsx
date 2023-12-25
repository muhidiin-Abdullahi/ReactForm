import { useState, useRef } from "react";
import Post from "./Post";
import { document } from "postcss";




function Form() {
   const [isOpen, setIsOpen] = useState(false)
   
   const [title, SetTitlle ] = useState (" ")
   const  [Image, setImage] = useState(null)
   const [post , SetPost ] = useState([])

   const imageref = useRef()

   const HandlePost = (e) =>{
    e.preventDefault()
    const newPost = {title, Image}
    if(title != " " && Image != null){
      SetPost([...post,newPost ])
      SetTitlle(" ")
      imageref.current.value = null
      setIsOpen(false)
      
    }
   }


   const HandleIsOpen = () =>{
    // document.body.style.backgroundColor = "red"
      setIsOpen(true)
      
   }

   const HandleIsClose = () =>{
    // document.body.style.background =""
      setIsOpen(false)
   }




  return (
    <div>
      

      <button onClick={HandleIsOpen} className="h-[60px] w-[60px] bg-blue-500 text-5xl pb-4 text-white fixed right-4 bottom-4 rounded-full ">
        +
      </button>
   
      <div style={{ display: isOpen === true ? "block" : "none"}} className="bg-blue-500 pt-2 pb-10 w-[300px] mx-10 pl-2 px-10 sm:mx-[30%] absolute rounded hidden">
      <i onClick={HandleIsClose} class="fa-solid fa-xmark sm:ml-[430px] ml-[260px] cursor-pointer text-white text-3xl"></i>

        <form >

          <input value={title} onChange={ (event) =>{
            SetTitlle(event.target.value)
          } }  
          
          className="h-[50px] w-[290px] rounded-xl " type="text" placeholder="  Enter Title" /> <br />
          <input ref={imageref} type="file"
          onChange={(e) =>{
            setImage(e.target.files[0])
          }}
           className="mt-5 file:bg-yellow-400 file:border-0 file:p-3 file:rounded"  /><br />
          <button onClick={HandlePost} className="bg-white text-3xl mt-10 rounded-xl py-3 px-10 hover:bg-blue-300">Post</button>
        </form>
      </div>
      {
        post.map((item)=>{
          return <Post title={item.title} image={URL.createObjectURL(item.Image)}/>
        }) 
      }

    </div>
  );
}
export default Form;
