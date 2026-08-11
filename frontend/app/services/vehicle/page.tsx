import ProcedureCard from "@/components/ProcedureCard";
import { vehicleProcedures } from "@/lib/vehicle";

export default function TransportVehiclePage() {
  return (
    <main>
      <h1>🚗 Transport & Vehicles</h1>

      <p>Select a procedure.</p>

      {vehicleProcedures.map((procedure) => (
        <ProcedureCard
          key={procedure.slug}
          icon={procedure.icon}
          title={procedure.title}
          description={procedure.description}
          slug={procedure.slug}
          category="vehicle"
        />
      ))}
    </main>
  );
}