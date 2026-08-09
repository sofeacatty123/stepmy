import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import ProcedureCard from "@/components/ProcedureCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProcedureCard title="Passport Renewal" />
      <ProcedureCard title="Driver's License Application" />
      <ProcedureCard title="MyKad Application" />
      
    </>
  );
}