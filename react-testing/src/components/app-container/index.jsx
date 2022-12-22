import PropTypes from 'prop-types';

import * as S from './styles';

const AppContainer = ({ testId, children }) => (
  <S.AppContainer data-testid={testId}>{children}</S.AppContainer>
);

AppContainer.propTypes = {
  testId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppContainer;
