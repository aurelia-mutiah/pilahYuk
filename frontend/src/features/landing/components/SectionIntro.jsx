import Pill from '../../../components/ui/Pill'

export default function SectionIntro({ pill, titleId, title, children }) {
  return (
    <div className="intro">
      <Pill leaf>{pill}</Pill>
      <h2 id={titleId}>{title}</h2>
      <p>{children}</p>
    </div>
  )
}
