// A small interactive component. Mintlify renders it in the page.
export const Counter = ({ start = 0 }) => {
  const [count, setCount] = useState(start);
  const button = {
    padding: '6px 14px',
    borderRadius: 8,
    border: '1px solid #2563EB',
    background: '#2563EB',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, border: '1px solid #ccc', borderRadius: 8 }}>
      <button type="button" style={button} onClick={() => setCount(count - 1)}>
        -
      </button>
      <strong data-testid="count">{count}</strong>
      <button type="button" style={button} onClick={() => setCount(count + 1)}>
        +
      </button>
      <button type="button" style={{ ...button, background: 'transparent', color: 'inherit' }} onClick={() => setCount(start)}>
        Reset
      </button>
    </div>
  );
};
