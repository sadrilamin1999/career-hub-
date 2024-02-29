import { useEffect, useState } from "react";

const Featured = () => {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("../../data/jobs.json");
        const data = await res.json();
        setJobData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(jobData);
  return (
    <div className="container mx-auto py-32">
      <h4 className="text-6xl font-semibold text-center">Featured Jobs</h4>
      <p className="mt-4 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="catagories grid grid-cols-2 gap-6">{}</div>
    </div>
  );
};

export default Featured;
