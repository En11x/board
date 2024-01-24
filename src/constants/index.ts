export enum BOARD_MODE {
  SELECT = 'select',
  HAND = 'hand',
  DRAW = 'draw',
  ERASER = 'eraser',
}
const colors = [
  '#ADB5BD',
  '#E599F7',
  '#AE3EC9',
  '#4263EB',
  '#4DABF7',
  '#FFC078',
  '#F76707',
  '#099268',
  '#40C057',
  '#FF8787',
  '#E03131',
]
export const BOARD_COLORS: string[] = ['#000000', ...colors]
export const BOARD_COLORS_DARK: string[] = ['#ffffff', ...colors]
