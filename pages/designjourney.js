import Image from '@/components/Image'
import ImageModal from '@/components/ImageModal'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function DesignJourney() {
  return (
    <>
      <p className="my-14 text-center font-thin text-6xl">Our Design Journey</p>

      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 text-center mb-4">Planning</h3>
          <Image
            src="/static/images/smartsave.png"
            alt="smartsave"
            width="1000px"
            height="1000px"
          />
          <h4 className="text-right">21 Jul</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 text-center mb-4">Planning</h3>
          <Image
            src="/static/images/smartsave.png"
            alt="smartsave"
            width="1000px"
            height="1000px"
          />
          <h4 className="text-right">21 Jul</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 text-center mb-4">Planning</h3>
          <Image
            src="/static/images/smartsave.png"
            alt="smartsave"
            width="1000px"
            height="1000px"
          />
          <h4 className="text-right">21 Jul</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 text-center mb-4">Planning</h3>
          <Image
            src="/static/images/smartsave.png"
            alt="smartsave"
            width="1000px"
            height="1000px"
          />
          <h4 className="text-right">21 Jul</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 text-center mb-4">Planning</h3>
          <Image
            src="/static/images/smartsave.png"
            alt="smartsave"
            width="1000px"
            height="1000px"
          />
          <h4 className="text-right">21 Jul</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <p className="mt-32 my-14 text-center font-thin text-5xl">Our Poster & Architecture</p>
      <div className="mt-12 grid grid-cols-1 gap-12">
        <div className="flex flex-col items-center text-center shadow-md rounded-lg p-2 hover:shadow-xl w-min m-auto">
          <ImageModal
            src={'/static/images/poster_7A.png'}
            className="w-auto h-auto max-w-[29rem]"
          />
        </div>
        <div className="flex flex-col items-center text-center shadow-md rounded-lg p-2 hover:shadow-xl">
          <h2 className="text-2xl font-semibold"></h2>
          <Image src={'/static/images/architecture.png'} className="w-full h-auto" />
        </div>
      </div>
    </>
  )
}
