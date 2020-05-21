 // varables

 const popUpContent = document.querySelector('.popup-content');
 const popup = document.querySelector('.popup');
 const close = document.querySelector('.close');
 const left = document.querySelector('.left');
 const right = document.querySelector('.right');
 const images = document.querySelectorAll('.img-responsive');

 // images container arr

 let arrImg = [
   'miniImg/image-6.png',
   'miniImg/image-7.png',
   'miniImg/image-8.png',
   'miniImg/image-9.png',
 ];

 // add popup after click on img

 images.forEach((img) => {
   img.addEventListener('click', (e) => {
     e.preventDefault();
     popUpContent.classList.add('visible');

     let imgSrc = e.target.src;

     console.log(e.target.dataset.index);

     let popSrc = popUpContent.querySelector('.img-popup');

     popSrc.src = imgSrc;
   });
 });

 // close poput and remove visible class

 close.addEventListener('click', () => {
   popUpContent.classList.remove('visible');
 });

 let idx = 0;

 // go slider right

 right.addEventListener('click', (e) => {
   let popSrc = popUpContent.querySelector('.img-popup');

   idx++;

   if (idx >= arrImg.length) {
     idx = 0;
   } else {
     popSrc.src = `miniImg/image-${idx}.png`;
   }
 });

 // go slider left

 left.addEventListener('click', (e) => {
   let popSrc = popUpContent.querySelector('.img-popup');

   if (idx === 0) {
     idx = arrImg.length;
   } else {
     idx--;
     popSrc.src = `miniImg/image-${idx}.png`;
   }
 });