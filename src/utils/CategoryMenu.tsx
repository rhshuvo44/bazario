import Link from "next/link";

interface MenuItem {
  label: string;
  path: string;
  subcategories?: MenuItem[];
}

const renderMenu = (items: MenuItem[]) =>
  items.map((item, index) => (
    <li key={index}>
      {item.subcategories ? (
        <details>
          <summary>{item.label}</summary>
          <ul>{renderMenu(item.subcategories)}</ul>
        </details>
      ) : (
        <Link href={item?.path}>{item.label}</Link>
      )}
    </li>
  ));

export default renderMenu;
