import PropTypes from 'prop-types';

import * as S from './styles';

const Card = ({ children }) => <S.CardWrapper>{children}</S.CardWrapper>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
