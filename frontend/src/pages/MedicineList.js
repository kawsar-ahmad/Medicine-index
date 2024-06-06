import Medicine from "../components/Medicine";

export default function MedicineList({ items, name, onChange, query }) {
  return (
    <ul className="list">
      {items
        .filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.generic_name.toLowerCase().includes(query.toLowerCase())
        )
        ?.map((item) => (
          <Medicine
            item={item}
            key={item.name}
            name={name}
            onChange={onChange}
            items={items}
          />
        ))}
    </ul>
  );
}
