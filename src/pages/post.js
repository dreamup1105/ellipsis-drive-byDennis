import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: {path: {eq: $path}}) {
      edges {
        node {
          path
        }
      }
    }
  }
`;

const Post = ({ data }) => {
    return (
        <div>
            <Header />
            <div className="col-12 col-md-6 col-lg-5 mx-auto my-5 py-5">
                <p>{data.allSitePage.edges[0].node.path}</p>
            </div>
            <Footer />
        </div>
    );
};

Post.propTypes = {
    data: PropTypes.object
};

export default Post;