// Shared content data for the portfolio.
// Edit this file to add/update projects or articles — every page reads from here.

const PROJECTS = [
  {
    id: "sportmusik",
    name: "Sport dan Musik Jakarta",
    tagline: "Online shop for a family sporting goods & instruments business",
    stack: "Golang, Polymer JS, MySQL",
    cover: "assets/projects/sportmusik/1.png",
    description:
      "A full online store built for the family business, covering the shopper journey from browsing products to checkout and payment upload, plus an admin panel for managing the catalog.",
    gallery: [
      { src: "assets/projects/sportmusik/1.png", caption: "Home page" },
      { src: "assets/projects/sportmusik/2.png", caption: "Product details" },
      { src: "assets/projects/sportmusik/3.png", caption: "Cart" },
      { src: "assets/projects/sportmusik/4.png", caption: "Checkout" },
      { src: "assets/projects/sportmusik/5.png", caption: "Upload payment proof" },
      { src: "assets/projects/sportmusik/6.png", caption: "Admin — products" },
    ],
  },
  {
    id: "alyucado",
    name: "Alyucado",
    tagline: "All-you-can-do personal task & habit app",
    stack: "Dart, Flutter, SQFLite",
    cover: "assets/projects/alyucado/1.jpg",
    description:
      "A personal mobile project exploring Flutter and local-first storage with SQFLite — built to sharpen mobile development skills alongside the day-to-day backend work.",
    gallery: [
      { src: "assets/projects/alyucado/1.jpg", caption: "App screen 1" },
      { src: "assets/projects/alyucado/2.jpg", caption: "App screen 2" },
      { src: "assets/projects/alyucado/3.jpg", caption: "App screen 3" },
    ],
  },
  {
    id: "akuntansisma",
    name: "Akuntansi SMA",
    tagline: "Accounting learning tool for high school students",
    stack: "PHP, Bootstrap, MySQL",
    cover: "assets/projects/akuntansisma/1.png",
    description:
      "A web app built to help high school students practice accounting exercises, an early full-stack project that set the foundation for later work.",
    gallery: [
      { src: "assets/projects/akuntansisma/1.png", caption: "Screen 1" },
      { src: "assets/projects/akuntansisma/2.png", caption: "Screen 2" },
      { src: "assets/projects/akuntansisma/3.png", caption: "Screen 3" },
    ],
  },
  {
    id: "chatbot",
    name: "LINE Quote Chatbot",
    tagline: "A LINE bot that replies with quotes on demand",
    stack: "JavaScript, LIFF, PostgreSQL",
    cover: "assets/projects/chatbot/1.jpg",
    description:
      "A LINE Front-end Framework (LIFF) integration that serves quotes through a chatbot interface, backed by PostgreSQL for storage.",
    gallery: [{ src: "assets/projects/chatbot/1.jpg", caption: "Chat interface" }],
  },
  {
    id: "messager",
    name: "LINE Notes Messenger",
    tagline: "Note-taking companion inside LINE chat",
    stack: "JavaScript, LIFF",
    cover: "assets/projects/messager/1.jpg",
    description:
      "A LIFF-based messenger utility for capturing and organizing quick notes without leaving the LINE app.",
    gallery: [
      { src: "assets/projects/messager/1.jpg", caption: "Screen 1" },
      { src: "assets/projects/messager/2.jpg", caption: "Screen 2" },
      { src: "assets/projects/messager/3.jpg", caption: "Screen 3" },
      { src: "assets/projects/messager/4.jpg", caption: "Screen 4" },
      { src: "assets/projects/messager/5.jpg", caption: "Screen 5" },
      { src: "assets/projects/messager/6.jpg", caption: "Screen 6" },
      { src: "assets/projects/messager/7.jpg", caption: "Screen 7" },
    ],
  },
  {
    id: "bramantio",
    name: "Bramant.io — Personal Website",
    tagline: "An earlier version of this very portfolio",
    stack: "React JS, Golang, MySQL",
    cover: "assets/projects/bramantio/1.PNG",
    description:
      "A full-stack personal site with a Go REST API backend and a React admin panel for managing articles and projects — the direct predecessor of the site you're looking at now.",
    gallery: [
      { src: "assets/projects/bramantio/1.PNG", caption: "Screen 1" },
      { src: "assets/projects/bramantio/2.PNG", caption: "Screen 2" },
      { src: "assets/projects/bramantio/3.PNG", caption: "Screen 3" },
    ],
  },
];

const ARTICLES = [
  {
    id: "player-coach",
    title: "What a year of being a player-coach taught me",
    date: "June 2026",
    excerpt:
      "Coding on one product while guiding two others at the same time — notes on staying hands-on without losing sight of the bigger picture.",
    thumb: "assets/dark/Turtle.png",
    body: `
      <p>Being a player-coach means splitting attention between shipping code yourself and helping teammates ship theirs. It sounds simple until requirements shift mid-sprint and you're the one people look to for both the fix and the reassurance.</p>
      <h3>What changed</h3>
      <p>The biggest shift wasn't technical — it was learning to separate "this is broken" from "this is unfamiliar." A lot of what looked like a skill gap was actually an unstable environment: shifting requirements, tight timelines, thin documentation.</p>
      <h3>What I'd tell myself a year ago</h3>
      <p>Write things down as you go, not after. And notice the pattern of pushing past your limits before stopping — catching it earlier is the whole game.</p>
    `,
  },
  {
    id: "ocr-pipeline",
    title: "Building an OCR-to-AI autofill pipeline",
    date: "March 2026",
    excerpt:
      "Frontend to backend, OCR to LLM: a walkthrough of wiring document scanning into structured form autofill with the OpenAI Responses API.",
    thumb: "assets/dark/Whale.png",
    body: `
      <p>The brief was simple to say and hard to do: scan a document, extract the fields, and drop them straight into a form — reliably. The pipeline ended up spanning the full stack, from the upload UI down to prompt and schema design for the LLM step.</p>
      <h3>The tricky part</h3>
      <p>OCR text is messy. Field names don't map 1:1, and documents don't come in one shape. Most of the real work was in prompt and schema engineering — telling the model exactly what "correct" looks like — and in validating the output before it ever reaches the user.</p>
      <h3>Result</h3>
      <p>A pipeline that turns a scanned document into a filled, reviewable form in seconds instead of minutes of manual typing.</p>
    `,
  },
  {
    id: "bramley",
    title: "Why I'm building Bramley",
    date: "Ongoing",
    excerpt:
      "A config-driven ERP/CRM flow engine, built in Go — some early thinking on why the workflows I've seen in production convinced me there's a cleaner way.",
    thumb: "assets/dark/Lochness.png",
    body: `
      <p>Working inside a monolithic CRM/ERP system for a while surfaces the same pattern over and over: business logic hardcoded where it should be configured. Every new workflow means new code, new deploys, new risk.</p>
      <h3>The idea</h3>
      <p>Bramley starts from the opposite direction — a flow engine where business workflows are configuration, not code. The goal is for non-engineers to define a process and have the system enforce it, without a developer in the loop for every change.</p>
      <h3>Where it stands</h3>
      <p>Early days — architecture sketches informed directly by watching where an existing monolith creaks under real usage.</p>
    `,
  },
];
