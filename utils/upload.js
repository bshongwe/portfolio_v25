
import axios from "axios";
export const upload = async(file) => {  //for single uplload
    const formData = new FormData()
       formData.append("file", file);
    formData.append("upload_preset", "Chat__app2023_success");
    const { data } = await axios.post("https://api.cloudinary.com/v1_1/Ernest/image/upload", formData)
    return {publicId:data?.public_id,url:data?.secure_url}
}


export const uploadFile = async (images) => {
  let imgArr = [];
  for (const item of images) {
    const formData = new FormData();
    formData.append("file", item);
    formData.append("upload_preset", "Chat__app2023_success");
    formData.append("cloud_name", "Ernest");

    const res = await fetch("https://api.cloudinary.com/v1_1/Ernest/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    imgArr.push({ public_id: data.public_id, url: data.secure_url });
  }
  return imgArr;
};
