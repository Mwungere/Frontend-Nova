"use client"
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
interface FormData{
    username?: string | null | undefined ,
    email?: string | null | undefined ,
    password?: string
};

interface LoginRequest{
  email?: string | null | undefined ,
    password?: string
}


export const handleRequest = async (data:FormData | LoginRequest , url:string , router: ReturnType<typeof useRouter>) => {  
    try {
      const res = await axios.post(url,data,
    {
      headers: {
        "Content-Type":"application/json",                
      },
    }
  );

 if(res.status == 200  && url =="http://194.163.167.131:7500/api/v1/users/registerUser"){
  toast.success(res.data.message,{duration: 2000, position:"top-right"})
  router.replace("/signin");
 }
 if(res.status == 200  && url =="http://194.163.167.131:7500/api/v1/users/loginUser"){
  console.log(res.data);
  
  toast.success(res.data.message,{duration:2000 , position:"top-right"})
  Cookies.set("user", JSON.stringify(res.data.user))
  Cookies.set("token",(res.data.token))
  router.replace("/dashboard")
 }
} catch (error: any) {  
  toast.error(error.response.data.error, {duration:2000, position:"top-right"})
  return;
}
}