import React from 'react';
import App, { Container } from 'next/app';
import { withRouter } from 'next/router';
import { ApolloProvider } from 'react-apollo';

import withApolloClient from '../lib/with-apollo';

class NextApp extends App {
    render() {
        const {
            Component, pageProps,
            apolloClient, router
        } = this.props;
        return (
            <Container>
                <ApolloProvider client={apolloClient}>
                    <Component router={router} {...pageProps} />
                </ApolloProvider>
            </Container>
        );
    }
}

export default withRouter(withApolloClient(NextApp));
