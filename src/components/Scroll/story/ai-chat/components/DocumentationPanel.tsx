import React from 'react';

export const DocumentationPanel: React.FC = () => (
  <>
    <style>{`
      @media (max-width: 1024px) {
        .documentation-panel {
          display: none !important;
        }
      }
    `}</style>
    <div
      className="documentation-panel"
      style={{
        width: '420px',
        padding: '32px',
        backgroundColor: '#111827',
        borderRadius: '12px',
        color: '#e5e7eb',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '14px',
        lineHeight: '1.7',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        overflow: 'auto',
        height: '600px',
        boxSizing: 'border-box',
      }}
    >
      <h2
        style={{
          margin: '0 0 8px 0',
          fontSize: '24px',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        AI Chat Demo
      </h2>
      <p style={{ color: '#9ca3af', margin: '0 0 24px 0', fontSize: '13px' }}>
        See how the Scroll component handles complex, real-world scenarios
      </p>

      <Section title="🎯 Try It Out">
        <p style={{ margin: 0 }}>
          Click <Code>Generate</Code> and watch the magic happen. Messages stream in with multiple reasoning steps, each
          adding content dynamically — exactly like a real AI assistant. Scroll around while it's generating to see how
          naturally everything flows.
        </p>
      </Section>

      <Section title="📦 Real-Time Updates">
        <p style={{ margin: 0 }}>
          Each response goes through <Step emoji="🤔" text="Thinking" />, <Step emoji="🔍" text="Searching" />,{' '}
          <Step emoji="📊" text="Analyzing" />, and <Step emoji="✨" text="Solution" /> — with items added one by one.
          The Scroll component handles all the complexity of <strong>dynamic nested content</strong> while maintaining
          smooth, predictable behavior.
        </p>
      </Section>

      <Section title="🪆 Nested Item Structure">
        <NestedStructure />
      </Section>

      <Section title="🔄 Collapse Callbacks">
        <p style={{ margin: '0 0 12px 0' }}>
          The <Code>render</Code> function receives a <Code>collapse</Code> prop with:
        </p>
        <CodeBlock>
          {`{
  isOpen: boolean,
  open: () => void,
  close: () => void
}`}
        </CodeBlock>
        <p style={{ margin: '12px 0 0 0' }}>
          <strong>Making an "Auto-collapse" feature:</strong> The Reasoning section automatically collapses when the
          message completes, using the <Code>close()</Code> callback in a <Code>useEffect</Code>.
        </p>
      </Section>

      <Section title="✨ The Magic: Push Headers">
        <p style={{ margin: '0 0 12px 0' }}>
          Scroll through the chat and watch the headers. Notice how they <strong>smoothly push each other</strong> out
          of the way instead of stacking or overlapping? That fluid, polished feel comes from a single prop:
        </p>
        <CodeBlock>{`<Scroll
  items={items}
  headerBehavior="push"
/>`}</CodeBlock>
        <p style={{ margin: '12px 0 0 0', color: '#9ca3af', fontSize: '13px' }}>
          No complex CSS, no manual scroll calculations — just declarative, beautiful scroll behavior out of the box.
        </p>
      </Section>

      <Section title="⚙️ Configuration">
        <PropList>
          <PropItem name="stickTo" value='"all"'>
            Headers stick at both top and bottom edges
          </PropItem>
          <PropItem name="scrollBehavior" value='"smooth"'>
            Buttery smooth scroll animations
          </PropItem>
          <PropItem name="headerBehavior" value='"push"'>
            Headers elegantly push each other — no overlap
          </PropItem>
        </PropList>
      </Section>

      <Section title="📜 Auto-Scroll Behavior" isLast>
        <p style={{ margin: 0 }}>
          This demo adds auto-scroll using a custom hook. The Scroll component handles the hard parts — you just focus
          on your content. <strong>Build chat UIs, feeds, or any streaming content</strong> with confidence.
        </p>
      </Section>
    </div>
  </>
);

// Documentation sub-components
const Section = ({ title, children, isLast }: { title: string; children: React.ReactNode; isLast?: boolean }) => (
  <div
    style={{
      marginBottom: isLast ? 0 : '20px',
      paddingBottom: isLast ? 0 : '20px',
      borderBottom: isLast ? 'none' : '1px solid #374151',
    }}
  >
    <h3
      style={{
        margin: '0 0 12px 0',
        fontSize: '15px',
        fontWeight: 600,
        color: '#f3f4f6',
      }}
    >
      {title}
    </h3>
    {children}
  </div>
);

const Code = ({ children }: { children: React.ReactNode }) => (
  <code
    style={{
      backgroundColor: '#1f2937',
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '12px',
      fontFamily: '"Fira Code", "SF Mono", Monaco, monospace',
      color: '#a78bfa',
    }}
  >
    {children}
  </code>
);

const CodeBlock = ({ children }: { children: string }) => (
  <pre
    style={{
      backgroundColor: '#1f2937',
      padding: '12px',
      borderRadius: '8px',
      fontSize: '12px',
      fontFamily: '"Fira Code", "SF Mono", Monaco, monospace',
      color: '#d1d5db',
      margin: 0,
      overflow: 'auto',
    }}
  >
    {children}
  </pre>
);

const Step = ({ emoji, text }: { emoji: string; text: string }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      backgroundColor: '#1f2937',
      padding: '2px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      margin: '2px',
    }}
  >
    <span>{emoji}</span>
    <span>{text}</span>
  </span>
);

const NestedStructure = () => {
  const levels = [
    { indent: 0, emoji: '💬', text: 'Question Bubble', color: '#60a5fa' },
    { indent: 1, emoji: '🧠', text: 'Reasoning Section', color: '#a78bfa' },
    {
      indent: 2,
      emoji: '🤔',
      text: 'Step (Thinking, Searching...)',
      color: '#f472b6',
    },
    { indent: 3, emoji: '📝', text: 'Output Lines', color: '#34d399' },
    { indent: 1, emoji: '✨', text: 'Solution Section', color: '#fbbf24' },
  ];

  return (
    <div
      style={{
        backgroundColor: '#1f2937',
        borderRadius: '8px',
        padding: '12px',
        fontFamily: '"Fira Code", "SF Mono", Monaco, monospace',
        fontSize: '12px',
      }}
    >
      {levels.map((level, i) => (
        <div
          key={i}
          style={{
            marginLeft: level.indent * 16,
            padding: '4px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ opacity: 0.4 }}>{level.indent > 0 ? '└─' : ''}</span>
          <span>{level.emoji}</span>
          <span style={{ color: level.color }}>{level.text}</span>
        </div>
      ))}
    </div>
  );
};

const PropList = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}
  >
    {children}
  </div>
);

const PropItem = ({ name, value, children }: { name: string; value: string; children: React.ReactNode }) => (
  <div
    style={{
      backgroundColor: '#1f2937',
      borderRadius: '6px',
      padding: '10px 12px',
    }}
  >
    <div style={{ marginBottom: '4px' }}>
      <Code>{name}</Code>
      <span style={{ color: '#6b7280', margin: '0 6px' }}>=</span>
      <span
        style={{
          color: '#34d399',
          fontFamily: '"Fira Code", "SF Mono", Monaco, monospace',
          fontSize: '12px',
        }}
      >
        {value}
      </span>
    </div>
    <div style={{ color: '#9ca3af', fontSize: '12px' }}>{children}</div>
  </div>
);
