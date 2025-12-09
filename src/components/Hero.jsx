export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.left}>
        <h1 style={styles.title}>Hi, I'm <span style={{color: "#4a8ef7"}}>Ritesh Sharma</span></h1>
        <h3 style={styles.subtitle}>Aspiring Full Stack Developer</h3>
        <p style={styles.text}>
          I love building modern, clean, and user-friendly web applications.  
          Currently learning React and improving my development skills.
        </p>

        <div style={styles.buttons}>
          <a href="#" style={styles.btnPrimary}>Download Resume</a>
          <a href="#contact" style={styles.btnSecondary}>Contact Me</a>
        </div>
      </div>

      <div style={styles.right}>
        <img 
          src="https://via.placeholder.com/250" 
          alt="Ritesh" 
          style={styles.image}
        />
      </div>
    </section>
  );
}

const styles = {
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "80px 40px",
    background: "#f7f9fc",
  },
  left: {
    width: "55%",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "24px",
    color: "#555",
    marginTop: "10px",
  },
  text: {
    marginTop: "20px",
    color: "#666",
    fontSize: "18px",
    lineHeight: "1.6",
  },
  buttons: {
    marginTop: "30px",
    display: "flex",
    gap: "20px",
  },
  btnPrimary: {
    padding: "12px 24px",
    background: "#4a8ef7",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  btnSecondary: {
    padding: "12px 24px",
    border: "2px solid #4a8ef7",
    color: "#4a8ef7",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  right: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #4a8ef7",
  }
};
