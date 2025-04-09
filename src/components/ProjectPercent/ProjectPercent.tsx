export default function ProjectPercent({ mainProject, handleInputChange }: { mainProject: { id: number, name: string, percent: number, projectHours: number }, handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }) {
  return (
    <label htmlFor={`percent-${mainProject.id}`} className="label-percent">
      <span className="sr-only">Percent</span>
      <input
        type="number"
        name="percent"
        id={`percent-${mainProject.id}`}
        min={0}
        max={100}
        data-parent={mainProject.id}
        onChange={handleInputChange}
        value={mainProject.percent.toString()}
      />
      <span>%</span>
    </label>
  )
}
