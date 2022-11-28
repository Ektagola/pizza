import * as React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'
import Banner from "../sections/banner"
import CallToAction from "../sections/callToAction"
import Menu from "../sections/menu"
import Service from "../sections/service"
import SpecialOffer from "../sections/specialOffer"
import Testimonials from "../sections/testimonial"

export default function Home() {
  return (
    <Layout>
      <Seo/>  
      <Banner/>
      <Service/>
      <Menu/>
      <SpecialOffer/>
      <Testimonials/>
      <CallToAction/>
    </Layout>
  )
}
