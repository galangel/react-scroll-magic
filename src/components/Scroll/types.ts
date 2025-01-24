export type StickTo = 'top' | 'bottom' | 'all';

export type HeaderBehavior = 'stick' | 'push' | 'stack' | 'none';

export type Item = {
  id?: string;
  render: () => JSX.Element;
  nestedItems?: Item[];
};

export type Items = Item[];
