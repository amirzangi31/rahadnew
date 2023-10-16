import React from "react";
import CreateResidencyPage from "@/components/templates/createResidency/CreateResidencyPage";

import axios from 'axios'


const CreateResidency = async () => {
  const newCode = []
  const cities = []
 try {
  const codeNumbers = await axios.post(`https://backendrahad.pythonanywhere.com/Location/`, {
    step: 2,
    country: "ایران",
  });
  
  for (let num of codeNumbers.data.data ){
    newCode.push({name : num.phone_code , value : num.phone_code})
    cities.push({name : num.PR , value : num.PR})
  }

 } catch (error) {
   console.log(error);
 }



  return <CreateResidencyPage codes={newCode} states={cities} baseUrl={"https://backendrahad.pythonanywhere.com"} />;
};

export default CreateResidency;
