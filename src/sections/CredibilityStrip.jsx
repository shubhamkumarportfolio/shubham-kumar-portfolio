const credibilityItems = [
  { number: '01', value: '5+ Years', label: 'Experience' },
  { number: '02', value: 'Brand & Campaigns', label: 'Communication' },
  { number: '03', value: 'Product & Technology', label: 'Storytelling' },
  { number: '04', value: 'Web & Motion', label: 'Execution' },
]

function CredibilityStrip() {
  return (
    <aside className="credibility" id="experience" aria-label="Professional profile highlights">
      {credibilityItems.map(({ number, value, label }) => (
        <div className="credibility__item" key={value}>
          <span className="credibility__number" aria-hidden="true">
            {number}
          </span>
          <div className="credibility__copy">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        </div>
      ))}
    </aside>
  )
}

export default CredibilityStrip
