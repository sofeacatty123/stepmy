import ProcedureCard from "@/components/ProcedureCard";
import { identityProcedures } from "@/lib/identity";

export default function IdentityPage() {
  return (
    <main>
      <h1>🪪 Identity & Civil Registration</h1>

      <p>Select a procedure.</p>

      {identityProcedures.map((procedure) => (
                <ProcedureCard
        key={procedure.slug}
        icon={procedure.icon}
        title={procedure.title}
        description={procedure.description}
        slug={procedure.slug}
        category="identity"
        />
      ))}
    </main>
  )
}