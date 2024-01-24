import axios from "axios"
import toast from "react-hot-toast"
interface FormData{
    names?: string | null | undefined ,
    email?: string | null | undefined ,
    confirmPassword?: string,
    password?: string
};

export const handleRequest = async (data: FormData, url:string) => {
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
  
  if (res.status === 200) {
    toast.success(res.data.message, {
      duration: 5000,
      position: "top-right",
    });
  }
} catch (error: any) {
  if (error.response) {
    const status = error.response.status;

    if (status === 409) {
      toast.error(error.response.data.message, {
        duration: 5000,
        position: "top-right",
      });
    } else if (status === 401) {
         toast.error(error.response.data.message, {
        duration: 5000,
        position: "top-right",
      });
    } else {
      toast.error(`Unexpected error: ${status}`, {
        duration: 5000,
        position: "top-right",
      });
    }
  }
}

}