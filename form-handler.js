async function handleFormSubmit(event) {
  event.preventDefault();

  // Get form data
  const formData = {
    name: document.querySelector('[name="name"]').value,
    email: document.querySelector('[name="email"]').value,
    subject: document.querySelector('[name="subject"]').value,
    message: document.querySelector('[name="message"]').value,
  };

  // Email configuration
  const emailConfig = {
    from: "18kgwalker@gmail.com",
    to: "jebincrsp@gmail.com",
    subject: "New Form Submission",
    body: `User Name: ${formData.name}
User Email: ${formData.email}
Subject: ${formData.subject}
User Message: ${formData.message}`,
  };

  try {
    // You'll need a server endpoint to handle the email sending
    const response = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData, emailConfig }),
    });

    if (response.ok) {
      window.location.href = "contact.html";
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Error:", error);
    // Handle error (show message to user, etc.)
  }
}

// Add this to your form element
document.querySelector("form").addEventListener("submit", handleFormSubmit);
