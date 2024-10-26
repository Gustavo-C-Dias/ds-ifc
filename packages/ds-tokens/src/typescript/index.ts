import type { Tokens } from '../types'
import * as color from './color'
import * as border from './border'
import * as spacing from './spacing'
import * as font from './font'
import * as transitions from './transition'

const tokens: Tokens = {
    ...color,
    ...border,
    ...spacing,
    ...font,
    ...transitions,
}

export default tokens
