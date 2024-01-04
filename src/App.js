import React, { useEffect, useState } from "react";
import { apiUrl } from "./data";
import { filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";
import Card from "./Components/Card";
import Spinner from "./Components/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);
  async function fetchData(){

   setLoading(true);
      try {
        let response = await fetch(apiUrl);
        let output = await response.json();
        //save  data into a variable
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };
    useEffect(()=>{
      fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
      <div>
        <Filter filterData={filterData}
        category={category}
        setCategory={setCategory} />
        </div>
      
<div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
  {
       loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)
  } 
  
  </div>

      </div>
 
      
    </div>
  );
};

export default App;
