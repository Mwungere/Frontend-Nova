"use server "
import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { setTimeout } from "timers"
import { log } from "console"
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

 if(res.status == 200  && url =="http://127.0.0.1:3500/api/v1/users"){
  toast.success(res.data.message,{duration: 2000, position:"top-right"})
  router.replace("/signin");
 }
 if(res.status == 200  && url =="http://127.0.0.1:3500/api/v1/users/login"){
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