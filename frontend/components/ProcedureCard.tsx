import Link from "next/link";

type ProcedureCardProps = {
  icon : string;
  title: string;
  description: string;
  slug:string;
  category: string;

};

export default function ProcedureCard({
  icon,
  title,
  description,
  slug,
  category,
}: ProcedureCardProps) {
    console.log({
  category,
  slug,
  href: `/services/${category}/${slug}`,
});
  return (
    <Link href={`/services/${category}/${slug}`}>
      <div>
        <h2>{icon}{title}</h2>
        <p>{description}</p>
        <span>Learn More</span>
      </div>
    </Link>
  );
}