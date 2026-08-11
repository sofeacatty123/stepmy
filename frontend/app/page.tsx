import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import ProcedureCard from "@/components/ProcedureCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="procedures">
        <h2>Popular Procedures</h2>
        <div className="procedure-cards">
          <ProcedureCard
            icon="🛂  "
            title="Passport Renewal"
            description="Renew your passport online or in person."
            slug="passport-renewal"
          />
          <ProcedureCard
            icon="🚗  "
            title="Driver's License Application"
            description="Apply for a new driver's license."
            slug="drivers-license-application"
          />
          <ProcedureCard
            icon="💳  "
            title="MyKad Application"
            description="Apply for a new MyKad."
            slug="mykad-application"
          />
        </div>
      </section>
    </>
  );
}