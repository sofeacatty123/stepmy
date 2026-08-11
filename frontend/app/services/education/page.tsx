import ProcedureCard from "@/components/ProcedureCard";
import { educationServices } from "@/lib/education";


export default function EducationPage() {
  return (
    <main>
      <h1>Education Services</h1>

      <p>Select a procedure.</p>
          {educationServices.map((procedure) => (
        <ProcedureCard
          key={procedure.slug}
          icon={procedure.icon}
          title={procedure.title}
          description={procedure.description}
          slug={procedure.slug}
          category="education"
        />
      ))}

      {/* We'll put our ProcedureCard list here later */}
    </main>
    
  );
  
}