import React from 'react';

import Theme from '../components/Theme';
import Index from '../components/Index';

const IndexPage = (props) => (
    <Theme>
        <Index {...props} />
    </Theme>
);

export default IndexPage;
