import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/categories";

export default function ServicesPage() {
  return (
    <main>
      <h1>Browse Services</h1>

      <p>Find the services you need below.</p>

    {categories.map((category) => {
  console.log("CATEGORY:", category);

  return (
    <CategoryCard
      key={category.slug}
      icon={category.icon}
      title={category.title}
      description={category.description}
      slug={category.slug}
    />
  );
})}
    </main>
  );
}