import { identityProcedures } from "@/lib/identity";

export default function IdentityPage() {
  return (
    <main>
      <h1>Identity & Civil Registration</h1>

      <p>Select a procedure.</p>
        {identityProcedures.map((procedure) => (
            <p>{procedure.title}</p>
        ))}

      {/* We'll put our ProcedureCard list here later */}
    </main>
    
  );
  
}