function getClima(){
    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=b3723fc5eff46b854b5e797656d48578',
        dataType: 'json',
        success: function(data){
            
           // var tempFormatada=temperatura.toFixed(2).split('.');
            
          temperatura = data.main.temp - 273;
          $('#temperatura').html(temperatura+"º");
          $('#umidade').html(data.main.humidity);
          $('#pressao').html(data.main.pressure);
          $('#tempMax').html(data.main.temp_max);
          $('#tempMin').hmtl(data.main.temp_min);
          $('#velocidade').hmtl(data.wind_speed);
          
          
          descricao = traduzirDescricao(data.weather[0].description);
          $('#situacao').html(descricao);
          
        },
        error: function (argument){
            alert('falha ao obter dados!');
        }
    });
}

function traduzirDescricao(descricao){
    descricaoTraduzida="";
    
    if(descricao=="clear sky"){
        descricaoTraduzida= "céu limpo";
    } else if (descricao =="few cluds"){
        descricaoTraduzida = "Poucas nuvens";
    } else if (descricao =="scattered clouds"){
        descricaoTraduzida = "nuvens dispersas";
    } else if (descricao =="broken clouds"){
        descricaoTraduzida = "Sol entre Nuvens";
    }else if (descricao =="shower rain"){
        descricaoTraduzida = " pouca Chuva";
    }
    else if (descricao ==" rain"){
        descricaoTraduzida = "Chuva";
    } else if (descricao =="thunderstorm"){
        descricaoTraduzida = "Tempestade";
    } else if (descricao =="snow"){
        descricaoTraduzida = "Neve";
    }else if (descricao ==" mist"){
        descricaoTraduzida = "Névoa";
    }
    return descricaoTraduzida;
}

window.onload = function (){
    getClima();
};