export default function TotalHours({totalHours, handleInputChange}: {totalHours: number, handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
    <label htmlFor="totalHours" className="total-hours">
      <span>Total Hours</span>
      <input
        autoFocus
        type="number"
        name="totalHours"
        id="totalHours"
        min={0}
        value={totalHours.toString()}
        onChange={handleInputChange}
      />
    </label>
  )
}
