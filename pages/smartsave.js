import FeatureCard from '@/components/FeatureCard.js'
import Image from '@/components/Image'
import { YouTube } from 'mdx-embed'
import CustomLink from '@/components/Link'
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
          title="Financial Dashboard"
          image="/static/images/SmartSave/FinancialDashboard.png"
          description="Experience a new level of financial clarity with SmartSave! Our dashboard provides a crystal-clear view of your financial landscape. Watch your earnings grow in real-time as you unlock the power of smarter saving."
        />
        <FeatureCard
          title="Smart Notifications"
          image="/static/images/SmartSave/SmartNotifications.png"
          description="SmartSave revolutionises savings, proactively scanning financial markets for lucrative opportunities. Get real-time alerts, and choose between our effortless auto-switch feature or manual transfers. With SmartSave, you command your financial destiny."
        />
        <FeatureCard
          title="Fixed Rate Accounts"
          image="/static/images/SmartSave/FixedRate.png"
          description="Maximize your returns with SmartSave. We identify high-yield Fixed Rate savings accounts that suit you and automate renewals to keep your money constantly growing."
        />
        <FeatureCard
          title="Easy Access Accounts"
          image="/static/images/SmartSave/EasyAccess.png"
          description="Experience saving that adapts to your spending habits with SmartSave. We match your spending patterns with banks' cashback offers to recommend profitable Easy Access savings accounts. With SmartSave, every dollar works harder for you."
        />
      </div>

      <h2 className="m-32 text-3xl font-semibold text-center">
        Interested to try?{' '}
        <CustomLink
          className="underline"
          href="https://www.figma.com/proto/fZnM7DuDcBtUIEpjrvzVm8/Interest-Rate-UI?type=design&node-id=505-11&t=jPaewlO8cXTvAGV5-0&scaling=contain&page-id=0%3A1&starting-point-node-id=505%3A11"
        >
          Visit our Figma!
        </CustomLink>
      </h2>

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
