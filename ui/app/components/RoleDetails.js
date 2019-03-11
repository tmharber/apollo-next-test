import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const heroesDetailsQuery = gql`
    query getHeroes($role: String!) {
        heroes(role: $role) {
            id
            name
            role
            damage
        }
    }
`;

export default function RoleDetails(props) {
    console.log(props.role);
    return (
        <Query query={heroesDetailsQuery} variables={{ role: props.role }}>
            {({ loading, error, data: { heroes } }) => {
                if (error) return <div>Error fetching {props.heroId}</div>;
                if (loading) return <div>Loading</div>;

                return (
                    <Fragment>
                        {heroes.map(hero => (
                            <div className="margin" key={hero.name}>
                                <div>Name: {hero.name}</div>
                                <div>Damage: {hero.damage}</div>
                                <div>Role: {hero.role}</div>
                            </div>
                        ))}
                    </Fragment>
                );
            }}
        </Query>
    );
}
