import Image from './Image'

const FeatureCard = ({ title, image, description }) => {
  return (
    <div className="flex flex-col items-center text-center shadow-md hover:shadow-xl bg-neutral-50 rounded-lg p-2">
      <h2 className="m-4 text-2xl font-semibold">{title}</h2>
      <Image
        src={image}
        alt={title}
        className="m-4 border-solid border-2 border-gray-300 w-full h-auto max-w-[29rem]"
      />
      <p className="m-4 text-base">{description}</p>
    </div>
  )
}

export default FeatureCard
