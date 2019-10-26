import useWindowSize from "./useWindowSize"

export function useMobile() {
  const mobile = 900 // TODO import from theme
  const winWidth = useWindowSize()
  return winWidth <= mobile
}

export default useMobile
