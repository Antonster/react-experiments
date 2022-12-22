import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { columns as initialColumnsData } from 'src/constants';

import { Card, Column } from './components';
import * as S from './styles';
import { reorder, reorderQuoteMap } from './utils';

const ReactBeautifulDnd = () => {
  const [columns, setColumns] = useState(initialColumnsData);

  const onDragEnd = (result) => {
    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // reordering column
    if (result.type === 'COLUMN') {
      const items = reorder(columns, source.index, destination.index);

      setColumns(items);

      return;
    }

    const items = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination,
    });

    setColumns(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="COLUMN" direction="horizontal">
        {(providedDropBoard) => (
          <S.ColumnsWrapper ref={providedDropBoard.innerRef} {...providedDropBoard.droppableProps}>
            {columns.map(({ columnId, title, cards }, columnIndex) => (
              <Draggable key={columnId} draggableId={title} index={columnIndex}>
                {(providedDragBoard) => (
                  <Droppable droppableId={title} type="QUOTE">
                    {(providedDropColumn) => (
                      <Column
                        key={columnId}
                        title={title}
                        providedDragBoard={providedDragBoard}
                        providedDropColumn={providedDropColumn}
                      >
                        {cards.map(({ cardId, value }, cardIndex) => (
                          <Draggable key={cardId} draggableId={`${cardId}`} index={cardIndex}>
                            {(providedDragColumn) => (
                              <Card key={cardId} providedDragColumn={providedDragColumn}>
                                {value}
                              </Card>
                            )}
                          </Draggable>
                        ))}
                        {providedDropColumn.placeholder}
                      </Column>
                    )}
                  </Droppable>
                )}
              </Draggable>
            ))}
            {providedDropBoard.placeholder}
          </S.ColumnsWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ReactBeautifulDnd;
