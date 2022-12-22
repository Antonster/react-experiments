import PropTypes from 'prop-types';

import * as S from './styles';

const Column = ({ title, providedDragBoard, providedDropColumn, children }) => (
  <div
    ref={providedDragBoard.innerRef}
    {...providedDragBoard.draggableProps}
    {...providedDragBoard.dragHandleProps}
  >
    <S.ColumnWrapper ref={providedDropColumn.innerRef} {...providedDropColumn.droppableProps}>
      <S.Title>{title}</S.Title>
      {children}
    </S.ColumnWrapper>
  </div>
);

Column.propTypes = {
  title: PropTypes.string.isRequired,
  providedDragBoard: PropTypes.shape({
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
  providedDropColumn: PropTypes.shape({
    innerRef: PropTypes.func,
    placeholder: PropTypes.node,
    droppableProps: PropTypes.shape({
      'data-rbd-droppable-context-id': PropTypes.string,
      'data-rbd-droppable-id': PropTypes.string,
    }),
  }),
  children: PropTypes.node.isRequired,
};

export default Column;
