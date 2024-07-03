# dropdown-menu-sm

 This package provides a simple dropdown menu developed in JavaScript.

 ## Setup

 To install the package via npm, run this command in terminal:

 ```bash
 npm install dropdown-menu-sm
 ```

 ## Use
 To create the dropdown menu in your HTML file:
```bash
 <!-- Example usage -->
 <button id="dropdownButton">Open Menu</button>

 <ul id="dropdownMenu" style="display: none;">
   <li><a href="#">Option 1</a></li>
   <li><a href="#">Option 2</a></li>
   <li><a href="#">Option 3</a></li>
 </ul>

 <script src="node_modules/dropdown-menu-sm/dist/dropdown-menu-sm.min.js"></script>
 <script>
   //Enable dropdown menu using JavaScript
   const dropdownButton = document.getElementById('dropdownButton');
   const dropdownMenu = document.getElementById('dropdownMenu');

   dropdownButton.addEventListener('click', () => {
     dropdownMenu.style.display = dropdownMenu.style.display === 'none' ?  'block' : 'none';
   });
 </script>
 ```
 ## Contribute
 If you would like to contribute to this project, please check out the GitHub repository: GitHub Repository

 ## Communication
 Semih Mert - semihmert.dev@gmail.com