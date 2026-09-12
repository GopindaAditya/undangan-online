import Reveal from './Reveal'

export default function PersonCard({ person, direction }) {
  return (
    <Reveal
      direction={direction}
      className="w-full max-w-sm bg-surface-charcoal rounded-xl p-space-lg shadow-xl shadow-black/70 flex flex-col items-center text-center relative"
    >
      <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-b from-primary via-primary-container/40 to-transparent shadow-lg mb-space-md">
        <div className="w-full h-full rounded-full overflow-hidden bg-surface-elevated">
          <img className="w-full h-full object-cover" src={person.photo} alt={person.fullName} />
        </div>
      </div>
      <span className="px-space-sm py-1 rounded-full bg-surface-elevated text-primary font-label-caption text-label-caption uppercase tracking-widest mb-space-xs">
        {person.role}
      </span>
      <h4 className="font-headline-sm text-headline-sm text-primary font-semibold tracking-wide">
        {person.fullName}
      </h4>
      <span className="font-label-caption text-label-caption text-secondary tracking-wider mt-1 uppercase">
        {person.order}
      </span>
      <div className="w-16 h-[1px] bg-outline-variant my-space-sm" />
      <div className="text-on-surface-variant font-body-md text-body-md space-y-1">
        <p className="text-[13px] text-text-muted">Putra/Putri terkasih dari Pasangan:</p>
        <p className="font-medium text-on-surface">{person.parents[0]}</p>
        <p className="text-xs text-text-muted">&amp;</p>
        <p className="font-medium text-on-surface">{person.parents[1]}</p>
      </div>
      <div className="mt-space-md flex items-center gap-space-2xs text-text-muted text-xs">
        <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
        <span>{person.location}</span>
      </div>
    </Reveal>
  )
}
