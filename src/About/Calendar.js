import React, { useState, useEffect } from "react";
import "./Calendar.css";

/* ================= MONTHS ================= */
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

/* ================= FIXED INDIAN HOLIDAYS ================= */
function getFixedIndianHolidays(year) {
  return [
    { date: `${year}-01-01`, name: "New Year's Day" },
    { date: `${year}-01-15`, name: "Makara Sankranti" },
    { date: `${year}-01-26`, name: "Republic Day" },
    { date: `${year}-01-24`, name: "Vasant Panchami" },
    { date: `${year}-02-18`, name: "Maha Shivaratri" },
    { date: `${year}-03-04`, name: "Holi" },
    { date: `${year}-03-19`, name: "Ugadi / Gudi Padwa" },
    { date: `${year}-03-26`, name: "Ram Navami" },
    { date: `${year}-04-02`, name: "Mahavir Jayanti" },
    { date: `${year}-04-03`, name: "Good Friday" },
    { date: `${year}-04-14`, name: "Dr. Ambedkar Jayanti" },
    { date: `${year}-05-01`, name: "Labour Day / May Day" },
    { date: `${year}-08-15`, name: "Independence Day" },
    { date: `${year}-10-02`, name: "Gandhi Jayanti" },
    { date: `${year}-12-25`, name: "Christmas Day" }
  ];
}

/* ================= VARIABLE INDIAN FESTIVALS ================= */
const VARIABLE_INDIAN_FESTIVALS = {
  2026: [
    { date: "2026-01-24", name: "Vasant Panchami" },
    { date: "2026-02-18", name: "Maha Shivaratri" },
    { date: "2026-03-04", name: "Holi" },
    { date: "2026-03-19", name: "Ugadi / Gudi Padwa" },
    { date: "2026-03-26", name: "Ram Navami" },
    { date: "2026-04-02", name: "Mahavir Jayanti" },
    { date: "2026-05-01", name: "Eid al-Fitr" },
    { date: "2026-07-21", name: "Eid al-Adha (Bakrid)" },
    { date: "2026-08-19", name: "Raksha Bandhan" },
    { date: "2026-09-04", name: "Janmashtami" },
    { date: "2026-09-14", name: "Vinayaka Chavithi" },
    { date: "2026-10-20", name: "Dussehra" },
    { date: "2026-11-08", name: "Diwali" },
    { date: "2026-11-09", name: "Govardhan Puja" },
    { date: "2026-11-10", name: "Bhai Dooj" }
  ]
};

/* ================= COMPONENT ================= */
const Calendar = () => {
  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countryName, setCountryName] = useState("India");
  const [countryCode, setCountryCode] = useState("IN");
  const [holidays, setHolidays] = useState([]);
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  const isMobile = window.innerWidth <= 600;

  /* ================= FETCH COUNTRIES ================= */
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
      .then(res => res.json())
      .then(data => {
        setCountries(
          data
            .filter(c => c?.cca2 && c?.name?.common)
            .map(c => ({ code: c.cca2, name: c.name.common }))
            .sort((a, b) => a.name.localeCompare(b.name))
        );
      });
  }, []);

  /* ================= FETCH HOLIDAYS ================= */
  useEffect(() => {
    if (!year || !countryCode) return;

    // 🇮🇳 INDIA
    if (countryCode === "IN") {
      const fixed = getFixedIndianHolidays(year);
      const variable = VARIABLE_INDIAN_FESTIVALS[year] || [];

      setHolidays(
        [...fixed, ...variable].map(h => ({
          date: h.date,
          localName: h.name
        }))
      );
      return;
    }

    // 🌍 OTHER COUNTRIES
    fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`)
      .then(res => res.ok ? res.json() : [])
      .then(data => setHolidays(Array.isArray(data) ? data : []))
      .catch(() => setHolidays([]));
  }, [year, countryCode]);

  /* ================= HELPERS ================= */
  const isHoliday = (date) =>
    holidays.find(h => h.date === date);

  const generateMonth = (y, m) => ({
    firstDay: new Date(y, m, 1).getDay(),
    totalDays: new Date(y, m + 1, 0).getDate()
  });

  /* ================= UI ================= */
  return (
    <div>

      {/* CONTROLS */}
      <div className="calendar-controls">

        <input
          type="number"
          value={year}
          onChange={e => setYear(+e.target.value)}
        />

        <select value={month} onChange={e => setMonth(e.target.value)}>
          <option value="">All Months</option>
          {months.map((m, i) => (
            <option key={i} value={i}>{m}</option>
          ))}
        </select>

        {/* COUNTRY */}
        <div className="country-box">
          <input
            value={countryName}
            onChange={e => {
              const txt = e.target.value;
              setCountryName(txt);
              setFilteredCountries(
                countries.filter(c =>
                  c.name.toLowerCase().startsWith(txt.toLowerCase())
                ).slice(0, 8)
              );
            }}
            placeholder="Type country"
          />

          {filteredCountries.length > 0 && (
            <ul className="country-dropdown">
              {filteredCountries.map(c => (
                <li
                  key={c.code}
                  onClick={() => {
                    setCountryName(c.name);
                    setCountryCode(c.code);
                    setFilteredCountries([]);
                  }}
                >
                  {c.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* CALENDAR */}
      <div className="calendar-card-container">
        {(month === "" && isMobile
          ? [today.getMonth()]
          : month === ""
          ? months.map((_, i) => i)
          : [Number(month)]
        ).map(m => {
          const { firstDay, totalDays } = generateMonth(year, m);

          return (
            <div className="calendar-card" key={m}>
              <h3>{months[m]} {year}</h3>

              <div className="days-grid">
                {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
                  <div key={d} className="day-name">{d}</div>
                ))}

                {[...Array(firstDay)].map((_, i) => <div key={i} />)}

                {[...Array(totalDays)].map((_, i) => {
                  const day = i + 1;
                  const date =
                    `${year}-${String(m + 1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
                  const holiday = isHoliday(date);

                  return (
                    <div
                      key={day}
                      className={`day ${holiday ? "holiday" : ""}`}
                      onClick={() => {
                        if (holiday && isMobile) {
                          setSelectedHoliday({
                            date,
                            name: holiday.localName
                          });
                        }
                      }}
                    >
                      <div>{day}</div>
                      {holiday && <div className="holiday-name">{holiday.localName}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE EXPAND PANEL */}
      {selectedHoliday && isMobile && (
        <div className="mobile-holiday-panel">
          <div className="panel-header">
            <span>{selectedHoliday.date}</span>
            <button onClick={() => setSelectedHoliday(null)}>✕</button>
          </div>
          <div className="panel-body">
            🎉 {selectedHoliday.name}
          </div>
        </div>
      )}

    </div>
  );
};

export default Calendar;