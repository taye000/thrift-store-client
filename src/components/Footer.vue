<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-top">
          <p>&copy; 2024 ThriftStoreKe. All rights reserved.</p>
          <ul class="footer-links">
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <p>Connect with us:</p>
          <ul class="social-links">
            <li><a href="https://facebook.com/thriftstoreke" target="_blank" class="social-icon facebook"></a></li>
            <li><a href="https://instagram.com/thriftstoreke" target="_blank" class="social-icon instagram"></a></li>
            <li><a href="https://twitter.com/thriftstoreke" target="_blank" class="social-icon twitter"></a></li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style scoped>
  /* Reset default margin and padding */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
  }
  
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  }
  
  /* Footer Styling */
  .footer {
    background-color: #2c3e50;
    color: white;
    padding: 3rem 1.5rem;
    text-align: center;
    position: relative; /* Make sure it's positioned normally */
    bottom: 0;
    width: 100%;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-top {
    margin-bottom: 2rem;
  }
  
  .footer-top p {
    font-size: 1.1rem;
    margin: 0;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .footer-links a {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: #f39c12;
  }
  
  .footer-social {
    margin-top: 1.5rem;
  }
  
  .footer-social p {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }
  
  .social-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  
  /* Social icon styling */
  .social-icon {
    width: 32px;
    height: 32px;
    display: block;
    border-radius: 50%;
    background-color: #ecf0f1;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .social-icon.facebook {
    background-image: url('https://img.icons8.com/?size=100&id=118497&format=png&color=000000');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .social-icon.instagram {
    background-image: url('https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .social-icon.twitter {
    background-image: url('https://img.icons8.com/?size=100&id=13963&format=png&color=000000');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .social-icon:hover {
    background-color: #f39c12;
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    .footer {
      padding: 2rem 1rem;
    }
  
    .footer-top p {
      font-size: 1rem;
    }
  
    .footer-links a {
      font-size: 0.9rem;
    }
  
    .social-links {
      gap: 1rem;
    }
  }
  </style>
  