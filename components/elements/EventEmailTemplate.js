export default function EmailTemplate({ firstName, lastName, number }) {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        border: '1px solid #eee',
        borderRadius: '8px'
      }}
    >
      {/* Header with logo + brand name */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold' }}>
          <span style={{ color: '#f1c40f' }}>Mon</span>
          <span style={{ color: '#3498db' }}>Parcourt</span>
        </h2>
      </div>

      {/* Main content */}
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>
          Welcome, {firstName} {lastName}!
        </h4>
        <p style={{ fontSize: '16px', margin: '10px 0' }}>
          Your confirmation number is:
        </p>
        <p
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#3498db',
            margin: '10px 0'
          }}
        >
          {number}
        </p>
        <p style={{ fontSize: '16px', margin: '20px 0' }}>
          Thank you for participating and we wish you the best of luck.
        </p>
      </div>

      {/* Signature */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <p style={{ margin: '5px 0' }}>Best regards,</p>
        <p style={{ margin: '0', fontWeight: 'bold', color: '#2c3e50', fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Segoe Script', 'Bradley Hand', cursive", fontSize: '18px' }}>
          The MonParcourt Team
        </p>
      </div>
    </div>
  );
}