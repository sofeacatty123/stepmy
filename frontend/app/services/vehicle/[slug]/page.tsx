import ReactMarkdown from "react-markdown";
import { vehicleProcedures } from "@/lib/vehicle";
import { getProcedure } from "@/lib/markdown";

type ProcedurePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProcedurePage({
  params,
}: ProcedurePageProps) {

  const { slug } = await params;

  const procedure = vehicleProcedures.find(
    (item) => item.slug === slug
  );

  if (!procedure) {
    return (
      <main>
        <h1>Procedure not found</h1>
      </main>
    );
  }

 const markdown = getProcedure("vehicle", slug);

  return (
    <main>
      <h1>{procedure.title}</h1>

      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </main>
  );
}