import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';


const CenterView = props => <View style={styles.main}>{props.children}</View>;

CenterView.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
};

export { CenterView as default };
