import React from 'react';
import Header from '../../components/header/Header';
import Chart from '../../components/chart/Chart';
import'../../components/chart/chart.scss'

const Population = () => {

  return (
    <main>
      <Header/>
      <section className="chart_body">
        <Chart/>
      </section>
      
    </main>
  )
}

export default Population