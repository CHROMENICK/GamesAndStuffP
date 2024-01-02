document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
      name: "Idle Breakout",
      link: "https://www.coolmathgames.com/0-idle-breakout/play",
      image: "/assets/icons/IdleBreakout.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Bike Hero",
      link: "https://www.coolmathgames.com/0-bike-hero/play",
      image: "/assets/icons/BikeHero.png",
      categories: ['all'],
      error: false
    },
    // Add more apps here as needed
  ];

  function renderApps() {
    const appsContainer = document.querySelector('.apps-container');

    appsList.forEach(app => {
      const columnDiv = document.createElement('div');
      columnDiv.classList.add('column');
      columnDiv.setAttribute('data-category', app.categories.join(' '));

      const link = document.createElement('a');
      link.href = app.link;

      const image = document.createElement('img');
      image.src = app.image;
      image.alt = app.name;
      image.width = 145;
      image.height = 145;
      image.loading = "lazy";

      const paragraph = document.createElement('p');
      paragraph.textContent = app.name;

      link.appendChild(image);
      link.appendChild(paragraph);
      columnDiv.appendChild(link);

      appsContainer.appendChild(columnDiv);
    });
  }

  renderApps();
});
