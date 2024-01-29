// JavaScript code to open the default email client with a new email
document.querySelector("#Director").addEventListener("click", function () {
  // Replace 'yourEmailAddress' with the actual Gmail address
  var emailAddress = "helpdeskekalyan@cgg.gov.in";
  var subject =
    "Urgent Request to Re-open Scholarship Registration for NIT Jamshedpur";
  var body = `
Dear Sir,

I am a student at NIT Jamshedpur, and it has come to our attention that our college had missed the scholarship registration deadline on your website.

We kindly request the reopening of the registration portal for NIT Jamshedpur to allow us to apply for the scholarships. This extension would greatly benefit deserving students who may have missed the deadline.

Your prompt attention to this matter would be highly appreciated.

Thank you.

Yours faithfully,

[Your Full Name]
[Your Registration Number]
NIT Jamshedpur
`;

  // Create the mailto link
  var mailtoLink =
    "mailto:" +
    encodeURIComponent(emailAddress) +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
  // Open the default email client
  window.location.href = mailtoLink;
});
