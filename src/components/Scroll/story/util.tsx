import { faker } from '@faker-js/faker';
import { Item } from '../types';

const argTypes = {
  items: {
    control: { type: 'none' },
    description: 'items to render in the scroll',
    table: { type: { summary: 'Items' }, category: 'content' },
  },
  headerBehavior: {
    control: { type: 'select' },
    options: ['stick', 'push', 'none'],
    description: 'controls the way headers interact with the scroll',
    table: { type: { summary: 'props' }, defaultValue: { summary: 'none' }, category: 'behavior' },
  },
  scrollBehavior: {
    control: { type: 'select' },
    options: ['auto', 'instant', 'smooth'],
    description: 'controls the way headers interact with the scroll',
    table: { type: { summary: 'props' }, defaultValue: { summary: 'none' }, category: 'behavior' },
  },
  stickTo: {
    control: { type: 'select' },
    options: ['top', 'bottom', 'all'],
    description: 'where should the sticky headers stick',
    table: { type: { summary: 'props' }, defaultValue: { summary: 'all' }, category: 'behavior' },
  },
};

const headerRender =
  (key: number, collapseable?: boolean): Item['render'] =>
  ({ collapse }) => {
    const { isOpen, close, open } = collapse ?? {};

    let header;
    if (key === 1) {
      header = faker.person.jobTitle();
    } else if (key === 2) {
      header = faker.location.country();
    } else {
      header = faker.company.name();
    }

    return (
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          height: `20px`,
          padding: '5px',
          backgroundColor: `#${((key * 1234567) & 0xffffff).toString(16).padStart(6, '0')}`,
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        {header}
        {collapseable && (
          <button
            onClick={isOpen ? close : open}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '12px',
            }}
          >
            {isOpen ? '▼' : '▶'}
          </button>
        )}
      </div>
    );
  };

const itemRender: Item['render'] = () => {
  const randomName = faker.person.fullName();
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: `30px`,
        backgroundColor: `#d4dfea`,
        padding: '5px',
        fontSize: '12px',
        fontFamily: 'monospace',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: color,
          marginRight: '10px',
        }}
      ></div>
      {randomName}
    </div>
  );
};

export const storyUtils = { argTypes, headerRender, itemRender };
