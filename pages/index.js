import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

import { motion } from 'framer-motion'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home() {
  const introHeaderVariants = {
    hide: {
      opacity: 0,
      x: -150,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  }
  const cardVariants = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 1,
      },
    },
  }
  const cardVariants1 = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 1,
        delay: 0.2,
      },
    },
  }
  const cardVariants2 = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 1,
        delay: 0.4,
      },
    },
  }
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="relative mr-auto bg-white py-16 transition ease-in-out">
          <Image
            src="/static/images/smartsave.png"
            alt="smartsave"
            width="1000px"
            height="1000px"
          />
        </div>
        <div className="absolute left-0 w-full bg-neutral-900 p-20 text-center text-justify text-5xl font-thin text-neutral-100 hover:bg-neutral-800">
          <motion.div initial="hide" whileInView="show" exit="hide" variants={introHeaderVariants}>
            <p>
              Your savings journey <em>elegantly</em> streamlined.
            </p>
            <p className="font-light">
              Allow your assets to <em>flourish </em>like never before.
            </p>
          </motion.div>
        </div>
      </div>
      <p className="mt-96 text-center text-2xl font-light">
        Our features are <em>designed</em> to help you save effectively, and on any device.
      </p>
      <span className="mt-20 inline-grid grid-cols-3 gap-44">
        <motion.div
          className="text-center drop-shadow-md hover:drop-shadow-xl"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={cardVariants}
        >
          <div className="inline-block rounded bg-neutral-50">
            <Image
              src="/static/images/cost-effective.png"
              alt="cost-effective"
              width="300px"
              height="300px"
              className="p-8"
            />
          </div>
          <p className="mt-2 text-xl font-medium">Cost-effective</p>
        </motion.div>
        <motion.div
          className="text-center drop-shadow-md hover:drop-shadow-xl"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={cardVariants1}
        >
          <div className="inline-block rounded bg-neutral-50">
            <Image
              src="/static/images/swift.png"
              alt="swift"
              width="300px"
              height="300px"
              className="p-8"
            />
          </div>
          <p className="mt-2 text-xl font-medium">Swift</p>
        </motion.div>
        <motion.div
          className="text-center drop-shadow-md hover:drop-shadow-xl"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={cardVariants2}
        >
          <div className="inline-block rounded bg-neutral-50">
            <Image
              src="/static/images/multiplatform.png"
              alt="multiplatform"
              width="300px"
              height="300px"
              className="p-8"
            />
          </div>
          <p className="mt-2 text-xl font-medium">Multi-platform</p>
        </motion.div>
      </span>
      <div className="mt-24 mb-4">
        <div className="flex shrink-0 flex-col items-center">
          <button
            onClick={() => {
              window.location.href = window.location.href + 'smartsave'
            }}
            className="rounded-full bg-neutral-900 px-4 py-2 text-base text-sm font-semibold leading-6 text-neutral-50 shadow-sm outline hover:bg-neutral-50 hover:text-neutral-900 hover:transition-all"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  )
}
