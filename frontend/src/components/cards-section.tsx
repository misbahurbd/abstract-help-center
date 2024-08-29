import { Card } from "./card"

const cards = [
  {
    id: "fj;algjow40gjaoif",
    title: "Branches",
    description:
      "Abstract Branches lets you manage, version, and document your designs in one place.",
    link: "",
  },
  {
    id: "fj;algjow4sgsf0gjaoif",
    title: "Manage your account",
    description:
      "Configure your account settings, such as your email, profile details, and password.",
    link: "",
  },
  {
    id: "fj;algjow423sgsf0gjaoif",
    title: "Manage organizations, teams, and projects",
    description:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
    link: "",
  },
  {
    id: "fj;algjo2453sf0gjaoif",
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
    link: "",
  },
  {
    id: "fj5d4453sf0gjaoif",
    title: "Authenticate to Abstract",
    description:
      "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    link: "",
  },
  {
    id: "42dg453sf0gjaoif",
    title: "Abstract support",
    description: "Get in touch with a human.",
    link: "",
  },
]

export const CardsSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-20">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 gap-16">
          {cards.map(card => (
            <Card
              key={card.id}
              data={card}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
