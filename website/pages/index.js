import {loadEvents, loadConfig} from "../lib/data.js"
import FAQ from "../components/faq.js"
import About from "../components/about.js"
import Tracks from "../components/tracks.js"
import Hero from "../components/hero.js"
import Layout from "../components/layout.js"
import Tickets from "../components/tickets.js"
import Speakers from "../components/speakers.js"
import ScheduleSection from '../components/scheduleSection.js';

export default function Index({ events, config }) {
  return (
    <Layout config={config}>
      <Hero config={config} />
      <About config={config} />
      <Tracks config={config} />
      <Tickets config={config} />
      <ScheduleSection config={config} events={events} />
      <Speakers config={config} />
      <FAQ config={config} />
    </Layout>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  return {
    props: {
      events: await loadEvents(),
      config: await loadConfig(),
    }
  }
}

