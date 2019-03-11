import React from 'react';
import Link from 'next/link';

import Theme from '../components/Theme';
import HeroDetails from '../components/HeroDetails';

const HeroPage = (props) => (
    <Theme>
        <HeroDetails heroId={props.router.query.heroId} />
        <Link href="/">
            <button type="button" className="btn btn-link">{'<'} Back to index</button>
        </Link>
    </Theme>
);

export default HeroPage;
