import Link from "next/link";

type CategoryCardProps = {
  icon: string;
  title: string;
  description: string;
  slug:string;
};

export default function CategoryCard(
    {
    icon,
    title,
    description,
    slug,
}: CategoryCardProps) {
    console.log("slug =", slug);
  return (
    <Link href={`/services/${slug}`}
    className="category-card">
      
        <h2>{icon} {title}</h2>
        <p>{description}</p>
      
    </Link>
  );
  
}