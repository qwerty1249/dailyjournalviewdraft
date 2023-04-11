import axios from "axios";

const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "fuszvfpy");
    form.append("cloud_name", "dyonjjwxn");

    const res = await axios.post("https://api.cloudinary.com/v1_1/dyonjjwxn/image/upload", form);
    return res.data.secure_url;
  } catch (error) {
    return;
  }
};

export default uploadPic;
