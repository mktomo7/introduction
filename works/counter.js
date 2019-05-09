let count = 0
const countUp = () => {
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数: ' + count
}
const resset = () => {
    count++
  const countElement = document.querySelector('#count')
  count = 0
  countElement.innerText = '回数: ' + count
}