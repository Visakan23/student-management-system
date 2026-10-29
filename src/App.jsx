
import "./App.css";

// Header component
function Header() {
  return (
    <header className="header">
      <h1>Student Management System</h1>
    </header>
  );
}

// Student details stored in JavaScript variables
const student1 = {
  name: "Anu",
  department: "CSE",
  year: "3rd Year",
};

const student2 = {
  name: "Bala",
  department: "Computer Science",
  year: "3rd Year",
};

// Reusable StudentProfile component using props
function StudentProfile({ name, department, year }) {
  return (
    <div className="student-profile">
      <h3>Name: {name}</h3>
      <p>Department: {department}</p>
      <p>Year: {year}</p>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Student Management System</p>
    </footer>
  );
}

// Main App component
function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <h2>Student Profiles</h2>

        <section className="student-section">
          <h3>Student 1</h3>
          <StudentProfile
            name={student1.name}
            department={student1.department}
            year={student1.year}
          />
        </section>

        <section className="student-section">
          <h3>Student 2</h3>
          <StudentProfile
            name={student2.name}
            department={student2.department}
            year={student2.year}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
