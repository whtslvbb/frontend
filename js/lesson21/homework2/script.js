$(document).ready(() => {
  console.log($('#s1').text());
  console.log($('.s2').text());
  console.log($('#second i').text());
  console.log($('[title]').text());
  console.log($('[target="_blank"]').text());
  console.log($('.extra').eq(1).text()); 
  const sentence = `${$('#s1').text()} ${$('.s2').text()} ${$('#second i').text()} ${$('[title]').text()} ${$('[target="_blank"]').text()} ${$('.extra').eq(1).text()} `
  alert(sentence)
})