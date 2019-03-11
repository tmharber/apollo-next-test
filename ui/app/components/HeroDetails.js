import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const heroDetailsQuery = gql`
    query getHero($id: Int!) {
        hero(id: $id) {
            id
            name
            role
            damage
        }
    }
`;

export default function HeroDetails(props) {
    return (
        <Query query={heroDetailsQuery} variables={{ id: parseInt(props.heroId, 10) }}>
            {({ loading, error, data: { hero } }) => {
                if (error) return <div>Error fetching {props.heroId}</div>;
                if (loading) return <div>Loading</div>;

                return (
                    <Fragment>
                        <div>Name: {hero.name}</div>
                        <div>Damage: {hero.damage}</div>
                        <div>Role: {hero.role}</div>
                    </Fragment>
                );
            }}
        </Query>
    );
}
