import React from 'react';
export default function PixelOverlay(){
  const [url, setUrl] = React.useState('');
  const [opacity, setOpacity] = React.useState(0.35);
  return (
    <aside className="fixed bottom-4 right-4 z-[60] card p-3 w-80">
      <div className="flex items-center justify-between mb-2"><b>Pixel Overlay</b><span className="text-xs text-[rgb(var(--mutedText))]">dev</span></div>
      <input placeholder="Paste reference image URL" value={url} onChange={e=>setUrl(e.target.value)} className="w-full rounded-lg border border-[rgb(var(--border))] px-2 py-1 mb-2 bg-white"/>
      <input type="range" min="0" max="1" step="0.01" value={opacity} onChange={e=>setOpacity(parseFloat(e.target.value))} className="w-full"/>
      {url && (<img src={url} alt="Reference overlay" style={{ position:'fixed', inset:0, margin:'auto', pointerEvents:'none', opacity }} />)}
    </aside>
  );
}