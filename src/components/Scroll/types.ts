export type StickTo = 'top' | 'bottom' | 'all';

export type HeaderBehavior = 'stick' | 'push' | 'stack' | 'none';

export type Collapse = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

export type Loading = {
  onBottomReached?: () => Promise<void>;
  render?: (isLoading: boolean) => JSX.Element;
};

type RenderProps = { collapse?: Collapse };

export type Item = {
  id?: string;
  render: (renderProps: RenderProps) => JSX.Element;
  nestedItems?: Item[];
};

export type Items = Item[];
