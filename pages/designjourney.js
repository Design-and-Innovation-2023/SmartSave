import React, { useState, useEffect } from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import ImageModal from '@/components/ImageModal'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function DesignJourney() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <p className="my-14 text-center font-thin text-6xl">Our Design Journey</p>

      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 font-bold text-center mb-4">
            Initial Discussions and Planning
          </h3>
          <Image
            src="/static/images/week-1/ideamap.jpg"
            alt="ideamap"
            className="max-h-96 m-auto"
          />
          <h4 className="my-2 text-right">18 July - 19 July</h4>
          <p>
            Initially, we gathered for our first meeting and collectively came up with a set of
            questions to ask our client in our upcoming meeting. We also collaborated with Team 7B
            to refine these questions. In our first client meeting, we had the opportunity to
            understand the problem they were facing and the overall project scope. After the
            meeting, we individually brainstormed ideas and agreed to reconvene later to solidify
            our approach.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 font-bold text-center mb-4">
            Ideation and Conceptualisation
          </h3>
          <Image
            src="/static/images/week-1/sketch-1.jpg"
            alt="sketch"
            className="max-h-96 m-auto"
          />
          <h4 className="my-2 text-right">20 July - 21 July</h4>
          <p>
            We came together and reached a consensus on the key concepts for the solution, which
            involved providing access to interest rates, enabling account 'hopping', setting up a
            notification system, and automating the transfer of funds. We also defined our project
            goals and began sketching out potential layouts. During a brainstorming session, we
            delved into the specific features of the solution, considered user expectations, and
            focused on designing the 'Easy Access Accounts' feature (refer above). To ensure the
            best outcome, we gathered feedback from other groups and consulted potential users.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 font-bold text-center mb-4">Feedback and Revision</h3>
          <Image
            src="/static/images/week-2/figma-update.png"
            alt="figma"
            className="max-h-96 m-auto"
          />
          <h4 className="my-2 text-right">24 July - 25 July</h4>
          <p>
            After receiving feedback from professors and teaching assistants, we discussed about
            potential users and concerns related to trust. To gather more valuable insights, we
            planned to conduct additional surveys while simultaneously working on a specific
            prototype. Using the Figma design tool, we started creating our initial prototypes.
            During the prototyping phase, we explored two different models for fund transfers and
            ultimately settled on a semi-automated system.
            <p></p>
            Currently, our main goals include collecting feedback from the client, finalizing
            flowcharts, commencing website development, and continuing our work on Figma and
            presentation slides for the team's recording.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 font-bold text-center mb-4">
            Client Meetings and Iterations
          </h3>
          <Image
            src="/static/images/week-2/flowchart.png"
            alt="flowchart"
            className="max-h-96 m-auto"
          />
          <h4 className="my-2 text-right">26 July</h4>
          <p>
            We had another meeting with the client to discuss about our current design and how it is
            being used. We received valuable feedback on the onboarding process, naming scheme, and
            how information is presented on the prototype. With this feedback in mind, we made plans
            to enhance the overall design of the prototype and incorporate the inputs we received.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 font-bold text-center mb-4">Usability Testing</h3>
          <Image
            src="/static/images/week-2/figma-new.png"
            alt="figma-new"
            className="max-h-96 m-auto"
          />
          <h4 className="my-2 text-right">28 July</h4>
          <p>
            We carried out 'think-aloud' usability tests to better understand how users interact
            with the application. These tests provided valuable insights into visual cues, the
            sorting functionality, and the use of abbreviations.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(38 38 38)' }}
          iconStyle={{ background: 'rgb(38 38 38)', color: '#fff' }}
          iconClassName="text-center font-light drop-shadow-md"
        >
          <h3 className="font-text-neutral-50 font-bold text-center mb-4">
            Finalising the Prototype
          </h3>
          <Image src="/static/images/week-3/graph.png" alt="graph" className="max-h-96 m-auto" />
          <h4 className="text-right">31 July - 1 August</h4>
          <p>
            We continued our work on the Figma prototype and held discussions about the poster's
            design. Additionally, we arranged a catch-up call with the client for the next day.
            During the meeting with the client, we presented the current state of our prototype and
            gathered valuable feedback. We then focused on incorporating the received feedback into
            our prototype.
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
      <div className="my-12 flex shrink-0 flex-col items-center">
        <button
          onClick={scrollToTop}
          className="rounded-full bg-neutral-900 px-4 py-2 text-base text-sm font-semibold leading-6 text-neutral-50 shadow-sm outline hover:bg-neutral-50 hover:text-neutral-900 hover:transition-all"
        >
          Back to Top
        </button>
      </div>
    </>
  )
}
