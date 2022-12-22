export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderQuoteMap = ({ quoteMap, source, destination }) => {
  const current = quoteMap.find(({ title }) => title === source.droppableId).cards;
  const next = quoteMap.find(({ title }) => title === destination.droppableId).cards;
  const target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);

    return quoteMap.map((item) => {
      if (item.title === source.droppableId) {
        return {
          ...item,
          cards: reordered,
        };
      }
      return item;
    });
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  return quoteMap.map((item) => {
    if (item.title === source.droppableId) {
      return {
        ...item,
        cards: current,
      };
    }
    if (item.title === destination.droppableId) {
      return {
        ...item,
        cards: next,
      };
    }
    return item;
  });
};
