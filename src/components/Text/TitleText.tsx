import React from "react";
import PropTypes from "prop-types";

interface Props {
  value: string;
}

const TitleText: React.FC<Props> = ({ value }) => {
  return <h2>{value}</h2>;
};

TitleText.propTypes = {
  value: PropTypes.string.isRequired
};

export default TitleText;
