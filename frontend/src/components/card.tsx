interface CardProps {
  data: {
    id: string
    title: string
    description: string
    link: string
  }
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="bg-[#f4f6f8] rounded-md border border-[#d1dbe7]">
      <h3 className="px-4 py-2 border-b border-[#d1dbe7] font-bold">
        {data.title}
      </h3>
      <p className="px-4 py-2 min-h-24">{data.description}</p>
    </div>
  )
}
