import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import CourseCard from "./components/CourseCard";

function App() {
  const [courses, setCourses] = useState([]);
  const [domains, setDomains] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/domains")
      .then((r) => r.json())
      .then((data) => setDomains(["All", ...data]));
  }, []);

  useEffect(() => {
    setLoading(true);
    let url = `/api/courses?q=${search}&domain=${selectedDomain}`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, [search, selectedDomain]);

  // For home page: show domain tiles
  const domainTiles = domains
    .filter((d) => d !== "All")
    .map((domain) => (
      <div
        key={domain}
        className="domain-tile"
        onClick={() => setSelectedDomain(domain)}
        style={{
          cursor: "pointer",
          border: "1px solid #eee",
          borderRadius: "8px",
          padding: "1em",
          margin: "0.5em",
          minWidth: "150px",
          background: "#fafbfc",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
        }}
      >
        <b>{domain}</b>
      </div>
    ));

  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", maxWidth: 900, margin: "auto" }}>
      <header style={{ textAlign: "center", padding: "2em 0 1em 0" }}>
        <h1>Free Course Locator</h1>
        <p>
          Find and explore the best <b>free online courses</b> from Coursera, edX, Udemy, and more.<br />
          <span style={{ color: "#0070f3" }}>Main focus: Computer Science.</span>
        </p>
      </header>
      <section style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1em", marginBottom: 24 }}>
        {domainTiles}
      </section>
      <div style={{ display: "flex", gap: "1em", marginBottom: 16 }}>
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar domains={domains} selected={selectedDomain} onChange={setSelectedDomain} />
      </div>
      <main>
        {loading ? (
          <p>Loading courses...</p>
        ) : courses.length === 0 ? (
          <p>No courses found.</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5em" }}>
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </main>
      <footer style={{ textAlign: "center", padding: "2em 0", color: "#666" }}>
        Built with ❤️ for learning. Powered by open course platforms.
      </footer>
    </div>
  );
}

export default App;