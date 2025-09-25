$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //  toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400, 600, 200, 20, "blue");
    createPlatform(500, 200, 250, 60, "yellow");
    createPlatform(800, 700, 350, 80, "pink");
    createPlatform(800, 500, 200, 50, "purple");
    createPlatform(1100, 400, 140, 30, "black");
    createPlatform(800, 300, 50, 60, "green");
    createPlatform(900, 350, 20, 40, "orange");


    // TODO 3 - Create Collectables
    createCollectable("max", 420, 60, 1.7, 0.7);
    createCollectable("kennedi", 800, 70, 2.0, 1.0);
    createCollectable("grace", 1100, 40, 3.0, 1.0);
    createCollectable("steve", 350, 50);
    createCollectable("diamond", 1160, 700);
    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 450);
    createCannon("left", 310, 1050);
    createCannon("right", 100, 500);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
