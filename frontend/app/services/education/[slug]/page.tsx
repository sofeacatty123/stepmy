import ReactMarkdown from "react-markdown";
import { educationServices } from "@/lib/education";
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
console.log("Slug:", slug);
console.log(educationServices);
  const procedure = educationServices.find(
    (item) => item.slug === slug
  );

  if (!procedure) {
    return (
      <main>
        <h1>Procedure not found</h1>
      </main>
    );
  }

 const markdown = getProcedure("education", slug);

  return (
    <main>
      <h1>{procedure.title}</h1>

      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </main>
  );
}
