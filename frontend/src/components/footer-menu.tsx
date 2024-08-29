import { Link } from "react-router-dom"

interface FooterMenuProps {
  title: string
  links: { label: string; href: string }[]
}

export const FooterMenu: React.FC<FooterMenuProps> = ({ title, links }) => {
  return (
    <div className="space-y-2">
      <h4 className="text-2xl font-bold text-white">{title}</h4>
      <ul className="space-y-0.5">
        {links.map(link => (
          <li key={link.href}>
            <Link
              className="text-gray-200 hover:underline "
              to={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
