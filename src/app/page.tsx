import { Accordion } from "@/src/components/ui/accordion";
import { Poppins } from "next/font/google";
import { buttonVariants } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import MainPage from "./main/page";

export default function Home() {

  return (
    <div>
      <MainPage></MainPage>
    </div>
  );

}



