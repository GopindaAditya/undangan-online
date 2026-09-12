import Reveal from './Reveal'

export default function Divider() {
  return (
    <Reveal
      as="div"
      direction="zoom"
      className="w-full flex items-center justify-center px-space-lg my-space-lg"
    >
      <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </Reveal>
  )
}
