import axios from "axios"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { setTimeout } from "timers"
interface FormData{
    names?: string | null | undefined ,
    email?: string | null | undefined ,
    confirmPassword?: string,
    password?: string
};

export const handleRequest = async (data: FormData, url:string , router: ReturnType<typeof useRouter>) => {
    try {
        const res = await axios.post(
      url,
      data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  
  
        if (res.status === 200 && url === "http://194.163.167.131:7500/api/v1/users/registerUser") {
            toast.success(res.data.message, {
                duration: 3000,
                position: "top-right",
            });
              setTimeout(() => {            
              return router.replace("/signin")
}, 3000);
        }
        if (res.status === 200 && url === "http://194.163.167.131:7500/api/v1/users/loginUser") {
            toast.success(res.data.message, {
                duration: 3000, 
                position: "top-right",
            });
          setTimeout(() => {      
         Cookies.set("nova_user", JSON.stringify(res.data.user))
         Cookies.set("jwt",res.data.token);
              return router.replace("/irrigation")   
}, 3000);
          
}
     
      
        
} catch (error: any) {
  if (error.response) {
    const status = error.response.status;

    if (status === 409) {
      toast.error(error.response.data.message, {
        duration: 5000,
        position: "top-right",
      });
        return;
    } else if (status === 401) {
         toast.error(error.response.data.message, {
        duration: 5000,
        position: "top-right",
         });
        return;
    } else if (status === 404) {
         toast.error(error.response.data.message, {
        duration: 5000,
        position: "top-right",
         });     
        setTimeout(() => {
            router.replace("/not-found")
        }, 3000);
        return;
    }else if (status === 500) {
            router.replace("/not-found")
        return;
    }else {
      toast.error(`Unexpected error: ${status}`, {
        duration: 5000,
        position: "top-right",
      }); 
        return; 
      }
  }
}
}