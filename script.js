// Sample blog post data
let posts = [];
  
  // Function to generate the HTML for blog posts
  function generatePostsHTML() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
  
    posts.forEach((post) => {
      const postElement = document.createElement('article');
      postElement.classList.add('post');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = post.title;
  
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
  
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
  
      postsContainer.appendChild(postElement);
    });
  }
  
  // Function to handle the form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const titleInput = document.getElementById('post-title');
    const contentInput = document.getElementById('post-content');
  
    const title = titleInput.value;
    const content = contentInput.value;
  
    if (title && content) {
      const newPost = {
        title: title,
        content: content
      };
  
      posts.push(newPost);
      generatePostsHTML();
  
      // Clear the form inputs
      titleInput.value = '';
      contentInput.value = '';
    }
  }
  
  // Event listener for form submission
  const form = document.getElementById('post-form');
  form.addEventListener('submit', handleFormSubmit);
  
  // Initial generation of blog posts HTML
  generatePostsHTML();
  