import { Board8Plate } from './Board8Plate.tsx'
import { DetailTeaser } from './DetailTeaser.tsx'

export function Board8Prompt() {
  return (
    <DetailTeaser
      image="board-8/cardboard-prototype.jpg"
      width={830}
      height={549}
      alt="Black-and-white collage of cardboard headband prototypes and wearing tests."
      dialogLabel="Concept Development"
      buttonLabel="see design process"
      dialogClassName="b8-fit"
    >
      <Board8Plate />
    </DetailTeaser>
  )
}
