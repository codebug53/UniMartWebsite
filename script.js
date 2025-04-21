const backendURL = 'https://your-backend-url.onrender.com';

async function loadItems() {
  try {
    const res = await fetch(`${backendURL}/items`);
    const items = await res.json();

    const container = document.getElementById('items-container');
    container.innerHTML = '';
    items.forEach(item => {
      container.innerHTML += `
        <div class="item-card">
          <h3>${item.name}</h3>
          <p><strong>Shop:</strong> ${item.shop_name}</p>
          <p><strong>Price:</strong> Rs. ${item.price}</p>
          <button onclick="bookItem('${item.id}')">Book Now</button>
        </div>
      `;
    });
  } catch (error) {
    console.error('Failed to load items:', error);
  }
}

async function bookItem(itemId) {
  try {
    const res = await fetch(`${backendURL}/book`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemId, user_id: 'U001' })
    });

    if (res.ok) {
      alert('Booking confirmed!');
    } else {
      alert('Booking failed.');
    }
  } catch (error) {
    alert('Error while booking.');
    console.error(error);
  }
}

window.addEventListener('load', () => {
  setTimeout(() => {
    const splashScreen = document.getElementById('splash');
    splashScreen.style.transition = 'opacity 1s ease';
    splashScreen.style.opacity = 0;
    splashScreen.style.visibility = 'hidden';

    const loginBtn = document.getElementById('Login-btn');
    if (loginBtn) loginBtn.style.display = 'block';

    setTimeout(() => {
      document.getElementById('main-content').classList.remove('hidden');
      loadItems();
    }, 1000);
  }, 2200);
});

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('Login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      window.location.href = 'login/login.html'; // Fixed path
    });
  }
});
