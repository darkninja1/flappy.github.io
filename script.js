// Background scrolling speed
move_speed = 4;
    
// Gravity constant value
gravity = 0.4;
    
// Getting reference to the bird element
let bird = document.querySelector('.bird');
    
// Getting bird element properties
let bird_props = bird.getBoundingClientRect();
let background =
    document.querySelector('.background')
            .getBoundingClientRect();
    
// Getting reference to the score element
let score_val =
    document.querySelector('.score_val');
let message =
    document.querySelector('.message');
let score_title =
    document.querySelector('.score_title');
bob = 0
// Setting initial game state to start
let game_state = 'Start';
document.body.addEventListener('click', (e) => {
  if (game_state != 'Play') {
    document.querySelectorAll('.pipe_sprite')
              .forEach((e) => {
      e.remove();
    });
    bird.style.top = '40vh';
    game_state = 'Play';
    message.innerHTML = '';
    score_title.innerHTML = 'Score : ';
    score_val.innerHTML = '0';
    play();
    document.getElementById('music').play();
  }
});
// Add an eventlistener for key presses
document.addEventListener('keydown', (e) => {
    
  // Start the game if enter key is pressed
 

  if (e.key == 'Enter' &&
      game_state != 'Play' || e.key == 'ArrowUp' &&
      game_state != 'Play' || e.key == ' ' &&
      game_state != 'Play') {
    document.querySelectorAll('.pipe_sprite')
              .forEach((e) => {
      e.remove();
    });
    bird.style.top = '40vh';
    game_state = 'Play';
    message.innerHTML = '';
    score_title.innerHTML = 'Score : ';
    score_val.innerHTML = '0';
    play();
    document.getElementById('music').play();
  }
}); 
function play() {
  function move() {
      
    // Detect if game has ended
    if (game_state != 'Play') return;
      
    // Getting reference to all the pipe elements
    let pipe_sprite = document.querySelectorAll('.pipe_sprite');
    pipe_sprite.forEach((element) => {
        
      let pipe_sprite_props = element.getBoundingClientRect();
      bird_props = bird.getBoundingClientRect();
        
      // Delete the pipes if they have moved out
      // of the screen hence saving memory
      if (pipe_sprite_props.right <= 0) {
        element.remove();
      } else {
        // Collision detection with bird and pipes
        if (
          bird_props.left < pipe_sprite_props.left +
          pipe_sprite_props.width &&
          bird_props.left +
          bird_props.width > pipe_sprite_props.left &&
          bird_props.top < pipe_sprite_props.top +
          pipe_sprite_props.height &&
          bird_props.top +
          bird_props.height > pipe_sprite_props.top
        ) {
            
          // Change game state and end the game
          // if collision occurs
          game_state = 'End';
          message.innerHTML = 'Game Over';
          message.style.left = '28vw';
          document.getElementById('music').pause();
          document.getElementById('btn').style.display = "block";
          if (bob >= 100) {
            document.getElementById('hidden123').style.display = 'block';
            document.getElementById('music2').pause();
          }
        } else {
          // Increase the score if player
          // has the successfully dodged the 
          if (
            pipe_sprite_props.right < bird_props.left &&
            pipe_sprite_props.right + 
            move_speed >= bird_props.left &&
            element.increase_score == '1'
          ) {
            score_val.innerHTML = +score_val.innerHTML + 1;
            bob = bob + 1
            
            if (bob == 10) {
              document.getElementById('ding').play();
              move_speed = 5;
            }
            else if (bob == 20) {
              var back = document.getElementById('back');
              back.style.backgroundImage = "url('img2/forest.jpeg')";
              document.getElementById('ding').play();
              move_speed = 6;
            }
            else if (bob == 30) {
              var back = document.getElementById('back');
              back.style.backgroundImage = "url('img2/forest2.jpeg')";
              //document.getElementsByClassName('pipe_sprite').style.backgroundImage = "linear-gradient(to right,brown,rgb(90, 165, 90),brown);";
              document.getElementById('ding').play();
              move_speed = 7;
            }
            else if (bob == 40) {
              var back = document.getElementById('back');
              //document.getElementsByClassName('pipe_sprite').style.backgroundImage = "linear-gradient(to right,green,rgb(90, 165, 90),green);";
              back.style.backgroundImage = "url('img/clouds.jpg')";
              document.getElementById('ding').play();
              move_speed = 8;
            }
            else if (bob == 50) {
              var back = document.getElementById('back');
              back.style.backgroundImage = "url('img/nasa004.jpg')";
              document.getElementById('ding').play();
              move_speed = 10;
            }
            else if (bob == 60) {
              var back = document.getElementById('back');
              document.getElementById('ding').play();
              move_speed = 11;
            }
            else if (bob == 70) {
              var back = document.getElementById('back');
              back.style.backgroundImage = "url('new/galaxy.jpg')";
              document.getElementById('ding').play();
              move_speed = 12;
              var all = document.getElementsByClassName('pipe_sprite');
              for (var i = 0; i < all.length; i++) {
                all[i].style.backgroundImage = 'linear-gradient(to right,rgb(166, 166, 166),white,rgb(166, 166, 166))';
              }
            }
            else if (bob == 80) {
              var back = document.getElementById('back');
              document.getElementById('ding').play();
              move_speed = 15;
            }
            else if (bob == 90) {
              var back = document.getElementById('back');
              back.style.backgroundImage = "url('new/north.jpg')";
              document.getElementById('ding').play();
              move_speed = 18;
            }
            else if (bob == 100) {
              var back = document.getElementById('back');
              back.style.backgroundImage = "url('new/moon.jpg')";
              document.getElementById('ding').play();
              document.getElementById('music').pause();
              document.getElementById('music2').play();
              move_speed = 20;
            }
            else if (bob == 110) {
              var back = document.getElementById('back');
              document.getElementById('ding').play();
              move_speed = 25;
              //gravity = 0.7;
            }
            else if (bob == 120) {
              var back = document.getElementById('back');
              document.getElementById('ding').play();
              move_speed = 30;
            }
            else if (bob == 130) {
              var back = document.getElementById('back');
              document.getElementById('ding').play();
              back.style.backgroundImage = "url('new/lep.jpg')";
              move_speed = 35;
            }
            else if (bob == 140) {
              var back = document.getElementById('back');
              document.getElementById('ding').play();
              move_speed = 40;
            }
            else if (bob == 150) {
              var back = document.getElementById('back');
              document.getElementById('ding').play();
              back.style.backgroundImage = "url('new/bit.jpeg')";
              move_speed = 50;
            }
          }
          element.style.left = 
            pipe_sprite_props.left - move_speed + 'px';
        }
      }
    });
  
    requestAnimationFrame(move);
  }
  requestAnimationFrame(move);
  
  let bird_dy = 0;
  function apply_gravity() {
    if (game_state != 'Play') return;
    bird_dy = bird_dy + gravity;
    document.body.addEventListener('click', (e) => {
        bird_dy = -7.6;
    });
    document.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp' || e.key == ' ') {
        bird_dy = -7.6;
      }
    });
  
    // Collision detection with bird and
    // window top and bottom
  
    if (bird_props.top <= 0 ||
        bird_props.bottom >= background.bottom) {
      game_state = 'End';
      message.innerHTML = 'Game Over';
      message.style.left = '28vw';
      document.getElementById('music').pause();document.getElementById('btn').style.display = "block";
      if (bob >= 100) {
        document.getElementById('hidden123').style.display = 'block';
        document.getElementById('music2').pause();
      }
    }
    bird.style.top = bird_props.top + bird_dy + 'px';
    bird_props = bird.getBoundingClientRect();
    requestAnimationFrame(apply_gravity);
  }
  requestAnimationFrame(apply_gravity);
  
  let pipe_seperation = 0;
    
  // Constant value for the gap between two pipes
  let pipe_gap = 35;
  function create_pipe() {
    if (game_state != 'Play') return;
      
    // Create another set of pipes
    // if distance between two pipe has exceeded
    // a predefined value
    if (pipe_seperation > 115) {
      pipe_seperation = 0
        
      // Calculate random position of pipes on y axis
      let pipe_posi = Math.floor(Math.random() * 43) + 8;
      let pipe_sprite_inv = document.createElement('div');
      pipe_sprite_inv.className = 'pipe_sprite';
      pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
      pipe_sprite_inv.style.left = '100vw';
        
      // Append the created pipe element in DOM
      document.body.appendChild(pipe_sprite_inv);
      let pipe_sprite = document.createElement('div');
      pipe_sprite.className = 'pipe_sprite';
      pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
      pipe_sprite.style.left = '100vw';
      pipe_sprite.increase_score = '1';
        
      // Append the created pipe element in DOM
      document.body.appendChild(pipe_sprite);
    }
    pipe_seperation++;
    requestAnimationFrame(create_pipe);
  }
  requestAnimationFrame(create_pipe);
}
