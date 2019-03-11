import React from 'react';
import Link from 'next/link';

import Theme from '../components/Theme';
import RoleDetails from '../components/RoleDetails';

const HeroesPage = (props) => (
    <Theme>
        <RoleDetails role={props.router.query.heroRole} />
        <Link href="/">
            <button type="button" className="btn btn-link">{'<'} Back to index</button>
        </Link>
    </Theme>
);

export default HeroesPage;
