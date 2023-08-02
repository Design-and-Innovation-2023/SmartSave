import FeatureCard from '@/components/FeatureCard.js'
import Image from '@/components/Image'
import { YouTube } from 'mdx-embed'
import { useEffect } from 'react'
import { Document } from 'react-pdf'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function SmartSave() {
  useEffect(() => {
    let absoluteDivHeight = document.getElementById('absoluteDiv').offsetHeight
    let blankDiv = document.getElementById('blankDiv')
    blankDiv.style.height = absoluteDivHeight + 5 + 'px'
  }, [])

  return (
    <>
      <div
        id="absoluteDiv"
        className="justify-left absolute left-0 w-full h-5/6 bg-neutral-950 flex items-center hover:bg-black"
      >
        <div className="text-2xl text-white mx-32 font-light">Test</div>
        <div className="w-5/12">
          <YouTube youTubeId="mPpSH9488L8" autoPlay="true" />
        </div>
      </div>
      <div id="blankDiv"></div>
      <p className="text-center mt-16 font-light text-3xl">
        Our <em>main</em> features include...
      </p>
      <div className="mt-12 grid grid-cols-2 gap-6">
        <FeatureCard
          title="Feature 1"
          image="/static/images/smartsave.png"
          description="This is a description of feature 1"
        />
        <FeatureCard
          title="Feature 2"
          image="/static/images/smartsave.png"
          description="This is a description of feature 2"
        />
        <FeatureCard
          title="Feature 3"
          image="/static/images/smartsave.png"
          description="This is a description of feature 3"
        />
        <FeatureCard
          title="Feature 4"
          image="/static/images/smartsave.png"
          description="This is a description of feature 4"
        />
      </div>

      <p className="mt-32 mb-12 text-center font-thin text-5xl">Our Design Journey</p>

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
    </>
  )
}
