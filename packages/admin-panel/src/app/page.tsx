export default function HomePage() {
  return (
    <main >
      <h1>Welcome to the Admin Panel!</h1>
      <p>
        This button is styled using our shared <strong>@my-ds/design-system</strong> package.
      </p>

      <div style={{ marginTop: '2rem' }}>
        {/* ما از className به جای class در JSX استفاده می‌کنیم */}
        <button className="btn btn-primary">
          Primary Action Button
        </button>
        <button className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
          Secondary Button
        </button>
      </div>
    </main>
  );
}