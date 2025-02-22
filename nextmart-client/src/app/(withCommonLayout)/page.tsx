'use client'
import { useUser } from "@/context/UserContext";



const HomePage = () => {
  const user= useUser()
  console.log(user);
  return (
    <div>
      <p>this is home page</p>
    </div>
  );
};

export default HomePage;
