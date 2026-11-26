import type { CSSProperties } from 'react'
import { DetailTeaser } from './DetailTeaser.tsx'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`
const FW = 15143
const FH = 5135

function at(x: number, y: number, w: number, h: number): CSSProperties {
  return {
    position: 'absolute',
    left: `${(x / FW) * 100}%`,
    top: `${(y / FH) * 100}%`,
    width: `${(w / FW) * 100}%`,
    height: `${(h / FH) * 100}%`,
  }
}

const len = (px: number) => `${(px / FW) * 100}cqw`

type Seg = { t: string; size: number; w: number; fill: string }

function Crop({
  z,
  file,
  x,
  y,
  w,
  h,
  a,
  d,
  tx,
  ty,
  round,
  flip,
}: {
  z: number
  file: string
  x: number
  y: number
  w: number
  h: number
  a: number
  d: number
  tx: number
  ty: number
  round?: boolean
  flip?: boolean
}) {
  return (
    <div style={{ ...at(x, y, w, h), overflow: 'hidden', borderRadius: round ? '50%' : undefined, zIndex: z, transform: flip ? 'rotate(180deg)' : undefined }}>
      <img
        src={asset(file)}
        alt=""
        draggable={false}
        style={{
          position: 'absolute',
          width: `${(1 / a) * 100}%`,
          height: `${(1 / d) * 100}%`,
          left: `${(-tx / a) * 100}%`,
          top: `${(-ty / d) * 100}%`,
          maxWidth: 'none',
          display: 'block',
        }}
      />
    </div>
  )
}

function Diagram({ z, file, x, y, w, h }: { z: number; file: string; x: number; y: number; w: number; h: number }) {
  return (
    <img
      src={asset(file)}
      alt=""
      draggable={false}
      style={{ ...at(x, y, w, h), zIndex: z, objectFit: 'fill' }}
    />
  )
}

function Block({
  z,
  x,
  y,
  w,
  h,
  fill,
  op = 1,
  r = 0,
  circle,
}: {
  z: number
  x: number
  y: number
  w: number
  h: number
  fill: string
  op?: number
  r?: number
  circle?: boolean
}) {
  return (
    <div
      style={{
        ...at(x, y, w, h),
        zIndex: z,
        background: fill,
        opacity: op,
        borderRadius: circle ? '50%' : r ? len(r) : undefined,
      }}
    />
  )
}

function Copy({
  z,
  x,
  y,
  w,
  h,
  align = 'left',
  segs,
}: {
  z: number
  x: number
  y: number
  w: number
  h: number
  align?: 'left' | 'center' | 'right'
  segs: Seg[]
}) {
  return (
    <p
      style={{
        ...at(x, y, w, h),
        zIndex: z,
        margin: 0,
        fontFamily: 'var(--sans)',
        textAlign: align,
        whiteSpace: 'pre-line',
        lineHeight: 1.2,
      }}
    >
      {segs.map((seg, index) => (
        <span key={index} style={{ fontSize: len(seg.size), fontWeight: seg.w, color: seg.fill }}>
          {seg.t}
        </span>
      ))}
    </p>
  )
}

function Title({
  z,
  file,
  alt,
  x,
  y,
  w,
  h,
}: {
  z: number
  file: string
  alt: string
  x: number
  y: number
  w: number
  h: number
}) {
  return (
    <img
      src={asset(file)}
      alt={alt}
      draggable={false}
      style={{ ...at(x, y, w, h), zIndex: z, objectFit: 'contain', objectPosition: 'left center' }}
    />
  )
}

export function Board9Plate() {
  return (
    <div className="stage b9-stage" aria-label="Hardware feasibility and technology refinement" style={{ aspectRatio: `${FW} / ${FH}` }}>
      <div className="stage-canvas">
        <Title z={0} file="board-9/title-reference.png" alt="Technology reference" x={202} y={2884} w={1888} h={186} />
        <Copy z={1} x={202} y={4491} w={1876} h={179} segs={[{ t: 'Vibrating electrical component', size: 128, w: 600, fill: '#5e6ca4' }]} />
        <Crop z={2} file="board-9/img/1-1000.png" x={831.1} y={4129.5} w={590.9} h={292.3} a={0.8909} d={0.6799} tx={0.0422} ty={0.2421} />
        <Crop z={3} file="board-9/img/1-1001.png" x={202} y={3545.3} w={629.1} h={291.3} a={0.8235} d={0.6799} tx={0.0505} ty={0.0793} />
        <Crop z={4} file="board-9/img/1-1002.png" x={202} y={3253} w={629.1} h={291.3} a={1} d={0.892} tx={0} ty={0} />
        <Crop z={5} file="board-9/img/1-1003.png" x={831.1} y={3545.3} w={590.9} h={291.3} a={1} d={1} tx={0} ty={0} />
        <Crop z={6} file="board-9/img/1-1004.png" x={202} y={3833.5} w={629.1} h={295.3} a={0.8234} d={0.6867} tx={0.1765} ty={0} />
        <Crop z={7} file="board-9/img/1-1005.png" x={831.1} y={3836.6} w={590.9} h={292.3} a={1} d={0.9423} tx={0} ty={0} />
        <Crop z={8} file="board-9/img/1-1006.png" x={831.1} y={3253} w={590.9} h={292.3} a={0.7459} d={0.5576} tx={0.1534} ty={0.2094} />
        <Crop z={9} file="board-9/img/1-1007.png" x={202} y={4129.5} w={629.1} h={292.3} a={0.9996} d={0.6999} tx={0.0002} ty={0.3001} />
        <Crop z={10} file="board-9/img/1-1008.png" x={1696} y={4701} w={351} h={234} a={0.1894} d={0.3778} tx={0.8106} ty={0.2521} />
        <Copy z={11} x={2099} y={3138} w={1147} h={90} segs={[{ t: 'Stretchable fiber with bent wires inside', size: 64, w: 300, fill: '#000' }]} />
        <Diagram z={12} file="board-9/diagrams/g-1010.svg" x={1630} y={3253} w={2086.4} h={259.3} />
        <Copy z={19} x={2380} y={3526} w={577} h={103} segs={[{ t: 'Wove onto fabric ', size: 73.2, w: 300, fill: '#000' }]} />
        <Diagram z={20} file="board-9/diagrams/g-1019.svg" x={1789} y={3643} w={1769} h={326.4} />
        <Copy z={30} x={2213} y={3984} w={888} h={103} segs={[{ t: 'Can be stretched together', size: 73.2, w: 300, fill: '#000' }]} />
        <Diagram z={31} file="board-9/diagrams/g-1034.svg" x={1466} y={4101} w={2414.3} h={326.4} />
        <Block z={41} x={2254} y={4535} w={358.9} h={358.9} fill="#f8d878" circle />
        <Block z={42} x={2226} y={4535} w={358.9} h={358.9} fill="#e78f34" circle />
        <Copy z={43} x={2647} y={4804} w={245} h={90} segs={[{ t: 'R : 5mm', size: 64, w: 400, fill: '#000' }]} />
        <Copy z={44} x={2647} y={4714} w={245} h={90} segs={[{ t: 'T : 2mm', size: 64, w: 400, fill: '#000' }]} />
        <Copy z={45} x={202} y={3138} w={1156} h={90} segs={[{ t: 'Massachusetts Institute of Technology', size: 64, w: 300, fill: '#000' }]} />
        <Copy z={46} x={202} y={4701} w={636} h={90} segs={[{ t: 'Coin Vibration Motor', size: 64, w: 500, fill: '#000' }]} />
        <Copy z={47} x={202} y={4804} w={1219} h={90} segs={[{ t: 'Suitable for lightweight wearable devices.', size: 64, w: 300, fill: '#000' }]} />
        <Crop z={48} file="board-9/img/1-1057.jpg" x={497} y={417} w={3383} h={2547.1} a={0.7942} d={0.8996} tx={0.0187} ty={0.0196} />
        <Title z={49} file="board-9/title-detail.png" alt="Detail output" x={200} y={200} w={1072} h={186} />
        <Crop z={50} file="board-9/img/1-1060.jpg" x={2238} y={441} w={693.6} h={693.6} a={0.3427} d={0.257} tx={0.5805} ty={0.2517} round />
        <Block z={51} x={2689.8} y={635.4} w={269.7} h={24.5} fill="#5a59ff" r={12} />
        <Block z={52} x={2689.5} y={636.5} w={259} h={24.5} fill="#5a59ff" r={12} />
        <Block z={53} x={2276} y={1607} w={376} h={177} fill="#d2d6e7" op={0.8} r={20} />
        <Copy z={54} x={2265} y={1656} w={398.2} h={79} align="center" segs={[{ t: '“Volumn”', size: 64, w: 700, fill: '#5e6ca4' }]} />
        <Block z={55} x={497} y={864} w={734} h={177} fill="#d2d6e7" op={0.8} r={20} />
        <Copy z={56} x={574} y={908} w={581} h={90} align="center" segs={[{ t: 'Wearing instruction', size: 64, w: 600, fill: '#5e6ca4' }]} />
        <Diagram z={57} file="board-9/diagrams/arrow-1070.svg" x={2196} y={1964} w={280.5} h={322} />
        <Diagram z={58} file="board-9/diagrams/arrow-1071.svg" x={1535} y={525} w={280.5} h={322} />
        <Diagram z={59} file="board-9/diagrams/arrow-1072.svg" x={1036} y={1193} w={280.5} h={322} />
        <Crop z={60} file="board-9/img/1-1073.jpg" x={2121} y={1036} w={1166} h={810} a={0.2695} d={0.2818} tx={0.271} ty={0.5226} flip />
        <Crop z={61} file="board-9/img/1-1073.jpg" x={1535} y={1032} w={589} h={805} a={0.1399} d={0.2873} tx={0.2569} ty={0.0986} />
        <Title z={62} file="board-9/title-refinement.png" alt="Technology refinement" x={4488} y={197} w={1973} h={186} />
        <Copy z={63} x={9108} y={1201} w={824} h={134} align="right" segs={[{ t: 'Reshape fiber wire', size: 96, w: 300, fill: '#000' }]} />
        <Copy z={64} x={8980} y={595} w={952} h={134} align="right" segs={[{ t: 'Install vibration motor', size: 96, w: 300, fill: '#000' }]} />
        <Copy z={65} x={9126} y={1703} w={806} h={134} align="right" segs={[{ t: 'Weave onto fabric', size: 96, w: 300, fill: '#000' }]} />
        <Copy z={66} x={8974} y={2257} w={958} h={134} align="right" segs={[{ t: 'Stitch rubber & fabric', size: 96, w: 300, fill: '#000' }]} />
        <Copy z={67} x={8841} y={2811} w={1091} h={134} align="right" segs={[{ t: 'Stretchable & Adjustable', size: 96, w: 300, fill: '#000' }]} />
        <Diagram z={68} file="board-9/diagrams/g-1081.svg" x={7792} y={1241} w={1729.7} h={287.5} />
        <Diagram z={89} file="board-9/diagrams/g-1105.svg" x={7792} y={1709} w={1776.3} h={378.5} />
        <Diagram z={151} file="board-9/diagrams/g-1171.svg" x={7792} y={624.4} w={1758.3} h={435.5} />
        <Diagram z={171} file="board-9/diagrams/g-1194.svg" x={7792} y={2268} w={1776.3} h={378.5} />
        <Diagram z={233} file="board-9/diagrams/g-1261.svg" x={7792} y={2827} w={2140.3} h={378.3} />
        <Copy z={297} x={4488} y={3761} w={1200} h={90} segs={[{ t: 'The same principle applies to wristbands', size: 64, w: 300, fill: '#000' }]} />
        <Crop z={298} file="board-9/img/1-1330.png" x={6610.4} y={3753} w={180.1} h={167.1} a={1} d={1} tx={0} ty={0} />
        <Crop z={299} file="board-9/img/1-1330.png" x={6621.4} y={3942} w={180.1} h={167.1} a={1} d={1} tx={0} ty={0} />
        <Crop z={300} file="board-9/img/1-1330.png" x={6621.4} y={4135.8} w={180.1} h={167.1} a={1} d={1} tx={0} ty={0} />
        <Crop z={301} file="board-9/img/1-1330.png" x={6612.8} y={4329.7} w={197.3} h={183} a={1} d={1} tx={0} ty={0} />
        <Crop z={302} file="board-9/img/1-1330.png" x={6612.8} y={4523.5} w={197.3} h={183} a={1} d={1} tx={0} ty={0} />
        <Crop z={303} file="board-9/img/1-1335.jpg" x={6003} y={3526} w={1416.2} h={1387.1} a={0.1418} d={0.209} tx={0.1974} ty={0.1587} />
        <Diagram z={304} file="board-9/diagrams/g-1336.svg" x={4488} y={786} w={2820.2} h={1092.4} />
        <Copy z={358} x={4651.7} y={4831} w={190} h={90} segs={[{ t: 'Fabric', size: 64, w: 600, fill: '#a8b8ff' }]} />
        <Copy z={359} x={4651.7} y={4679} w={183} h={90} segs={[{ t: 'String', size: 64, w: 600, fill: '#607dff' }]} />
        <Copy z={360} x={5222.7} y={4679} w={220} h={90} segs={[{ t: 'Rubber', size: 64, w: 600, fill: '#5e6ca4' }]} />
        <Block z={361} x={5049} y={4667} w={113.2} h={113.2} fill="#5e6ca4" circle />
        <Copy z={362} x={5222.3} y={4831} w={301} h={90} segs={[{ t: 'Vib motor', size: 64, w: 600, fill: '#5e6ca4' }]} />
        <Block z={363} x={5049} y={4820} w={113.2} h={113.2} fill="#e78f34" circle />
        <Block z={364} x={4488} y={4820} w={113.2} h={113.2} fill="#a8b8ff" circle />
        <Block z={365} x={4488} y={4667} w={113.2} h={113.2} fill="#607dff" circle />
        <Copy z={366} x={4488} y={507} w={1339} h={179} segs={[{ t: 'Stretchable headband', size: 128, w: 600, fill: '#5e6ca4' }]} />
        <Copy z={367} x={4488} y={3582} w={1339} h={179} segs={[{ t: 'Stretchable wristband', size: 128, w: 600, fill: '#5e6ca4' }]} />
        <Crop z={368} file="board-9/img/1-1406.png" x={4488} y={2087} w={2820} h={1240} a={0.9039} d={0.5899} tx={0.0387} ty={0.2405} />
        <Crop z={369} file="board-9/img/1-1407.png" x={7792} y={3692} w={2140} h={1102} a={0.8536} d={0.653} tx={0.061} ty={0.236} />
        <Title z={370} file="board-9/title-hardware.png" alt="Hardware Feasibility Test" x={10247} y={200} w={2087} h={186} />
        <Copy
          z={371}
          x={14124}
          y={2437}
          w={808}
          h={938}
          align="right"
          segs={[{ t: 'Motor at front stop vibrating when test object move to right, while motor on right began to vibrate.', size: 96, w: 200, fill: '#000' }]}
        />
        <Copy z={372} x={14372} y={4372} w={563} h={134} segs={[{ t: ': Test object', size: 96, w: 400, fill: '#000' }]} />
        <Copy
          z={373}
          x={10247}
          y={1712}
          w={4545}
          h={268}
          segs={[
            { t: 'Due to the limit of Arduino UNO R3, only ', size: 96, w: 400, fill: '#000' },
            { t: '4 direction', size: 96, w: 600, fill: '#e5504b' },
            { t: ' can be conducted at most. Simulate the four basic directions on the headband to simulate changes in game by object position.', size: 96, w: 400, fill: '#000' },
          ]}
        />
        <Block z={374} x={14212} y={4372} w={134} h={134} fill="#5e6ca4" op={0.95} circle />
        <Copy
          z={375}
          x={10247}
          y={4577}
          w={4513}
          h={358}
          segs={[{ t: 'Full functionality can be achieved with wireless signal technology.\nBetter test through game environment such as unity.', size: 128, w: 600, fill: '#5e6ca4' }]}
        />
        <Crop z={376} file="board-9/img/46-676.jpg" x={10247} y={2437.4} w={2430.5} h={2067.6} a={0.8483} d={0.962} tx={0.0522} ty={0.0353} />
        <Crop z={377} file="board-9/img/46-677.png" x={10294.4} y={2470.8} w={2268.1} h={1995.4} a={0.6165} d={0.8049} tx={0.1957} ty={0.1016} flip />
        <Crop z={378} file="board-9/img/46-678.jpg" x={12678} y={2437} w={1318} h={989} a={1} d={1} tx={0} ty={0} />
        <Block z={379} x={12685} y={2988} w={257} h={256} fill="#5e6ca4" op={0.95} circle />
        <Crop z={380} file="board-9/img/46-680.jpg" x={12678} y={3430} w={1318} h={1076} a={0.8691} d={0.9453} tx={0.0459} ty={0} />
        <Block z={381} x={13674} y={4240} w={225.5} h={226.3} fill="#5e6ca4" op={0.95} circle />
        <Diagram z={382} file="board-9/diagrams/g-682.svg" x={12905.8} y={2977.6} w={288.3} h={247.7} />
        <Diagram z={386} file="board-9/diagrams/g-687.svg" x={13247.7} y={3936.5} w={298.7} h={161.1} />
        <Crop z={390} file="board-9/img/46-693.jpg" x={12401} y={721} w={895.8} h={911} a={0.674} d={0.914} tx={0.1331} ty={0} />
        <Crop z={391} file="board-9/img/46-694.png" x={10247} y={721} w={1200.5} h={911} a={0.5251} d={0.7369} tx={0.0727} ty={0} />
        <Crop z={392} file="board-9/img/46-695.png" x={11447.5} y={721} w={953.4} h={911} a={0.3184} d={0.5634} tx={0.3398} ty={0.052} />
        <Diagram z={393} file="board-9/diagrams/g-696.svg" x={13337} y={721} w={450.4} h={660.4} />
        <Copy z={399} x={13337} y={1555} w={469} h={77} align="right" segs={[{ t: 'Vibration motor', size: 64, w: 400, fill: '#000' }]} />
        <Diagram z={400} file="board-9/diagrams/g-704.svg" x={14000} y={721} w={942.9} h={660.4} />
        <Copy z={407} x={14732} y={1555} w={211} h={77} segs={[{ t: 'Sensor', size: 64, w: 400, fill: '#000' }]} />
        <Copy z={408} x={10247} y={423} w={781} h={179} segs={[{ t: 'Arduino Test', size: 128, w: 600, fill: '#5e6ca4' }]} />
      </div>
    </div>
  )
}

export function Board9Prompt() {
  return (
    <DetailTeaser
      image="board-9/hardware-teaser.png"
      width={3749}
      height={2069}
      alt="Hardware test collage: a circular LED ring around an Arduino and breadboards, with two angled views marked in orange."
      dialogLabel="Hardware Feasibility Test"
      buttonLabel="see technic details"
    >
      <Board9Plate />
    </DetailTeaser>
  )
}
