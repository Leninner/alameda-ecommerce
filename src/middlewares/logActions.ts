export const logActions = store => next => actionInfo => {
  console.log(actionInfo, ' disparado')
  return next(actionInfo)
}
