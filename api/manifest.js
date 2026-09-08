export default function handler(req, res) {
  const homeId = req.query.home || '';

  const manifest = {
    name: 'TrackHumidity',
    short_name: 'TrackHumidity',
    description: 'Monitor indoor humidity across your home',
    start_url: homeId ? `/?home=${homeId}` : '/?source=pwa',
    display: 'standalone',
    background_color: '#0a0e1a',
    theme_color: '#3B82F6',
    orientation: 'portrait',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
    ]
  };

  res.setHeader('Content-Type', 'application/manifest+json');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(manifest);
}
