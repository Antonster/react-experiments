import PropTypes from 'prop-types';

import * as S from './styles';

const Card = ({ providedDragColumn, children }) => (
  <S.CardWrapper
    ref={providedDragColumn.innerRef}
    {...providedDragColumn.draggableProps}
    {...providedDragColumn.dragHandleProps}
  >
    {children}
  </S.CardWrapper>
);

Card.propTypes = {
  providedDragColumn: PropTypes.shape({
    innerRef: PropTypes.func,
    draggableProps: PropTypes.shape({
      style: PropTypes.shape({
        position: PropTypes.string,
        top: PropTypes.number,
        left: PropTypes.number,
        boxSizing: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        transition: PropTypes.string,
        transform: PropTypes.string,
        zIndex: PropTypes.number,
        opacity: PropTypes.number,
        pointerEvents: PropTypes.string,
      }),
      'data-rbd-draggable-context-id': PropTypes.string,
      'data-rbd-draggable-id': PropTypes.string,
      onTransitionEnd: PropTypes.func,
    }),
    dragHandleProps: PropTypes.shape({
      'data-rbd-drag-handle-draggable-id': PropTypes.string,
      'data-rbd-drag-handle-context-id': PropTypes.string,
      'aria-describedby': PropTypes.string,
      role: PropTypes.string,
      tabIndex: PropTypes.number,
      draggable: PropTypes.bool,
      onDragStart: PropTypes.func,
    }),
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
