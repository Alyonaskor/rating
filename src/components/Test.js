function Greet({ name }) {
    const message = `Hello, ${name}!`; // Calculates output
    // Bad!
    document.title = `Greetings to ${name}`; // Side-effect!
    return <div>{message}</div>;       // Calculates output
  }
  export default Greet