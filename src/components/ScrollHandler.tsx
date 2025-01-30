import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

export const ScrollHandler = ({ setSection }: { setSection: (s: string) => void }) => {
  const scroll = useScroll()
  const sections = ['home', 'features', 'sustainability', 'contact']

  useFrame(() => {
    const index = Math.round(scroll.offset * (sections.length - 1))
    setSection(sections[index])
  })

  return null
}