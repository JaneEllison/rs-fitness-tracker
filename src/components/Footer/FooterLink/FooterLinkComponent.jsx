import React from 'react';
import PropTypes from 'prop-types';
import { DEVELOPERS_LINK_ATTRIBUTES } from '../../../constants/footerConstants';

const {
  REL,
  TARGET,
} = DEVELOPERS_LINK_ATTRIBUTES;

function FooterLinkComponent({
  data: {
    name,
    contact,
  },
}) {
  return (
    <a href={contact} rel={REL} target={TARGET}>
      {name}
    </a>
  );
}

FooterLinkComponent.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
  }).isRequired,
};

export default FooterLinkComponent;
