import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { useState } from 'react';
import { columns as initialColumnsData } from 'src/constants';

import { Card, Column } from './components';
import * as S from './styles';

const DndKit = () => {
  const [columns, setColumns] = useState(initialColumnsData);

  const handleDragEnd = ({ active, over }) => {
    console.log(active, over);
    if (!over) return;

    if (active.id !== over.id) {
      setColumns((current) => current);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <S.ColumnsWrapper>
        <SortableContext items={columns}>
          {columns.map(({ columnId, title, cards }) => (
            <Column key={columnId} title={title} columnId={columnId}>
              {cards.map(({ cardId, value }) => (
                <Card key={cardId}>{value}</Card>
              ))}
            </Column>
          ))}
        </SortableContext>
      </S.ColumnsWrapper>
    </DndContext>
  );
};

export default DndKit;
