$('.single-item').slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1
    
  });
  document.querySelectorAll('accordion_title').forEach((item)=> 
  item.addEventListener('click', ()=>{

    const parent = item.parentNode;
    parent.classList.toggle('accordion_title--active');
  })
  )

//  $(document).ready(function(){
//   $('.accordion_title').click(function(){
//     $(this).next('accordion_content').slidesToggle();
//   });
//  });