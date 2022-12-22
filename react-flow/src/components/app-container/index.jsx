import PropTypes from 'prop-types';

import * as S from './styles';

const AppContainer = ({ children }) => <S.AppContainer>{children}</S.AppContainer>;

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
