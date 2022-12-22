import { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from 'react-flow-renderer';
import CustomEdge from 'src/components/custom-edge';
import { initialEdges, initialNodes } from 'src/constants/index';

const edgeTypes = {
  custom: CustomEdge,
};

const FlowBoard = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      snapToGrid
      edgeTypes={edgeTypes}
      fitView
      attributionPosition="top-right"
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default FlowBoard;
