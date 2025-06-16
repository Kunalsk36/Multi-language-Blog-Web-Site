// Initialize Quill editor
const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  },
  placeholder: "Write your blog content here...",
});

// Word count functionality
quill.on("text-change", function () {
  const text = quill.getText().trim();
  const wordCount = text ? text.split(/\s+/).length : 0;
  document.getElementById("word-count").textContent = `${wordCount} words`;

  // Simulate auto-save
  document.getElementById("auto-save-status").textContent = "Auto-saving...";
  setTimeout(() => {
    document.getElementById("auto-save-status").textContent = "Auto-saved";
  }, 1000);
});

// Language selection
const languageBtns = document.querySelectorAll(".language-btn");
languageBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    languageBtns.forEach((b) => {
      b.classList.remove("bg-purple-600", "text-white");
      b.classList.add("bg-gray-200", "text-gray-700");
    });
    this.classList.remove("bg-gray-200", "text-gray-700");
    this.classList.add("bg-purple-600", "text-white");
    // Here you would add logic to handle language change
  });
});

// Plagiarism check simulation
document
  .getElementById("plagiarism-check-btn")
  .addEventListener("click", function () {
    // Simulate API call
    this.textContent = "Checking...";
    this.disabled = true;

    setTimeout(() => {
      const resultDiv = document.getElementById("plagiarism-result");
      const score = Math.floor(Math.random() * 30); // Random score for demo
      const scoreElement = document.getElementById("plagiarism-score");
      const messageElement = document.getElementById("plagiarism-message");
      const detailsElement = document.getElementById("plagiarism-details");

      resultDiv.classList.remove("hidden");
      resultDiv.className = "p-3 rounded-lg text-sm font-medium ";

      if (score < 10) {
        resultDiv.classList.add("plagiarism-low");
        messageElement.textContent = "Low plagiarism detected";
        detailsElement.textContent =
          "Your content appears to be original. You're good to publish!";
      } else if (score < 20) {
        resultDiv.classList.add("plagiarism-medium");
        messageElement.textContent = "Moderate plagiarism detected";
        detailsElement.textContent =
          "Consider revising some sections to ensure originality.";
      } else {
        resultDiv.classList.add("plagiarism-high");
        messageElement.textContent = "High plagiarism detected";
        detailsElement.textContent =
          "This content exceeds our plagiarism threshold. Please revise before publishing.";
      }

      scoreElement.textContent = `${score}%`;
      this.textContent = "Check Again";
      this.disabled = false;
    }, 2000);
  });

// Publish button
document.getElementById("publish-btn").addEventListener("click", function () {
  // Here you would add logic to publish the blog
  // This would include sending the content to your backend
  // where it would be translated to other languages
  alert("Blog published successfully! Translations will be processed shortly.");
});
