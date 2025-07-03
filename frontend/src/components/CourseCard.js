import React from "react";

function CourseCard({ course }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 10,
        padding: "1.5em",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
      }}
    >
      <h3 style={{ margin: "0 0 0.5em 0" }}>{course.title}</h3>
      <p style={{ margin: "0 0 0.5em 0", color: "#555" }}>{course.description}</p>
      <div style={{ marginBottom: 8 }}>
        <span style={{ fontWeight: 500 }}>{course.provider}</span> &middot; {course.platform}
      </div>
      <div>
        <span
          style={{
            display: "inline-block",
            background: "#f3f3fc",
            color: "#1e3a8a",
            borderRadius: 6,
            padding: "2px 10px",
            fontSize: 13,
            marginRight: 8
          }}
        >
          {course.domain}
        </span>
        {course.free && (
          <span
            style={{
              display: "inline-block",
              background: "#e6ffed",
              color: "#297141",
              borderRadius: 6,
              padding: "2px 10px",
              fontSize: 13
            }}
          >
            Free
          </span>
        )}
      </div>
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: 12,
          display: "inline-block",
          textDecoration: "none",
          color: "#fff",
          background: "#0070f3",
          padding: "0.5em 1.2em",
          borderRadius: 6,
          fontWeight: 600
        }}
      >
        Go to Course
      </a>
    </div>
  );
}

export default CourseCard;