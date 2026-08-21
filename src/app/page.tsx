import Image from "next/image";
import {Typography} from "@mui/material";
import Hero from "@/components/hero";
import WhoisMoveric from "@/components/subpages/WhoisMoveric";
import Services from "@/components/subpages/services";

export default function Home() {
  return (
   <>
 <Hero/>
       <WhoisMoveric/>
       <Services/>

   </>
  );
}
