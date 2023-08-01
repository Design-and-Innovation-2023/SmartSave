function ProfileCard({ name, avatar, description }) {
  return (
    <div className="m-4 flex items-center border border-gray-300 p-4">
      <img src={avatar} alt={name} className="mr-4 h-28 w-28 rounded-full" />
      <div>
        <h2 className="mt-0 text-xl font-bold">{name}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

export default ProfileCard
