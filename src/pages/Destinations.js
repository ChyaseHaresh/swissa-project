import React from 'react'
import DestinationList from '../components/DestinationList'
import Layout from '../components/Layout'
import WhyUs from '../components/Why_Us'

function Destinations() {
  return (
    <Layout>
      <DestinationList/>
      <WhyUs/>
    </Layout>
  )
}

export default Destinations