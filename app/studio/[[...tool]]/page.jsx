import { redirect } from 'next/navigation';

export default function StudioPage() {
  if (process.env.NODE_ENV === 'production') {
    // Redirect production traffic to the hosted studio
    redirect('https://monparcourt.sanity.studio/');
  }

  // Development fallback so you can still run studio locally
  return (
    <div style={{padding:24}}>
      <h1>Sanity Studio — development mode</h1>
      <p>Run <code>cd studio && npx sanity dev</code> to start the local studio (http://localhost:3333).</p>
      <p>In production this route redirects to the hosted studio.</p>
    </div>
  );
}
