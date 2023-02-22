import React from 'react';
import { connect } from 'react-redux';

import Portfolio from './Portfolio';
import Introduce from './Introduce';
import Collection from './Collection';
import Founders from './Founders';
import Faq from './Faq';
import Follow from './Follow';
import Roadmap from './Roadmap';


const Landing = () => {
  return (
    <section>
      <Portfolio />
      <Introduce id="introduce"/>
      <Collection id="collection"/>
      <Roadmap id="roadmap"/>
      <Founders id="founders"/>
      <Faq id="faq"/>
      <Follow id="follow"/>
    </section>
  );
};

export default connect()(Landing);
