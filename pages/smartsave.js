import FeatureCard from '@/components/FeatureCard.js'
import { YouTube } from 'mdx-embed'
import CustomLink from '@/components/Link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

export default function SmartSave() {
  useEffect(() => {
    let absoluteDivHeight = document.getElementById('absoluteDiv').offsetHeight
    let blankDiv = document.getElementById('blankDiv')
    blankDiv.style.height = absoluteDivHeight + 5 + 'px'
  }, [])

  const introHeaderVariants = {
    hide: {
      opacity: 0,
      x: -150,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4,
      },
    },
  }

  const variants1 = {
    hide: {
      opacity: 0,
      x: -150,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.6,
        delay: 1,
      },
    },
  }

  const variants2 = {
    hide: {
      opacity: 0,
      x: 150,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.6,
        delay: 1,
      },
    },
  }

  const featureVariants1 = {
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

  const featureVariants2 = {
    hide: {
      opacity: 0,
      y: -150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  }

  const featureVariants3 = {
    hide: {
      opacity: 0,
      y: 150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  }

  const featureVariants4 = {
    hide: {
      opacity: 0,
      x: 150,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <>
      <div
        id="absoluteDiv"
        className="justify-center absolute left-0 w-full h-5/6 bg-neutral-950 flex items-center hover:bg-black"
      >
        <div className="text-4xl text-white ml-32 mr-8 font-light">
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={introHeaderVariants}
          >
            Be convinced.
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={variants1}
          >
            Watch our preview
          </motion.div>
        </div>
        <motion.div
          className="w-5/12"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={variants2}
        >
          <YouTube youTubeId="OnEyLe_2Mzs" autoPlay="true" />
        </motion.div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="animate-bounce h-8 w-8 mb-4 text-white"
            viewBox="0 0 16 16"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <div id="blankDiv"></div>
      <p className="text-center mt-16 font-light text-4xl">
        Our <em>main</em> features include...
      </p>
      <div className="mt-12 grid grid-cols-2 gap-6">
        <motion.div
          className="flex flex-col items-center text-center shadow-md hover:shadow-xl bg-neutral-50 rounded-lg p-2"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={featureVariants1}
        >
          <FeatureCard
            title="Financial Dashboard"
            image="/static/images/SmartSave/FinancialDashboard.png"
            description="Experience a new level of financial clarity with SmartSave! Our dashboard provides a crystal-clear view of your financial landscape. Watch your earnings grow in real-time as you unlock the power of smarter saving."
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center text-center shadow-md hover:shadow-xl bg-neutral-50 rounded-lg p-2"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={featureVariants2}
        >
          <FeatureCard
            title="Smart Notifications"
            image="/static/images/SmartSave/SmartNotifications.png"
            description="SmartSave revolutionises savings, proactively scanning financial markets for lucrative opportunities. Get real-time alerts, and choose between our effortless auto-switch feature or manual transfers. With SmartSave, you command your financial destiny."
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center text-center shadow-md hover:shadow-xl bg-neutral-50 rounded-lg p-2"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={featureVariants3}
        >
          <FeatureCard
            title="Fixed Rate Accounts"
            image="/static/images/SmartSave/FixedRate.png"
            description="Maximize your returns with SmartSave. We identify high-yield Fixed Rate savings accounts that suit you and automate renewals to keep your money constantly growing."
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center text-center shadow-md hover:shadow-xl bg-neutral-50 rounded-lg p-2"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={featureVariants4}
        >
          <FeatureCard
            title="Easy Access Accounts"
            image="/static/images/SmartSave/EasyAccess.png"
            description="Experience saving that adapts to your spending habits with SmartSave. We match your spending patterns with banks' cashback offers to recommend profitable Easy Access savings accounts. With SmartSave, every dollar works harder for you."
          />
        </motion.div>
      </div>

      <h2 className="m-24 text-3xl font-semibold text-center">
        Interested to try?{' '}
        <CustomLink
          className="underline"
          href="https://www.figma.com/proto/fZnM7DuDcBtUIEpjrvzVm8/Interest-Rate-UI?type=design&node-id=505-11&t=jPaewlO8cXTvAGV5-0&scaling=contain&page-id=0%3A1&starting-point-node-id=505%3A11"
        >
          Visit our Figma!
        </CustomLink>
      </h2>
    </>
  )
}
