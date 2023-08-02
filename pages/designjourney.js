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
            The team met up for the first time and brainstormed a list of questions for their first
            client meeting. We also coordinated with Team 7B to finalise these questions. The team
            also had their first meeting with the client, during which we learned about the problem
            statement and the scope of their project. We decided to brainstorm ideas individually
            and then meet again to finalise their approach.
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
            The team agreed on the main ideas for their solution, which include viewing interest
            rates, account "hopping", notification systems, and automated transfers. We also laid
            out their project goals and started sketching potential layouts. The team brainstormed
            detailed features for the solution, identified potential user expectations, and worked
            on the layout of the "easy access account" feature. We also worked on a notification
            system and got feedback from other groups and a potential user.
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
            The team reviewed feedback from professors and teaching assistants, discussed potential
            users and trust issues, and decided to do more surveys while working on a specific
            prototype. We also started prototyping on Figma. The team explored two models for
            transferring funds and decided on a semi-automated system. We also listed their current
            goals which include receiving feedback from the client, finalising flowcharts, starting
            work on their website, and continuing work on Figma and slides for the team's recording.
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
            The team met with the client again to discuss their current design and use flow. We
            received feedback on the onboarding process, naming scheme, and information allocation.
            We made plans to improve the overall design of the website and integrate the feedback.
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
            The team conducted think-aloud usability tests to understand the user interaction with
            the application. We discovered important insights regarding visual cues, sort
            functionality, and the use of abbreviations.
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
            The team worked on the Figma prototype and had discussions on the design of the poster.
            We also scheduled a catch-up call with the client for the following day. The team met
            with the client to discuss the current state of their prototype. We received feedback on
            their prototype and worked on implementing it.
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
