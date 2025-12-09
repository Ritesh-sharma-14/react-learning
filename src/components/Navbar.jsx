export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Ritesh</h2>
      <ul style={styles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
};
