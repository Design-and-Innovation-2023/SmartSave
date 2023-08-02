import Image from '@/components/Image'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function SmartSave() {
  return (
    <>
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        />
      </VerticalTimeline>
    </>
  )
}
