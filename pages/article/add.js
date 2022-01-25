import {useState,useEffect} from 'react';
import {useRouter} from 'next/router';
function addArticle(){
  const [form,setForm] =useState({title:'',category:'',description:''});
  const [isSubmitting,setIsSubmitting] =useState(false)
  const[errors,setErrors] = useState({})
  const router=useRouter();

  useEffect(() =>{
    if(isSubmitting){
      
      if(Object.keys(errors).length === 0){
        createArticle();
       
      }
      else{
        setIsSubmitting(false);
        console.log(errors)
      }
    }
  },[errors])

  const createArticle =async () =>{
    try{
     
      const res=await fetch('http://localhost:3000/api/article',{
        method:'POST',
        headers:{
          "accept": "application/json",
          "Content-type" : "application/json"
        },
        body: JSON.stringify(form)
      })
      router.push("/");
    }catch(error){
      console.log(error);
    }
  }
  const handleSubmit = (e) => {
    console.log("form");
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
}

const handleChange = (e) => {
  console.log("kayan ");
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
}

const validate = () => {
  console.log("buyxkil");
    let err = {};

    if (!form.title) {
        err.title = 'Title is required';
    }
    if (!form.description) {
        err.description = 'Description is required';
    }
    if (!form.category) {
      err.category = 'category is required';
  }

    return err;
}
    return <div>
       <form onSubmit={handleSubmit}>
  <div  className="bg-indigo-50 min-h-screen md:px-20 pt-6">
    <div  className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
      <h1  className="text-center text-2xl font-bold text-gray-500 mb-10">ADD POST</h1>
      <div  className="space-y-4">
        <div>
          <label   className="text-lx font-serif">Title:</label>
          <input onChange={handleChange} type="text" placeholder="title" name="title"  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
        <div>
          <label   className="text-lx font-serif">Name:</label>
          <select  onChange={handleChange} name="category"  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" >
            <option>Web developement</option>
            <option>Mobile developement</option>
            <option>Security</option>
            <option>data</option>
            <option>Cloud</option>
            <option>Devops</option>
            </select>
        </div>
        <div>
          <label   className="block mb-2 text-lg font-serif">Description:</label>
          <textarea onChange={handleChange} name="description" cols="30" rows="10" placeholder="whrite here.."  className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
        </div>
       
       
        <button type='submit' className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
      </div>
    </div>
  </div>
</form>
    </div>
}

export default addArticle