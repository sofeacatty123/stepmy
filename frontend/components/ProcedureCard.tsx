type ProcedureCardProps = {
  title: string;
};

export default function ProcedureCard({
  title,
}: ProcedureCardProps) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}