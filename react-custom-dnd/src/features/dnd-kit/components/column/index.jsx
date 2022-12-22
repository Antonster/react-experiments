import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';

import * as S from './styles';

const Column = ({ title, columnId, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: columnId,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <S.ColumnWrapper ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <S.Title>{title}</S.Title>
      {children}
    </S.ColumnWrapper>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Column;
