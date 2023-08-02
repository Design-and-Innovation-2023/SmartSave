import { useState, useEffect } from 'react'
import Image from './Image'

function ImageModal({ src }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    // Reset scale when closing modal
    if (!isOpen) {
      setScale(1)
    }
  }, [isOpen])

  const handleWheel = (e) => {
    e.preventDefault()

    if (e.deltaY < 0) {
      setScale((prevScale) => prevScale + 0.1)
    } else {
      setScale((prevScale) => (prevScale > 0.2 ? prevScale - 0.1 : 0.2))
    }
  }

  return (
    <>
      <Image
        src={src}
        alt="Thumbnail"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer w-auto h-auto max-w-[29rem] object-cover"
      />

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            className="absolute top-4 right-4 bg-white text-black px-2 py-1"
          >
            X
          </button>
          <div onWheel={handleWheel} className="max-w-full max-h-full overflow-auto">
            <Image src={`${process.env.BASE_PATH || ''}${src}`} alt="Full size" />
          </div>
        </div>
      )}
    </>
  )
}

export default ImageModal
