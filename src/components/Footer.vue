<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 ThriftStoreKe. All rights reserved.</p>
        <ul class="footer-links">
          <li><a href="/faq">FAQs</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #164f87;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-top: 2rem;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .footer-links a {
    color: #f1c40f;
    text-decoration: none;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
  </style>
  