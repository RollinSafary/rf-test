import slice from './slice'

const {} = slice.actions

const initalize = () => () => {
  console.log('Core initalization invoked')
}

export default { initalize }
