import './App.css';
import logo from './img/unnamed.png'
import React from 'react';
import ReactApexChart from 'react-apexcharts';

function App() {

  const [firstOption, setFirstOption] = React.useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  })
  const [firstSerie, setFirstSerie] = React.useState([{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }])
  const [SecondOption, setSecondOption] = React.useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  })
  const [ThirthSerie, setThirthSerie] = React.useState([{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }])
  const [ThirthOption, setThirthOption] = React.useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  })
  const [SecondSerie, setSecondSerie] = React.useState([{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }])

  React.useEffect(() => {
    var options = {
      colors: ['#c2e4ff', '#54a0de', '#b2d97c'],
      chart: {
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Norte', 'Nordeste', 'Sul', 'Sudeste', 'Centro-Oeste'],
      },
      yaxis: {
        title: {
          text: 'Casos'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " casos"
          }
        }
      },
      toolbar: {
        show: false,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false
        },
      }
    };

    var series = [{
      name: 'Zika',
      data: [444, 445, 537, 561, 611]
    }, {
      name: 'Malária',
      data: [746, 585, 101, 938, 827]
    }, {
      name: 'Dengue',
      data: [355, 431, 368, 261, 451]
    }]

    setFirstOption(options)
    setFirstSerie(series)

    var series1 = [{
      name: 'Zika',
      data: [31, 40, 28, 51, 42]
    }, {
      name: 'Malária',
      data: [11, 32, 45, 32, 34]
    }, {
      name: 'Dengue',
      data: [12, 53, 12, 14, 23]
    }]

    var options1 = {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#A2D5FF', '#1C74BB', '#8AD424']
        }
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'text',
        categories: ['Norte', 'Nordeste', 'Sul', 'Sudeste', 'Centro-Oeste']
      },
      yaxis: {
        title: {
          text: 'Óbitos'
        }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " casos"
          }
        }
      },
      toolbar: {
        show: false,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false
        },
      },
      colors: ['#A2D5FF', '#1C74BB', '#8AD424']

    }

    setSecondSerie(series1)
    setSecondOption(options1)

    let series2 = [8008, 4202, 2200, 582, 325]
    let options2 = {
      colors: ['#c2e4ff','#cbffc4', '#54a0de', '#b2d97c', '#b5ffde'],
      chart: {
        width: 380,
        type: 'pie',
      },
      legend: {
        position: 'bottom'
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " casos somados"
          }
        }
      },
      labels: ['Extrema Baixa', 'Baixa', 'Média', 'Média Alta', 'Alta'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }

    setThirthOption(options2)
    setThirthSerie(series2)

  }, [])

  function changeColor(i) {

    let id = document.getElementById(`id${i}`)

    doencas.map((value, i)=> {
      let idbutton = document.getElementById(`id${i}`)

      if(idbutton !== id){
        idbutton.classList.remove('enabled')
      }

      id.classList.add('enabled')
    })

  }

  let doencas = ['Zika', 'Malária', 'Dengue']

  return (
    <section className='body-dash'>
      <section className='side-bar'>
        <div className='content-side-bar'>
          <img src={logo} alt='logo' />
        </div>
      </section>

      <section className='content-dashboard'>

        <div className='content-total'>
          <div className='title-dash'>
            <h1>HealthCare</h1>
            <h3>Monitoramento da zika, malária e dengue</h3>
          </div>
          <div className='div-contentoal'>
            <h1>Zika</h1>
            <p>12.456 casos</p>
          </div>
          <div className='div-contentoal'>
            <h1>Malária</h1>
            <p>19.456 casos</p>
          </div>
          <div className='div-contentoal'>
            <h1>Dengue</h1>
            <p>9.456 casos</p>
          </div>
        </div>

        <div className='firstGraph'>
          <h1>Região x Óbitos</h1>
          <ReactApexChart options={SecondOption} series={SecondSerie} type="area" height={'80%'} width={'100%'} />
        </div>
        <div className='container-graphs'>

          <div className='thirthGraph'>
            <h1>Classe Social x Casos</h1>
            <ReactApexChart options={ThirthOption} series={ThirthSerie} type="pie" width={'100%'} height={'90%'} />
          </div>
          <div className='secondGraph'>
            <h1>Casos x Regiões</h1>
            <ReactApexChart options={firstOption} series={firstSerie} type="bar" height={'80%'} width={'100%'} />
          </div>
        </div>

      </section>
      <div className='container-cadastro'>

        <h1>Novos Casos +</h1>

        <div className='row-to-select'>
          <h2>Doença</h2>
          <div>
            {
              doencas.map((value, i) => {
                return (
                  <button onClick={()=> changeColor(i)} id={`id${i}`}>{value}</button>
                )
              })
            }
          </div>
        </div>
        <div className='row-to-select'>
          <h2>Idade</h2>
          <input type='text' placeholder='Digite a idade' />
        </div>
        <div className='row-to-select'>
          <h2>Região</h2>
          <select>
            <option>Selecione uma Região</option>
            <option>Norte</option>
            <option>Nordeste</option>
            <option>Centro-Oeste</option>
            <option>Sudeste</option>
            <option>Sul</option>
          </select>
        </div>
        <div className='row-to-select'>
          <h2>Classe Social</h2>
          <select>
            <option>Selecione uma Classe Social</option>
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
        </div>
        <div className='row-to-select'>
          <h2>Gênero</h2>
          <select>
            <option>Selecione um Gênero</option>
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
        </div>

        <button className='button-cadastro'>Cadastrar</button>


      </div>
    </section>
  );
}

export default App;
