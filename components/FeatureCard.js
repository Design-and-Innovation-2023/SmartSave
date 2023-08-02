const FeatureCard = ({ title, image, description }) => {
  return (
    <div className="flex flex-col items-center text-center shadow-md rounded-lg p-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <img src={image} alt={title} className="w-full h-auto max-w-[29rem]" />
      <p className="text-base">{description}</p>
    </div>
  )
}

export default FeatureCard
