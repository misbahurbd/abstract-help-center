import { Link } from "react-router-dom"
import { FooterMenu } from "./footer-menu"

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container grid grid-cols-5 gap-8 py-12">
        <FooterMenu
          title="Abstract"
          links={[{ label: "Branches", href: "/" }]}
        />
        <FooterMenu
          title="Resources"
          links={[
            { label: "Blog", href: "/" },
            { label: "Help Center", href: "/" },
            { label: "Release Notes", href: "/" },
            { label: "Status", href: "/" },
          ]}
        />
        <FooterMenu
          title="Community"
          links={[
            { label: "Twitter", href: "/" },
            { label: "LinkedIn", href: "/" },
            { label: "Facebook", href: "/" },
            { label: "Dribbble", href: "/" },
            { label: "Podcast", href: "/" },
          ]}
        />
        <div className="space-y-6">
          <FooterMenu
            title="Company"
            links={[
              { label: "About Us", href: "/" },
              { label: "Careers", href: "/" },
              { label: "Legal", href: "/" },
            ]}
          />
          <div className="space-y-0.5">
            <h5 className="font-bold text-white">Contact Us</h5>
            <Link
              className="text-gray-200 hover:underline"
              to="mailto:info@abstract.com"
            >
              info@abstract.com
            </Link>
          </div>
        </div>
        <div className="pt-36 space-y-4">
          <img
            src="/logo.png"
            className="size-8"
          />
          <ul className="text-gray-200">
            <li>&copy; Copyright 2024</li>
            <li>Abstract Studio Design, Inc.</li>
            <li>All right reserved</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
