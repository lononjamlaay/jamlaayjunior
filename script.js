// Efek Mengetik
new TypeIt("#typing", {
  speed: 60,
  loop: true
})
  .type("Hello Welcome to My World of Code & Creativity")
  .pause(1000)
  .delete()
  .type("I am Lenon, a Developer and Programmer")
  .pause(1000)
  .delete()
  .type("Welcome to my portofolio")
  .pause(1000)
  .delete()
  .go();

// Mode Terang/Gelap
document.getElementById('toggle-mode').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
