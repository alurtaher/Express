document
  .getElementById("productForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const productName = document.getElementById("product").value;

    try {
      const response = await axios.post("/api/products", { productName });

      document.getElementById(
        "responseMessage"
      ).innerText = `Server Response: ${response.data.message}, Product: ${response.data.product}`;
    } catch (error) {
      console.error("Error sending product:", error);
    }
  });
