import {useState} from 'react';
import { useRouter } from 'next/router';
const Index = ({ articles }) =>{
    const router= useRouter()
    const [posts,setPosts] = useState(articles)
    const searchcategory = async () =>{
        console.log("khadama a sata")
        const res = await fetch('http://localhost:3000/api/article/data')
        const {data} =await res.json()
        console.log(data)
        setPosts(data)
        console.log(event)

    }
    return (
  
      <section class=" pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
  
        <div className="mt-11 mb-11">
          <p className=" font-bold"> <i className="fas fa-th-list fill-current text-teal-400 mr-3 "> </i>Categories</p>
        </div>
  
        <div class="grid grid-cols-7 gap-9 mr-12 ml-12">
         <button> <div className="border border-black rounded-lg text-center h-18 text-sm pt-3 ">Design <div className="flex justify-center items-center "> <i className="fas fa-pencil-ruler text-yellow-300 block "></i></div></div></button>
          <div className="border border-black rounded-lg text-center h-18 text-sm ">Web developpement <div className="flex justify-center items-center "> <i className="fas fa-code text-rose-500 block "></i></div></div>
  
          <div className="border border-black rounded-lg text-center h-18 text-sm ">Mobile developpement <div className="flex justify-center items-center "> <i className="fas fa-mobile-alt text-orange-500 block "></i></div></div>
          <div className="border border-black rounded-lg text-center h-18 text-sm pt-3">Cloud <div className="flex justify-center items-center "> <i className="fas fa-cloud-upload-alt text-blue-400 block "></i></div></div>
        <button onClick={()=>searchcategory('data')}>  <div className="border border-black rounded-lg text-center h-18 text-sm pt-3">Data <div className="flex justify-center items-center "> <i className="fas fa-database text-purple-500 block "></i></div></div></button>
          <div className="border border-black rounded-lg text-center h-18 text-sm pt-3">Security <div className="flex justify-center items-center "> <i className="fas fa-shield-alt text-red-600 block "></i></div></div>
          <div className="border border-black rounded-lg text-center h-18 text-sm pt-3 ">Devops <div className="flex justify-center items-center "> <i className="fab fa-dev text-green-500 block "></i></div></div>
        </div>
  
  
        <div className="grid grid-cols-3 gap-6 mr-10 ml-10 grid-rows-3 mt-20 ">
        {posts.map(article =>{
          return<div>
             
              <a onClick={()=> router.push(`/article/${article._id}`)}>
             <div className=" overflow-hidden shadow-lg mt-4 rounded-2xl bg-white pb-3" >
             <div className="px-6 py-4  ">
            <span className="bg-teal-400 text-white rounded-lg pr-2 pl-2 float-right"> {article.category}</span>
          </div>
            <div className="px-6 py-4  ">
              <div className="flex float-left">
                <button className="float-left ml-auto border rounded-full ml-2 w-8 h-8 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <i className="fas fa-user fill-current"></i>
                </button>
                <div>
                  <strong className="ml-2">Andrew Alfred</strong>
                </div>
              </div>
            </div>
  
            <div className="p-6   text-left font-serif font-bold">
             
            </div>
  
            <div className="p-6   text-right">
              <span className="float-left ml-3 font-bold text-2xl font-serif"> {article.title}</span>
            </div>
            <div className="p-6   text-right">
              <span className="float-left ml-3"> {article.description}</span>
            </div>
          </div>
          </a>
          </div>
        })}
       
         
  
        </div>
  
      </section>
  
  
    );
  }
  
 Index.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/article');
    const { data } = await res.json();
  
    return { articles: data }
  }
  
  export default Index;