const { useState, useEffect } = React;

function CitySelector() {
  const [city, setCity] = useState(() => localStorage.getItem("selectedCity") || "");

  useEffect(() => {
    localStorage.setItem("selectedCity", city);
  }, [city]);

  return (
    <div className="select">
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Выберите город</option>
        <option value="Севастополь">Севастополь</option>
        <option value="Симферополь">Симферополь</option>
        <option value="Ялта">Ялта</option>
        <option value="Алушта">Алушта</option>
        <option value="Уфа">Уфа</option>
        <option value="Керчь">Керчь</option>
        <option value="Феодосия">Феодосия</option>
        <option value="Судак">Судак</option>
        <option value="Бахчисарай">Бахчисарай</option>
        <option value="Евпатория">Евпатория</option>
        <option value="Джанкой">Джанкой</option>
      </select>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CitySelector />);
