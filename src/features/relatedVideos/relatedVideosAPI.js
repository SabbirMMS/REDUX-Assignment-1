import axios from "../../utils/axios";
export const getRelatedVideos = async({tags, id})=>{
  // ['css', 'javascript']
  // ['tags_like=css', 'tags_like=javascript] + join(&)

  // videos/tags_like=javascript&tags_like=CSS&id_ne=1
    let limit = 5
    let queryString = tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${id}&_limit=${limit}`;
    const response = await axios.get(`/videos?${queryString}`);
    console.log(queryString);
    
    if(response.data.length > 0){
      console.log(response.data);
      return response.data;
    }else{
      const resetResponse = await axios.get(`/videos?id_ne=${id}&_limit=${limit}`);
      return resetResponse.data;
    }

}