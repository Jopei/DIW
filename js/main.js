jQuery(document).ready(function ($) {

  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  };
  var form = document.querySelector("#ask");
  form.addEventListener("click", function (fun) {
    let maxelem = 0;
    fun.preventDefault();
    let name = document.querySelector("#inputText");
    let value = name.value;
    var Text = `https://api.github.com/search/users?q=${value}`;
    document.getElementById("inputText").value = ""
    maxelem = 1;
    if (maxelem === 1) {
      var serch = new XMLHttpRequest;
      serch.onload = search;
      serch.erro = erro;
      serch.open('GET', `${Text}`);
      serch.send();
    }
  });

  let btns = $("#servicos .button-group button");

  btns.click(function (e) {
    $("#servicos .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#servicos .grid").isotope({
      filter: selector,
    });
  });

  $(window).on("load", function () {
    $("#servicos .grid").isotope({
      filter: "*",
    });
  });


  $(".grid .popup-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
      tPrev: "Anterior",
      tNext: "Próxima",
      tCounter: "%curr% de %total%",
    },
  });
  function search() {
    let obj = (JSON.parse(this.responseText));
    let Text = '';
    for (let i in obj.items) {
      if (i < 4) {
        if (obj.items != undefined) {
          Text = Text + `
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 box-noticia" id="center">
                    <div class="card">
                        <img src="${obj.items[i].avatar_url}" class="card-img-top" alt="Imagem">
        
                        <div class="card-body">
                            <h5 class="card-title">${obj.items[i].login}</h5>
                            <a href="${obj.items[i].html_url}" target="_blank" class="btn btn-primary" id="text-center">Perfil</a>
                        </div>
                    </div>
                </div>`;
          document.getElementById("Ruser").innerHTML = Text;
        }
      } else {
        break;
      }
    }
  
  }
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});


