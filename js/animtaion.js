function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('animationMedia');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.mediaPage, .aboutWrapper, .link');
  
  for (let elm of elements) {
    observer.observe(elm);
  }