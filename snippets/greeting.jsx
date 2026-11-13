// Reads text from an input and shows it back. Also loads data from a public API on click.
export const Greeting = () => {
  const [name, setName] = useState('');
  const [fact, setFact] = useState(null);

  const loadFact = async () => {
    setFact('Loading…');
    try {
      const res = await fetch('https://api.github.com/zen');
      setFact(await res.text());
    } catch (err) {
      setFact('Could not load: ' + err.message);
    }
  };

  return (
    <div style={{ padding: 16, border: '1px solid #ccc', borderRadius: 8 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
        aria-label="Your name"
        style={{ padding: 8, borderRadius: 8, border: '1px solid #999', marginRight: 8 }}
      />
      <span data-testid="hello">{name ? `Hello, ${name}!` : 'Hello, stranger!'}</span>
      <div style={{ marginTop: 12 }}>
        <button type="button" onClick={loadFact} style={{ padding: '6px 14px', borderRadius: 8, cursor: 'pointer' }}>
          Load a random quote
        </button>
        {fact && <p data-testid="fact">{fact}</p>}
      </div>
    </div>
  );
};
