$(document).on('click', '#BuscaInfos', function(e){
  $.ajax({
    type: "post",
    url: "/BuscaInfos",
    beforeSend: function (data){
      $('#InfosBuscadas').append(`<p>Carregando...</p>`)
    },
    success: function (response) {
      $('#InfosBuscadas').html(``)
      $('#InfosBuscadas').append(`<p>${response}</p>`)

      $.ajax({
        type: 'post',
        url: '/InsereBanco',
        data: {texto: response},
        success: function (response) {
          alert('Enviou para o banco!')
        }
      })
    }
  });
})