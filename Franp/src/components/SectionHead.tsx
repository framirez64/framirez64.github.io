import type { Tone } from '../tones'

type SectionHeadProps = {
  /** Accession number rendered as the oversized ghost numeral, e.g. "02". */
  number: string
  /** Mono label on the upper-left axis, e.g. "No. 02 — About". */
  label: string
  /** Color of the left-hand triangle. */
  left: Tone
  /** Color of the right-hand triangle. */
  right: Tone
}

/**
 * The diagonal color split that opens every section. Structure comes from
 * clip-path splits, never a CSS gradient.
 */
function SectionHead({ number, label, left, right }: SectionHeadProps) {
  return (
    <div className="section-head">
      <div className={`head-tri head-tri-left tone-${left}`} />
      <div className={`head-tri head-tri-right tone-${right}`} />
      <div className="head-label">{label}</div>
      <div className="head-dots">
        <span /><span /><span /><span /><span /><span />
      </div>
      <div className="head-num">{number}</div>
    </div>
  )
}

export default SectionHead
