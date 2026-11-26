const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`

export function Board8Plate() {
  return (
    <img
      className="b8-plate"
      src={asset('board-8/board-8-plate.png')}
      width={4096}
      height={2076}
      alt="Concept Development board for the direction headband and distance wristband, including concept studies, hardware problems, material reference, and final refinement notes."
      decoding="async"
      draggable={false}
    />
  )
}
