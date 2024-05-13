$(document).ready(function () {
  $('header button').click(function () {
    $('form').slideDown();
  });

  $('#botao-cancelar').click(function () {
    $('form').slideUp();
  });

  $('form').on('submit', function (event) {
    event.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li></li>');
    $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagame em tamanho real">Ver imagem em tamanho real</a>
    </div>`
    ).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(10000);
    $('#endereco-imagem-nova').val('');
  });
});