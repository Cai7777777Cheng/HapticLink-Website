// Positions are the manifest percentages for Figma boards 6 and 11.
// Shadow cards use the render box. Images use the layout box.

export type PlateLayer = {
  file: string
  alt: string
  width: number
  height: number
  left: number
  top: number
  w: number
  h: number
}

export const board6Layers: PlateLayer[] = [
  { file: "img-wukong.png", alt: "Black Myth Wukong cover + stats", width: 1547, height: 1040, left: 1.9839, top: 22.2006, w: 15.2689, h: 20.2532 },
  { file: "img-table.png", alt: "people at table photo", width: 1547, height: 1040, left: 17.7463, top: 22.2006, w: 15.2689, h: 20.2532 },
  { file: "img-blackmyth-game.png", alt: "Black Myth gameplay + inset", width: 1547, height: 1040, left: 1.9839, top: 43.4275, w: 15.2689, h: 20.2532 },
  { file: "img-realsound.png", alt: "Real Sound game cover", width: 1547, height: 1040, left: 17.7463, top: 43.4275, w: 15.2689, h: 20.2532 },
  { file: "card-platform-research.png", alt: "Platform Research table", width: 2048, height: 882, left: 34.8866, top: 19.8364, w: 29.6081, h: 25.1373 },
  { file: "card-interview-tsuji.png", alt: "Interview Tsuji", width: 2048, height: 671, left: 64.3288, top: 19.8364, w: 34.7898, h: 22.4888 },
  { file: "card-interview-bear.png", alt: "Interview Bear", width: 2048, height: 671, left: 64.3288, top: 38.6095, w: 34.7898, h: 22.4888 },
  { file: "card-interview-nakane.png", alt: "Interview Nakane", width: 2048, height: 671, left: 64.3288, top: 57.3827, w: 34.7898, h: 22.4888 },
]

export const board6Bars = [
  { label: "Action", color: "#a6adca", left: 41.8390, top: 54.0019, w: 13.9562, h: 1.1879, labelLeft: 36.1243, labelTop: 53.7293, labelW: 1.7963, labelH: 1.7527 },
  { label: "RPG", color: "#a6adca", left: 41.8390, top: 55.9104, w: 12.0908, h: 1.1879, labelLeft: 36.1243, labelTop: 55.6378, labelW: 1.2831, labelH: 1.7527 },
  { label: "Racing", color: "#a6adca", left: 41.8390, top: 57.8189, w: 11.1432, h: 1.1879, labelLeft: 36.1243, labelTop: 57.5463, labelW: 1.9444, labelH: 1.7527 },
  { label: "Shooter", color: "#a6adca", left: 41.8390, top: 59.7274, w: 7.8861, h: 1.1879, labelLeft: 36.1243, labelTop: 59.4547, labelW: 2.2306, labelH: 1.7527 },
  { label: "Strategy", color: "#a6adca", left: 41.8390, top: 61.6358, w: 15.2393, h: 1.1879, labelLeft: 36.1243, labelTop: 61.3632, labelW: 2.3885, labelH: 1.7527 },
  { label: "Sports motion", color: "#5e6ca4", left: 41.8390, top: 63.5443, w: 21.4179, h: 1.1879, labelLeft: 36.1243, labelTop: 63.2717, labelW: 4.2638, labelH: 1.7527 },
  { label: "Simulation", color: "#a6adca", left: 41.8390, top: 65.4528, w: 18.3780, h: 1.1879, labelLeft: 36.1243, labelTop: 65.1801, labelW: 2.9314, labelH: 1.7527 },
  { label: "Music & Rhythm", color: "#6c7bb9", left: 41.8390, top: 67.3612, w: 19.9769, h: 1.1879, labelLeft: 36.1243, labelTop: 67.0886, labelW: 4.6389, labelH: 1.7527 },
  { label: "Puzzle & Casual", color: "#8496df", left: 41.8390, top: 69.2697, w: 19.9769, h: 1.1879, labelLeft: 36.1243, labelTop: 68.9971, labelW: 4.5797, labelH: 1.7527 },
  { label: "Party Games", color: "#a6adca", left: 41.8390, top: 71.1782, w: 18.0819, h: 1.1879, labelLeft: 36.1243, labelTop: 70.9056, labelW: 3.6618, labelH: 1.7527 },
]

export const board11Layers: PlateLayer[] = [
  { file: "card-9927.png", alt: "", width: 2048, height: 1116, left: 9.8661, top: 15.0847, w: 22.0279, h: 23.6767 },
  { file: "card-9932.png", alt: "", width: 2048, height: 1116, left: 43.3254, top: 15.0774, w: 22.0279, h: 23.6767 },
  { file: "card-9933.png", alt: "", width: 2048, height: 1121, left: 77.3375, top: 15.0847, w: 21.9292, h: 23.6767 },
  { file: "card-9928.png", alt: "", width: 2048, height: 1116, left: 9.8661, top: 43.7508, w: 22.0279, h: 23.6767 },
  { file: "card-9931.png", alt: "", width: 2048, height: 1116, left: 43.3255, top: 43.7508, w: 22.0279, h: 23.6767 },
  { file: "card-9934.png", alt: "", width: 2048, height: 1116, left: 77.1500, top: 43.7508, w: 22.0279, h: 23.6767 },
  { file: "card-9929.png", alt: "", width: 2048, height: 1121, left: 9.9648, top: 74.9484, w: 21.9292, h: 23.6767 },
  { file: "card-9930.png", alt: "", width: 2048, height: 1116, left: 43.3254, top: 74.9484, w: 22.0279, h: 23.6767 },
  { file: "card-9935.png", alt: "", width: 2048, height: 842, left: 77.1500, top: 70.2551, w: 22.0279, h: 17.8539 },
  { file: "game-9681.png", alt: "", width: 702, height: 395, left: 1.9740, top: 17.4489, w: 6.9222, h: 7.6882 },
  { file: "game-1724.png", alt: "", width: 712, height: 403, left: 36.2920, top: 17.7215, w: 7.0230, h: 7.8329 },
  { file: "game-9645.png", alt: "", width: 714, height: 403, left: 69.3467, top: 17.4563, w: 7.0413, h: 7.8329 },
  { file: "game-2015.png", alt: "", width: 701, height: 202, left: 1.9740, top: 27.4781, w: 6.9189, h: 3.9338 },
  { file: "game-2022.png", alt: "", width: 701, height: 205, left: 1.9740, top: 33.6514, w: 6.9189, h: 3.9922 },
  { file: "game-2035.png", alt: "", width: 712, height: 338, left: 36.2920, top: 29.6592, w: 7.0275, h: 6.5823 },
  { file: "game-2116.png", alt: "", width: 713, height: 360, left: 69.3467, top: 29.2308, w: 7.0373, h: 7.0107 },
  { file: "game-9682.png", alt: "", width: 710, height: 400, left: 1.9740, top: 46.1149, w: 7.0077, h: 7.7766 },
  { file: "game-9508.png", alt: "", width: 712, height: 396, left: 36.2920, top: 46.1149, w: 7.0275, h: 7.7066 },
  { file: "game-1899.png", alt: "", width: 697, height: 395, left: 69.3467, top: 46.0565, w: 6.8794, h: 7.6923 },
  { file: "game-2024.png", alt: "", width: 710, height: 239, left: 1.9740, top: 56.3389, w: 7.0077, h: 4.6543 },
  { file: "game-2038.png", alt: "", width: 330, height: 111, left: 40.0624, top: 55.5209, w: 3.2571, h: 2.1616 },
  { file: "game-2039.png", alt: "", width: 341, height: 162, left: 36.2920, top: 55.1315, w: 3.3657, h: 3.1548 },
  { file: "game-2020.png", alt: "", width: 347, height: 100, left: 69.3467, top: 59.3379, w: 3.4249, h: 1.9474 },
  { file: "game-2029.png", alt: "", width: 330, height: 111, left: 72.9888, top: 59.2016, w: 3.2571, h: 2.1616 },
  { file: "game-9510.png", alt: "", width: 710, height: 400, left: 1.9740, top: 77.2460, w: 7.0077, h: 7.7784 },
  { file: "game-9509.png", alt: "", width: 706, height: 396, left: 36.2920, top: 77.3126, w: 6.9630, h: 7.7118 },
  { file: "game-2031.png", alt: "", width: 704, height: 360, left: 1.9740, top: 89.0944, w: 6.9485, h: 7.0107 },
  { file: "game-2027.png", alt: "", width: 703, height: 237, left: 36.2920, top: 91.4898, w: 6.9386, h: 4.6154 },
]
