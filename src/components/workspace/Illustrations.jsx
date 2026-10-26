import React from 'react';

export function JourneyMap() {
  return <svg className="journey-map" viewBox="0 0 510 270" role="img" aria-labelledby="journey-map-title">
    <title id="journey-map-title">Roots in Nigeria, based in Berlin</title>
    <g className="map-land" strokeLinejoin="round">
      <path d="m80 113 17-10 25-3 20 3 18 16 25 3 18 15 14 16 20 8-8 17-18 11-4 23-13 25-15 13-13-6-12-24-8-30-19-4-9-16-16-5-11-16-1-14Z" />
      <path d="m230 220-4 13 1 14 8-8 3-16Z" />
      <path d="m287 74 3-12 13 3 5 10-9 10-11-2Z m-14 13 7-2 4 9-7 4-6-5Z" />
      <path d="m324 62 3-12 8-15 1-14 9-11 8 4-7 17-2 20-9 16-8 3Z m17 2 11-16 2-21 12-8 7 8-8 13-2 17-13 17Z" />
      <path d="m317 87 4-11 12-1 12 3 10-4 15 6 13 8 17-1 21 11 3 15-18 3-14-5-11 7-13-5-9 3 7 13 12 11 6 16-7 2-10-17-11-6-6-13-15-2-2 9-22-1-12-12 4-12-9-6Z" />
      <path d="m337 134 10 1 2 9-6 7-12-1-9 6-10-4-9 3-5-9 12-6 13 1Z" />
      <path d="m392 138 10 4 11 17-5 10-9-12-8-5Z" />
    </g>
    <path className="journey-route" d="M148 162C190 82 257 74 350 94" />
    <g className="map-airplane" transform="translate(245 89) rotate(-11)"><path d="m-13 0 12-3 2-10 4-2v12l11 2v4L5 4 2 12h-3l-1-9-11 1Z" /></g>
    <circle className="map-dot" cx="148" cy="162" r="6" /><circle className="map-dot" cx="350" cy="94" r="6" />
    <text x="162" y="184">Nigeria</text><text x="365" y="98">Berlin</text>
    <path className="map-annotation" d="m445 198 5-15m6 20 12-11m-1 24 15-2" />
  </svg>;
}

export function ProjectIllustration({ type = 'message' }) {
  return <svg className="project-illustration" viewBox="0 0 280 210" aria-hidden="true">
    {type === 'message' && <><path d="M140 113c-12 12-35 19-59 17l-37 23 12-34C9 92 23 42 74 33c50-10 95 6 96 40" /><path d="M165 83c52-9 91 8 91 44 0 20-14 36-32 43l13 29-38-20c-50 9-95-8-96-42-1-26 24-47 62-54Z" /><circle cx="72" cy="82" r="3.5" /><circle cx="98" cy="82" r="3.5" /><circle cx="124" cy="82" r="3.5" /><circle cx="149" cy="134" r="3.5" /><circle cx="176" cy="134" r="3.5" /><circle cx="203" cy="134" r="3.5" /><path d="m201 31 8-17m3 29 14-12m-3 27 17-6M48 177l-9 13m23-7-4 16" /></>}
    {type === 'health' && <><path d="M104 26h72v48h48v72h-48v48h-72v-48H56V74h48Z" /><path d="M16 110h54l19-31 22 62 22-42 15 11h112" /></>}
    {type === 'code' && <><rect x="24" y="31" width="232" height="150" rx="3" /><path d="M24 57h232M39 44h2m10 0h2m10 0h2M100 83l-30 32 30 31m80-63 30 32-30 31M153 75l-25 80" /></>}
    {type === 'home' && <><path d="m28 91 58-48 58 48v101H28Z" /><path d="M115 76v-37h100v153h-71M162 39V18h35v21M48 118h26v27H48Zm48 0h26v27H96ZM72 192v-27h28v27M165 66h28v25h-28Zm0 50h28v25h-28Zm0 50h28v26M10 192h244" /><circle cx="236" cy="49" r="14" /><path d="M236 25v-9m24 33h9M252 32l6-6M221 32l-6-6" /></>}
    {type === 'book' && <><path d="M28 53c38-16 73-12 112 10 39-22 74-26 112-10v127c-38-16-73-12-112 10-39-22-74-26-112-10ZM140 63v127M50 77c23-7 47-5 69 7m-69 17c23-7 47-5 69 7m-69 17c23-7 47-5 69 7M164 84c21-12 44-14 66-7m-66 31c21-12 44-14 66-7m-66 31c21-12 44-14 66-7M140 19v13m-24-8 5 12m43-12-5 12" /></>}
    {type === 'people' && <><circle cx="140" cy="63" r="26" /><circle cx="63" cy="105" r="21" /><circle cx="217" cy="105" r="21" /><path d="M95 145v-11c0-38 90-38 90 0v11M25 184v-17c0-34 76-34 76 0v17M179 184v-17c0-34 76-34 76 0v17M107 19l-6-10m72 10 6-10M140 17V5M118 167h44m-12-12 12 12-12 12" /></>}
  </svg>;
}
