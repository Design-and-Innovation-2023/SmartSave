import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="relative mb-8 mr-auto ">
          <Image
            src="/static/images/smartsave.png"
            alt="smartsave"
            width="1000px"
            height="1000px"
            className="rounded-full"
          />
        </div>
        <div className="mt-10 text-5xl font-thin">
          Your savings journey <em>elegantly</em> streamlined.
          <p className="font-light">
            Allow your assets to <em>flourish </em>like never before.
          </p>
        </div>
      </div>
      <span className="mt-28 inline-grid grid-cols-3 gap-44">
        <div className="text-center drop-shadow-md hover:drop-shadow-xl">
          <div className="inline-block rounded-full bg-[#f5f5f5]">
            <Image
              src="/static/images/cost-effective.png"
              alt="cost-effective"
              width="300px"
              height="300px"
              className="p-8"
            />
          </div>
          <p className="mt-2 text-xl font-medium">Cost-effective</p>
        </div>
        <div className="text-center drop-shadow-md hover:drop-shadow-xl">
          <div className="inline-block rounded-full bg-[#f5f5f5]">
            <Image
              src="/static/images/swift.png"
              alt="swift"
              width="300px"
              height="300px"
              className="p-8"
            />
          </div>
          <p className="mt-2 text-xl font-medium">Swift</p>
        </div>
        <div className="text-center drop-shadow-md hover:drop-shadow-xl">
          <div className="inline-block rounded-full bg-[#f5f5f5]">
            <Image
              src="/static/images/multiplatform.png"
              alt="multiplatform"
              width="300px"
              height="300px"
              className="p-8"
            />
          </div>
          <p className="mt-2 text-xl font-medium">Multi-platform</p>
        </div>
      </span>
      <div className="mt-36 mb-8">
        <div className="flex shrink-0 flex-col items-center">
          <button
            onClick={() => {
              window.location.href = '/smartSave'
            }}
            className="rounded-full bg-neutral-900 px-4 py-2 text-base text-sm font-semibold leading-6 text-neutral-50 shadow-sm hover:bg-neutral-50 hover:text-neutral-900"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  )
}
