const credibilityItems = [
  { number: '01', value: '5+ Years', label: 'Design Experience' },
  { number: '02', value: 'Brand & Campaign', label: 'Systems' },
  { number: '03', value: 'Product & Technology', label: 'Communication' },
  { number: '04', value: 'Web & Motion', label: 'Design' },
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
