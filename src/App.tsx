import { Scroll } from './components/Scroll';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="space-y-4">
        <Scroll>
          <Scroll.Header>OK</Scroll.Header>
          <Scroll.Item>1</Scroll.Item>
        </Scroll>
      </div>
    </div>
  );
}
