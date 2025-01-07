import { Button } from './components';
import { Scroll } from './components/Scroll';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="space-y-4">
        <div className="space-x-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="space-x-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="space-x-4">
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
        <Scroll>
          <Scroll.Header>OK</Scroll.Header>
          <Scroll.Item>1</Scroll.Item>
        </Scroll>
      </div>
    </div>
  );
}