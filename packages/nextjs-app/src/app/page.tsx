export default function Home() {
  return (
    <main style={{ padding: '4rem' }}>
      <h1>My Next.js App with Design System</h1>
      <hr style={{ margin: '2rem 0' }} />

      <div>
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>Secondary Button</button>
      </div>
    </main>
  );
}