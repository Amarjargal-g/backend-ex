export async function Categories() {
  const data = await fetch("http://localhost:8081/categories ");
  const { categories } = await data.json();
  return (
    <div>
      {categories.map(() => {
        return <div></div>;
      })}
    </div>
  );
}
