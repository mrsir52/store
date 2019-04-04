const fetchData = () => {
    const data = JSON.stringify({ ...this.state});
    fetch("http://localhost:4000", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    })
      //this will refresh the window once you hit submit
      .then(() => window.location.reload(true));
  }
    
export default fetchData