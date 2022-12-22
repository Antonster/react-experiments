import axios from 'axios';
import { useReducer, useState } from 'react';

import * as S from './styles';

const initialState = {
  toDoError: null,
  todo: null,
};

function greetingReducer(state, action) {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        toDoError: null,
        todo: action.data,
      };
    }
    case 'ERROR': {
      return {
        toDoError: action.error,
        todo: null,
      };
    }
    default: {
      return state;
    }
  }
}

const url = 'https://jsonplaceholder.typicode.com/todos';

const Fetch = () => {
  const [{ toDoError, todo }, dispatch] = useReducer(greetingReducer, initialState);
  const [buttonClicked, setButtonClicked] = useState(false);

  const fetchToDo = async () => {
    try {
      const { data } = await axios.get(url);

      dispatch({ type: 'SUCCESS', data });
      setButtonClicked(true);
    } catch (error) {
      dispatch({ type: 'ERROR', error });
    }
  };

  return (
    <div>
      <S.BigButton type="button" onClick={() => fetchToDo()} disabled={buttonClicked}>
        {buttonClicked ? 'Ok' : 'Load ToDo'}
      </S.BigButton>
      {todo?.map(({ userId, id, title, completed }) => (
        <div key={id} data-testid="todo-item">
          <div>{userId}</div>
          <div>{id}</div>
          <div>{title}</div>
          <div>{`${completed}`}</div>
        </div>
      ))}
      {toDoError && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  );
};

export default Fetch;
