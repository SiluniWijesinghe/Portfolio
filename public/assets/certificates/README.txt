Drop real certificate images here and add a matching entry to the
CERTIFICATES array in data/portfolioData.js, e.g.:

  { title: "AWS Cloud Practitioner Essentials", issuer: "AWS Skill Builder",
    date: "2026", image: "/assets/certificates/aws-essentials.png",
    url: "https://verify-link-if-you-have-one" }

The Certificates section only renders once CERTIFICATES has at least one
entry, so it's fine to leave this empty until you have certificates to add.
