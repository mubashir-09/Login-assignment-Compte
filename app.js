function onSubmit(){
    console.log('click')
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value 
    console.log(email,pass)
    if(!email || !pass ){
      alert('Required Fields Are Missing')

    }

    if (email === 'mubashirkhan123@gmail.com' && pass === 'mk321') {
      alert('Login Successfully')
      window.location.href = './home.html'
    }else{
      alert('invalid email and password')
    }

    }



    document.querySelector('.menu-toggle').addEventListener('click', function() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
  });
  