const newFormHandler = async (event) => {
    event.preventDefault();
  
    const description = document.querySelector('#comment-desc').value.trim();
    const article_id = document.querySelector('#article-id').value;
  
    if (description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ description, article_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // document.location.replace(`/article/${article_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/article');
      } else {
        alert('Failed to delete comment');
      }
    }
  };
  
  const form = document
    .querySelector('.new-comment-form')
    if (form) {
      form.addEventListener('submit', newFormHandler);
    };  
  
  const removeIt = document
    .querySelector('.comment-list')
    if(removeIt) {
      removeIt.addEventListener('click', delButtonHandler);
    }