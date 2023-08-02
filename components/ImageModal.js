import { useState } from 'react'
import Image from './Image'

function ImageModal({ src }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Image
        src={src}
        alt="Thumbnail"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer object-cover"
      />

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            className="absolute top-4 right-4 text-xl text-white font-bold px-2 py-1"
          >
            X
          </button>
          <Image src={src} alt="Full size" className="max-w-full max-h-full" />
        </div>
      )}
    </>
  )
}

export default ImageModal
