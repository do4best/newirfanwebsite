import Image from "next/image";
import {Typography} from "@mui/material";
import Hero from "@/components/hero";
import WhoisMoveric from "@/components/subpages/WhoisMoveric";
import Services from "@/components/subpages/services";
import UpcomingGigs from "@/components/subpages/UpcomingGigs";

export default function Home() {
  return (
   <>
 <Hero/>
       <WhoisMoveric/>
       <Services/>
       <UpcomingGigs/>

   </>
  );
}
