import { Column, Table } from 'react-virtualized';

const list = [
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  { name: 'Brian Vaughn', description: 'Software engineer' },
  // And so on...
];

const App = () => (
  <div>
    <Table
      width={700}
      height={300}
      headerHeight={20}
      rowHeight={30}
      rowCount={list.length}
      rowGetter={({ index }) => list[index]}
    >
      <Column label="Name" dataKey="name" width={300} />
      <Column label="Description" dataKey="description" width={400} />
    </Table>
  </div>
);

export default App;
