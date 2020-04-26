
 const bar = {
    labels: ['TRANGOREX', 'DOLQUINE', 'TRANKIMAZIN', 'TRANKIMAZIN RETARD', 'MAXALT MAX', 'PARACETAMOL CINFA EFG', 'ADOFEN', 'NITRODERM TTS', 'DOLOCATIL CODEINA', 'ELECOR', ''],

    datasets: [
      {
        label: 'Number of pharmacies without stock of a specific medicine from 2020-03-23 to 2020-03-29',
        backgroundColor: '#0A7AA360',
        borderColor: '#0A7AA3',
        borderWidth: 1,
        hoverBackgroundColor: '#0A7AA3',
        hoverBorderColor: '#0A7AA3',
        data: [3205, 2846, 2032, 2979, 1820, 1436, 1432, 1031, 1887, 1643, 0]
      }
    ]
  };
  const  MedicineStock = {
    values:[{'Medicine': 'TRANGOREX', 'nº Centers': 3205}, {'Medicine': 'DOLQUINE', 'nº Centers': 2846}, {'Medicine': 'TRANKIMAZIN', 'nº Centers': 2032}, {'Medicine': 'TRANKIMAZIN RETARD', 'nº Centers': 2979}, {'Medicine': 'MAXALT MAX', 'nº Centers': 1820}, {'Medicine': 'PARACETAMOL CINFA EFG', 'nº Centers': 1436}, {'Medicine': 'ADOFEN', 'nº Centers': 1432}, {'Medicine': 'NITRODERM TTS', 'nº Centers': 1031}, {'Medicine': 'DOLOCATIL CODEINA', 'nº Centers': 1887}, {'Medicine': 'ELECOR', 'nº Centers': 1643}],
    xField:'Medicine',
    yField:'nº Centers',
    xAxis:{
      label: {
        visible: false,
        autoRotate: true,
        autoHide: true
    }
    }
  }
  const ArticlesPerYear = {
  values:[{'year': '1970', 'value': 6}, {'year': '1971', 'value': 1}, {'year': '1972', 'value': 4}, {'year': '1973', 'value': 10}, {'year': '1974', 'value': 6}, {'year': '1975', 'value': 12}, {'year': '1976', 'value': 17}, {'year': '1977', 'value': 23}, {'year': '1978', 'value': 25}, {'year': '1979', 'value': 30}, {'year': '1980', 'value': 29}, {'year': '1981', 'value': 51}, {'year': '1982', 'value': 39}, {'year': '1983', 'value': 54}, {'year': '1984', 'value': 57}, {'year': '1985', 'value': 73}, {'year': '1986', 'value': 88}, {'year': '1987', 'value': 104}, {'year': '1988', 'value': 116}, {'year': '1989', 'value': 110}, {'year': '1990', 'value': 115}, {'year': '1991', 'value': 149}, {'year': '1992', 'value': 142}, {'year': '1993', 'value': 129}, {'year': '1994', 'value': 122}, {'year': '1995', 'value': 146}, {'year': '1996', 'value': 107}, {'year': '1997', 'value': 102}, {'year': '1998', 'value': 106}, {'year': '1999', 'value': 102}, {'year': '2000', 'value': 116}, {'year': '2001', 'value': 171}, {'year': '2002', 'value': 154}, {'year': '2003', 'value': 407}, {'year': '2004', 'value': 905}, {'year': '2005', 'value': 961}, {'year': '2006', 'value': 1079}, {'year': '2007', 'value': 1163}, {'year': '2008', 'value': 1318}, {'year': '2009', 'value': 1492}, {'year': '2010', 'value': 1573}, {'year': '2011', 'value': 1764}, {'year': '2012', 'value': 1859}, {'year': '2013', 'value': 2071}, {'year': '2014', 'value': 2232}, {'year': '2015', 'value': 2438}, {'year': '2016', 'value': 2588}, {'year': '2017', 'value': 2592}, {'year': '2018', 'value': 2822}, {'year': '2019', 'value': 2919}, {'year': '2020', 'value': 2478}],
  xField:'year',
  yField:'value',
  xAxis:{
    type: 'time',
    tickCount: 20,
    mask: 'YYYY',        },
  }; 
const radar = {
    labels: ['Efecto1', 'Efecto2', 'Efecto3', 'Efecto4', 'Efecto5', 'Efecto6', 'Efecto7'],
    datasets: [
      {
        label: 'Medicamento 1',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'Medicamento 2',
        backgroundColor: '#0A7AA360',
        borderColor: '#60a5ff',
        pointBackgroundColor: '#60a5ff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#60a5ff',
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  }; const pie = {
    labels: [
        'Inglés',
        'Italiano',
        'Español'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
}; const donut = {
    labels: [
        'RDF',
        'PDF',
        'JSON',
        'CSV', 
        'TXT'
    ],
    datasets: [{
        data: [150,210,300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#acbea3',
        '#a2666f'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#acbea3',
        '#a2666f'
        ]
    }]
};
const List = {
  title:'Lopinavir + Ritonavir',
  items:[
    {
      title:'Active principie',
      description:'Lopinavir + Ritonavir'
    },{
      title:'ATC code',
      description:'J05AR10'
    },
    {
      title:'Trade name',
      description: 'KALETRA 100 mg/25 mg'
    },
    {
      title:'Trade name',
      description: 'LOPINAVIR/RITONAVIR ACCORD 200 MG/ 50 MG'
    },
    {
      title:'Trade name',
      description: 'LOPINAVIR/RITONAVIR RANBAXY 100 MG/25 MG'
    }           
  ]

}
const bubble = {
labels: ['January'],
datasets: [

  {
    label: 'Nombre comercial: KALETRA',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#ff003794',
    borderColor: 'rgba(75,192,192,1)',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#fa541c',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#fa541c',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [
            {x:15,y:50, r:35},
            {x:0, y:0, r:0},{x:0, y:100, r:0},{x:50, y:0, r:0}, {x:50, y:100, r:0}]
  },
  {
    label: 'Principio activo: LOPINAVIR',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(244, 77, 59, 0.6)',
    borderColor: 'rgba(75,192,192,1)',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [
            {x:15,y:75, r:55},
            {x:0, y:0, r:0},{x:0, y:100, r:0},{x:50, y:0, r:0}, {x:50, y:100, r:0}]
  },
  {
    label: 'Principio activo: RITONAVIR',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(147, 12, 196, 0.5)',
    borderColor: 'rgba(75,192,192,1)',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [
            {x:25,y:80, r:55},
            {x:0, y:0, r:0},{x:0, y:100, r:0},{x:50, y:0, r:0}, {x:50, y:100, r:0}]
  },
  {
    label: 'Grupo terapéutico: J05AR10',
    fill: false,
    lineTension: 0.1,
    backgroundColor: '#008f7ab3',
    borderColor: 'rgba(75,192,192,1)',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [
            {x:22,y:40, r:45,},
            {x:0, y:0, r:0},{x:0, y:100, r:0},{x:50, y:0, r:0}, {x:50, y:100, r:0}]
  },

]
};
const graph = {
    nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
};
const graphConfig = {
    node: {
        color: "lightgreen",
        size: 500,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};

const languages= [
  {
    info:{
      title1:'DRUGS4COVID',
      text1:'Estamos creando un catálogo de medicamentos que están siendo utilizados para combatir la COVID-19. Para ello, utilizamos la literatura científica sobre coronavirus existente (más de 60.000 artículos) y utilizamos técnicas de Inteligencia Artificial y Ciencia Ciudadana.',
      videoLink:'https://www.youtube.com/embed/uaaFqRV-NKU'
    },
    problems:{
      title0:'Problema',
      title1:'Las reservas de medicamentos en los servicios de farmacia de los hospitales se están agotando',
      text1:'Con el aumento del número de pacientes afectados por la COVID-19 e ingresados en las Unidades de Cuidados Intensivos en todo el mundo, se ha incrementado la demanda de los medicamentos necesarios para su tratamiento. A pesar de que muchos laboratorios han aumentado la producción, sigue habiendo problemas de suministro, como se puede comprobar en la Web de la Agencia Española de Medicamentos y Productos Sanitarios.\nDurante años, se ha generado una gran cantidad de literatura científica sobre coronavirus (ahora mismo, más de 60.000 artículos científicos), lo que es de gran ayuda para esta labor, pero a la vez hace difícil la exploración, máxime teniendo en cuenta que un mismo principio activo puede aparecer mencionado con más de un nombre comercial.',
      graph1:{
        title:'Farmacias sin Stock de cierto medicamento',
        subtitle:'Número de farmacias sin stock de un medicamento específico desde el 23/03/2020 hasta el 29/03/2020'
      }
    }, 
    resources:{
      title0:'Tanta información se convierte en un nuevo problema',
      title1:'CORD-19',
      text1:'Por tanto, esta gran riqueza de documentación científica supone al mismo tiempo un problema para encontrar lo que se busca, sobre todo en una situación en la que el tiempo con el que contamos es a veces tan corto.\nSi alguien quiere conocer la aplicación o uso de un medicamento en el tratamiento de la COVID-19 para un grupo específico de pacientes, o identificar las relaciones entre medicamentos descritos en un protocolo de actuación, debe navegar por este gran corpus de documentación donde los medicamentos aparecen mencionados con distintos nombres (principio activo, nombre comercial, grupo terapeútico, etc.). Además, en ocasiones la mención de un medicamento en un artículo científico nos proporciona información muy relevante sobre su posible utilización, pero en otros casos puede tratarse de una frase sin relevancia para nuestro objetivo, que es el de salvar vidas.',
      graph1:{
        title:'Artículos por año',
        subtitle:'Número de publicaciones desde 1976 hasta febrero de 2020',
      },
      graphtext1:'Muchas fuentes entre las que consultar.',
      graphtext2:'La nomenclatura de los medicamentos varía según el contexto.',
      title2:'Algunos datos:',
    },
    approach:{
      title0:'Nuestro Enfoque',
      text1:'¿Cómo funciona?',
      data:[
        {
            step:1,
            title:'Procesar', 
            content:'Procesar e indexar el corpus de publicaciones científicas, y todos sus párrafos.',
            source:'approach/file_searching.svg',
            info:{
              motivation:{
                title:'Motivación',
                text:'En este paso de nuestra metodología necesitamos facilitar el procesamiento automático de todas las publicaciones científicas disponibles en el corpus seleccionado (en nuestro caso, el CORD-19)'
              },
              problems:{
                title:'Problemas',
                text:'Afortunadamente, la información sobre todas las publicaciones de este corpus está disponible de manera abierta y sencilla, a través de varias colecciones de documentos comprimidas (formato GZ) y con un archivo con metainformación (formato CSV), que debemos tratar adecuadamente.'
              },
              hypothesis:{
                title:'Hipótesis',
                text:'Almacenar los artículos en repositorios orientados a documentos permitirá que puedan ser procesados y anotados automáticamente mediante su interfaz de acceso HTTP.'
              },
              methodology:{
                title:'Metodología',
                lists:[[
                  {type:'link', link:'https://pages.semanticscholar.org/coronavirus-research', text:'Descargar corpus CORD-19'},
                  {type:'value', text:'Descargar metadatos en formato CSV'},
                  {type:'value', text:"Descargar artículos de la colección 'Commercial use subset' (16763 artículos en formato JSON)"},
                  {type:'value', text:"Descargar artículos de la colección 'Non-commercial use subset ' (4228 artículos en formato JSON)"},
                  {type:'value', text:"Descargar artículos de la colección 'Custom license subset ' (19171 artículos en formato JSON)"},
                  {type:'value', text:"Descargar artículos de la colección 'bioRxiv/medRxiv subset' (500 artículos en formato JSON)"},
                  {type:'value', text:"Creación índice en Solr para almacenar los artículos"},
                  {type:'value', text:"Desarrollo código Python para lectura de artículos y registro en índice en Solr"},
                  {type:'value', text:"Segmentación de artículos en frases"},
                  {type:'value', text:"Creación índice en Solr para almacenar los frases"},
                  {type:'value', text:"Desarrollo código Python para extracción de frases a partir del texto de los artículos y registro en índice en Solr"},
                  {type:'value', text:"Creación de visualizaciones estadísticas para la exploración de los artículos"},

                ]]
              },
              results:{
                title:'Resultados',
                lists:[[
                  {type:'link', text:"Repositorio de documentos" , link:'http://librairy.linkeddata.es/data/#/covid/core-overview'},
                  {type:'link', text:"Repositorio de frases", link:'http://librairy.linkeddata.es/data/#/covid-sentences/core-overview'},
                  {type:'link', text:"Visualización Repositorio (código GIST 4f726911fd9908ffc3a46837b15d8011)", link:'https://librairy.linkeddata.es/data/dashboard'},
                  {type:'link', text:"Exploración guiada por artículos relacionados a partir de su contenido y sus anotaciones", link:'https://librairy.github.io/covid19/explorer.html'},
                  {type:'link', text:"Código de Python para el indexado", link:'https://github.com/librairy/covid19/blob/master/parallel-index-articles.py'},

                ]]
              },
              conclusions:{
                title:'Conclusiones',
                statistics:{
                  'Artículos Indexados':'33244',
                  'Frases Extraídas Automáticamente':'5298063'
                }
              }
            
            }
        }, 
        {
          step:2,
          title:'Clasificar', 
          content:'Anotar cada artículo y cada frase con la información procesada.',
          source:'approach/annotation.svg', 
          info:{
            motivation:{
              title:'Motivación',
              text:'Agrupar medicamentos relacionados en el tratamiento del COVID para poder utilizarlos en situaciones de desabastecimiento.'
            },
            problems:{
              title:'Problemas',
              text:'text',
              lists:[[
                {type:'value', text:'Procesamiento masivo de Artículos científicos'},
                {type:'value', text:'Identificación automática de medicamentos'},
                {type:'value', text:'Identificación automática de síntomas'},
                {type:'value', text:'Identificación automática de enfermedades'},
                {type:'value', text:'Identificación automática de trastornos'},

              ], {
                title:'Descubrimiento de relaciones:',
                data:[
                  {type:'value', text:'Medicamento vs Síntoma'},
                  {type:'value', text:'Medicamento vs Enfermedad'},
                  {type:'value', text:'Medicamento vs Trastorno'},
                ]
              }]

            },
            hypothesis:{
              title:'Hipótesis',
              text:'La caracterización de medicamentos mediante síntomas, enfermedades y trastornos extraídos automáticamente de la literatura científica permitirá agrupar aquellos que estén relacionados.'
            },
            methodology:{
              title:'Metodología',
              lists:[[
                {type:'link', text:'Creación servicio identificación medicamentos y códigos ATC', link:'http://librairy.github.io/bio-nlp'},
                {type:'value', text:'Desarrollo y ejecución de un anotador de enfermedades y medicamentos basado en modelos de identificación de entidades (NER). Anotación a dos niveles de profundidad: frase y artículo'},
                {type:'value', text:'Construcción de modelos de agrupamiento global y jerárquico a partir de las representaciones de los medicamentos obtenidas con las anotaciones.'},
              ], {
                title:'Evaluación de los resultados obtenidos:',
                data:[
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_2.png', text:'Para 100 Grupos (0.436208445103141)'},
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_3.png', text:'Para 110 Grupos (0.4494331459873356)'},
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_4.png', text:'Para 120 Grupos (0.4576435692957037)'},
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_5.png', text:'Para 130 Grupos (0.4553701275038375)'},
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_6.png', text:'Para 140 Grupos (0.46024923069398316)'}
                ]
              }]
            },
            results:{
              title:'Resultados',
              lists:[{
                title:'Anotaciones: 5.274.655 frases y 33.244 artículos',
                data:[
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_diseases_t', text:'Enfermedades (scipacy_diseases_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_problems_t', text:'Síntomas (annot_cliner_problems_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_treatments_t', text:'Trastornos (annot_cliner_treatments_t)'},
                  {type:'title', text:'Medicamentos:'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_chemicals_t', text:'sustancia química: (scispacy_chemicals_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc5_t', text:'principio activo (bionlp_atc5_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc4_t', text:'grupo terapeútico (bionlp_atc4_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc3_t', text:'grupo químico (bionlp_atc3_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc2_t', text:'grupo farmacológico (bionlp_atc2_t)'},
                  {type:'image', text:'',link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/annotations-donut2.png'}
                ]
              }, 
              {
                title:'Distribución de los medicamentos a partir de las anotaciones',
                data:[
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-bidimensional-latest.png', text:'En espacio bi-dimensional'},
                  {type:'image', link:'https://raw.githubusercontent.com/oeg-upm/drugs4covid19web/master/web/src/assets/approach/drugs-atc5-dendrogram-latest.png', text:'Por niveles'}
                  ]
              }]
            },
            conclusions:{
              title:'Conclusiones',
              lists:[[
                {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-cluster-latest.png',text:'Se han identificado 120 grupos de medicamentos de entre todos los mencionados en artículos publicados en CORD-19'},
                {type:'value', text:'A partir de un medicamento, ya sea desde su nombre comercial, grupo farmacológico, terapeútico o principio activo, se pueden sugerir medicamentos relacionados.'},
                {type:'value', text:'Se pueden realizar búsquedas basadas en enfermedades, síntomas, tratamientos o medicamentos de los artículos científicos publicados en CORD-19.'},
                {type:'link',caption:'(Los medicamentos que combinan la actividad inmunosupresora y antimalárica tienen el principio activo P01BA02; los antibióticos macrólidos pertenecen al grupo terapeútico J01FA)' , link:'https://librairy.linkeddata.es/solr/covid/select?fl=url_s%2C%20name_s%2C%20scispacy_diseases_t&q=labels4_t%3AJ01FA%20AND%20labels5_t%3AP01BA02', text:'Por ejemplo, responder a la siguiente pregunta: ¿se han usado medicamentos que combinan actividad inmunosupresora y antimalárica con antibióticos macrólidos? ¿En qué documentos se mencionan, y relacionados con qué enfermedades?'},
                {type:'image', link:'https://taiga.vencealvirus.software.imdea.org/media/attachments/7/4/2/c/88032427ea5df8abb15780aed503ade41f27500d1dbe735178f6f96e8986/diseaseschemicals-atcs2.png#_taiga-refresh=wiki_page:1361', text:'No todas las frases pertenecientes al corpus contienen entidades de relevancia, y en la gran mayoría solo aparece 1'},
                {type:'value', text:'No se detallan suficientes relaciones entre entidades a nivel de frase. Otras tareas adicionales como la identificación de correferencias para trabajar a nivel de párrafo y generación de nuevos modelos para el corpus específico se contemplan como líneas futuras'}
              ], {
                title:'Medicamentos relacionados con el Aciclovir (J05AB01) en este contexto',
                data:[
                  {type:'value', link:'', text:'ketamine (N01AX03)'},
                  {type:'value', link:'', text:'piperazine (P02CB01)'},
                  {type:'value', link:'', text:'acefylline piperazine (R03DA09)'},
                  {type:'value', link:'', text:'barium sulfate without suspending agents (V08BA02)'},
                  {type:'value', link:'', text:'barium sulfate with suspending agents (V08BA01)'},
                  {type:'value', link:'', text:'chlorhexidine (S01AX09, S03AA04, S02AA09, D09AA12, R02AA05, B05CA02, D08AC02, A01AB03)'},
                  {type:'value', link:'', text:'chlorhexidine, combinations (D08AC52)'},
                  {type:'value', link:'', text:'artesunate (P01BE03)'},
                  {type:'value', link:'', text:'artesunate and pyronaridine (P01BF06)'},
                  {type:'value', link:'', text:'amodiaquine (P01BA06)'}
                ]
              }]
            }
          
          }
        },
      {
        step:3,
        title:'Validar', 
        content:'Revisar estas anotaciones con la ayuda de científicos ciudadanos.',
        source:'approach/medical_research.svg', 
        info:{
          motivation:{
            title:'Motivación',
            text:'Validar las frases extraídas de los artículos que tratan sobre el COVID-19 por ciudadanos con formación y conocimientos en Ciencias de la Salud.'
          },
          problems:{
            title:'Problemas',
            text:'Las palabras clave relacionadas con la enfermedad (síntomas, medicamentos, enfermedades y tratamientos) pueden aparecer en las frases en diferente orden y con un significado distinto, por lo que es difícil una interpretación automática.'
          },
          hypothesis:{
            title:'Hipótesis',
            text:'El conocimiento e interpretación de los ciudadanos con formación y conocimientos en Ciencias de la Salud será clave para validar las frases extraídas de los artículos científicos que realiza el procesamiento automático.'
          },
          methodology:{
            title:'Metodología',
            lists:[[
              {type:'value', text:'Se construirá un experimento de ciencia ciudadana, a modo de aplicación web, que permita a los usuarios con formción y conocimientos en ciencias de la salud validar las frases extraídas por el sistema de Inteligencia Artificial.'},
              {type:'value', text:'Los datos de entrada del experimento serán las frases extraídas del procesamiento automático.'},
              {type:'value', text:'En cumplimiento de la GDPR, se informará al usuario sobre cómo se van a tratar sus datos personales, derecho a creación de perfiles automáticos y derecho al borrado cuando el usuario lo estime adecuado. Además, los datos permanecerán en servidores debidamente securizados.'},
              {type:'value', text:'Todos los datos en bruto ¿del experimento? se publicarán en abierto, anonimizando previamente el identificador del usuario.'}
            ],{
              title:'La aplicación permitirá:',
              data:[
              {type:'value', text:'Registrar usuarios y clasificarlos según perfil (médicos de familia, enfermeros, epidemiólogos, farmacéuticos, …). Dicha clasificación se realizará mediante la realización de un tutorial'},
              {type:'value', text:'Se mostrará al usuario una frase extraída del corpus y marcará en ella los síntomas, medicamentos y posibles tratamientos.'},
              {type:'value', text:'La aplicación registrará cada una de las palabras o grupos de palabras marcadas por los usuarios.'},
              {type:'value', text:'Los datos validados se enviarán a una API para su almacenamiento en una base de datos.'},
              {type:'value', text:'Se calculará un índice de confianza para cada usuario, basado en "gold standards" (tareas previamente validadas por los expertos).'},
              {type:'link', link:'https://oeg-upm.github.io/drugs4covid19-cs/', text:'Prueba aquí nuestro demo'}
            ]}

          ]
          },
          conclusions:{
            title:'Conclusión',
            lists:[[
              {type:'value', text:'Conjunto y clasificación de los medicamentos adecuados para la enfermedad.'},
              {type:'value', text:'Conjunto y clasificación de los síntomas de la enfermedad.'},
              {type:'value', text:'Relación síntomas-medicamentos extraídos de las frases.'},
              {type:'value', text:'Relación medicamento-medicamento.'},
              {type:'value', text:'Relación medicamento-enfermedad.'},

            ]]
          },
          results:{
          }
        
        }    
    },
    {
      step:4,
      title:'Publicar', 
      content:'Publicar un grafo de conocimientos con los datos que sean correctos.',
      source:'approach/kg.svg',
      info:{
        motivation:{
          title:'Motivación',
          text:"A partir del Corpus corpus CORD-19, un corpus actualizado de artículos científicos sobre COVID-19 se han generado varios repositorios orientados a documentos que pueden ser procesados y anotados automáticamente mediante su interfaz de acceso HTTP. El repositorio generado de frases de estos artículos contiene anotaciones acerca de enfermedades, síntomas y trastornos y tratamientos (códigos ATC) relacionados con el COVID-19. Actualmente existen diferentes repositorios de datos relacionados con estos aspectos que contienen una descripción detallada de atributos tales como todos los nombres con los que se conoce una medicina, efectos secundarios, entre otros. Se quiere entonces extender las anotaciones generadas inicialmente con aquellas generadas por este tipo de relaciones. Para que la información pueda ser explotada por tanto por personas vinculadas al ámbito sanitario como por el público en general, es necesario que las anotaciones estén alineadas a un vocabulario que describa este dominio del conocimiento. De esta manera, el repositorio original será transformado a un grafo de conocimiento (knowledge graph) mediante técnicas que trabajan con mappings (correspondencias) entre el repositorio de frases y el vocabulario desarrollado."
        },
        problems:{
          title:'Problemas',
          lists:[[
            {type:'value', text:'Silos de información'},
            {type:'value', text:'Fuentes de datos heterogéneas'},
            {type:'value', text:'Diversidad de formatos y métodos de consulta'},
            {type:'value', text:'Carencia de vocabularios consensuados'},
          ]]

        },
        hypothesis:{
          title:'Hipótesis',
          text:'Un punto de acceso único y unificado en forma de grafo permite recuperar información sobre los medicamentos y sus interacciones de forma más efectiva para los expertos.'
        },
        methodology:{
          title:'Metodología',
          lists:[[
            {type:'value', text:'Búsqueda y generación de fuentes de datos'},
            {type:'value', text:'Búsqueda de fuentes de conocimiento relacionadas a enfermedades, síntomas y trastornos, tratamientos.'},
            {type:'value', text:'Explorar otros repositorios semánticos que han sido generados a partir de información de COVID-19 para ver la posibilidad de relacionar los grafos de conocimiento.'},
            {type:'value', text:'Generación del vocabulario con reuso de ontologías asociadas a esas fuentes.'},
            {type:'value', text:'Documentación y publicación del vocabulario.'},
            {type:'value', text:'Mapeo de los datos al vocabulario.'},
            {type:'value', text:'Generación del grafo de conocimiento alineado con vocabulario.'},
            {type:'value', text:'Enriquecimiento del grafo con validaciones de expertos (ciencia ciudadana).'},
            {type:'value', text:'Publicación del grafo de conocimiento'}

          ]]
        },
        results:{
          title:'Resultados',
          lists:[[
            {type:'link', link:'https://w3id.org/def/DRUGS4COVID19', text:'Vocabulario'},
            {type:'link', link:'https://github.com/oeg-upm/drugs4covid19-kg', text:'Knowledge graph'},
            {type:'link', link:'http://librairy.linkeddata.es/sparql', text:'Punto de consulta'},
            {type:'link', link:"https://librairy.linkeddata.es/sparql?default-graph-uri=http%3A%2F%2Fdrugs4covid.com%2F542020&query=select+distinct+*+where+%7B%0D%0A%0D%0A%3Fs+a+%3Chttps%3A%2F%2Fw3id.org%2Fdef%2FDRUGS4COVID19%23Paper%3E.%0D%0A%3Fs+%3Chttps%3A%2F%2Fw3id.org%2Fdef%2FDRUGS4COVID19%2Fmenciona%3E+%3Fa+.%0D%0A%3Fa+%3Fp+%3Ft+.%0D%0A%0D%0A%7D+limit+10&should-sponge=&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+", text:'Ejemplo de consulta'},

          ]]
        },
        conclusions:{
          title:'Conclusiones',
          text:'Hemos integrado de forma estructurada la información sacada de las artículos científicos, sus anotaciones y además la hemos enriquecido con enlaces útiles para los expertos a fuentes externas. De esta manera, esta fuente de información única se puede utilizar para responder preguntas de forma rápida y sencilla.'
        }
      
      }    },
    ]
    },
    tools:{
      title0:'Apps powered by Drugs4Covid',
      title1:'D4C Search Engine',
      text1:'An open web service to exploit the existing scientific literature about coronavirus (more than 60,000 papers) identifying drugs, diseases and articles and displaying their relations inside the corpus. You can search by ATC code, Generic Name, Disease Name or MESH code.',
      title2:'D4C Knowled Graph Interface',
      text2:'A Knowledge Graph interface to run your own queries or run some examples of questions doctors and researchers might find useful.',
      title3:'D4C Query Builder',
      text3:'A simple interface to learn how to use the D4C Api and start to run your own experiments.',
      link1:'https://bio-nlp-dashboard.netlify.app/',
      link2:'https://bio-nlp-dashboard.netlify.app/KG',
      link3:'https://bio-nlp-dashboard.netlify.app/customsearch'


    },
    team:{
      title0:'¿Quiénes Somos?', 
      title1:'El Equipo', 
      title2:'Con la ayuda de:',
      logo1:'logos/oeg.jpg', 
      logo2:'logos/upm.png',
      logo3:'logos/FacInformatica.jpg'
    }
  },
  {
    info:{
      title1:'DRUGS4COVID',
      text1:'We are creating a catalogue of medicines that are being used to combat COVID-19. Using Artificial Intelligence techniques and Citizen Science, we exploit the existing scientific literature about coronavirus (more than 60,000 papers)',
      videoLink:'https://www.youtube.com/embed/uaaFqRV-NKU'
    },
    problems:{
      title0:'Problem',
      title1:'Drugs in hospital pharmacy services are running low',
      text1:'With the increase in the number of patients affected by COVID-19 and admitted to Intensive Care Units throughout the world, the demand for the medicines necessary for their treatment has increased. Laboratories have increased production. However, Drug Agencies worldwide confirm that there are problems related to the supply of some specific medicines.\nFor years, a large amount of scientific literature about coronavirus (currently, more than 60,000 scientific papers) has been generated. This is a great help for eveybody fighting against COVID-19, but at the same time such a large corpus is difficult to explore. Furthermore, the same active ingredient may be found in more than one trade name, what makes exploration of this corpus even more difficult for those who have to make quick informed decisions related to medicine use and supplies.',
      graph1:{
        title:'Pharmacies without stock of a medicine',
        subtitle:'Number of pharmacies in Spain without stock of a specific medicine from 2020-03-23 to 2020-03-29'
      }
    },
    resources:{
      title0:'So much information becomes problematic',
      title1:'CORD-19',
                  text1:'Therefore, the large amount of scientific documentation available becomes a problem on itself, especially in situations when decisions have to be made quickly.\nIf a person wants to know the application or use of a drug in the treatment of COVID-19 for a specific group of patients, or identify the relationships between drugs described in a protocol of action, they should navigate this large body of documentation where drugs are often mentioned with different names (active principle, trade name, therapeutic group, etc.). Furthermore, the mention of a medicine in a scientific paper may inform about its possible use, but sometimes it may be also inside a sentence or paragraph that has no relevance to our objective of saving lives.',
      title2:'Some Data:',
      graph1:{
        title:'Articles per year',
        subtitle:'Number of published articles from 1970 to February 2020.',
      },
      graphtext1:'Too many sources to consult.',
      graphtext2:'The name of the medicine depends on the context.',            
    },
    approach:{
      title0:'Our Approach',
      text1:'How does it work?',
      data:[
        {
            step:1,
            title:'Process', 
            content:'Process and index the corpus of scientific papers, and all of its paragraphs.',
            source:'approach/file_searching.svg', 
            info:{
              motivation:{
                title:'Motivation',
                text:'In this step of our methodology, we want to ease the automatic processing of all the scientific publications available in the corpus (in our case, CORD-19).'
              },
              problems:{
                title:'Problems',
                text:'Fortunately, the information about all the publications in this corpus is available openly, through several compressed collections of documents (GZ format) and a metadata file (CSV format), which we need to process adequately.'
              },
              hypothesis:{
                title:'Hypothesis',
                text:'Storing the papers in document oriented repositories will allow their automatic processing and annotation through an HTTP access interface.'
              },
              methodology:{
                title:'Methodology',
                lists:[[
                  {type:'link', link:'https://pages.semanticscholar.org/coronavirus-research', text:'Download CORD-19 corpus'},
                  {type:'value', text:'Download metadata in CSV'},
                  {type:'value', text:"Download papers from the collection “Commercial use subset” (16763 papers in JSON)"},
                  {type:'value', text:"Download papers from the collection “Non-commercial use subset” (4228 papers in JSON)"},
                  {type:'value', text:"Download papers from the collection “Custom license subset” (19171 papers in JSON)"},
                  {type:'value', text:"Download papers from “bioRxiv/medRxiv subset” (500 artículos en formato JSON)"},
                  {type:'value', text:"Creation of a Solr index to store the papers"},
                  {type:'value', text:"Development of a Python script for paper reading and registration in the Solr index"},
                  {type:'value', text:"Segmentation of papers in sentences"},
                  {type:'value', text:"Creation of a Solr index to store the sentences"},
                  {type:'value', text:"Development of a Python script to extract sentences from papers and registration in Solr index"},
                  {type:'value', text:"Creation of statistical visualisations for paper exploration"},

                ]]
              },
              results:{
                title:'Results',
                lists:[[
                  {type:'link', text:"Document repository" , link:'http://librairy.linkeddata.es/data/#/covid/core-overview'},
                  {type:'link', text:"Sentence repository", link:'http://librairy.linkeddata.es/data/#/covid-sentences/core-overview'},
                  {type:'link', text:"Visualisation repository (code: GIST 4f726911fd9908ffc3a46837b15d8011)", link:'https://librairy.linkeddata.es/data/dashboard'},
                  {type:'link', text:"Guided exploration accross the related papers based on their content and annotations", link:'https://librairy.github.io/covid19/explorer.html'},
                  {type:'link', text:"Python script for indexing", link:'https://github.com/librairy/covid19/blob/master/parallel-index-articles.py'},

                ]]
              },
              conclusions:{
                title:'Conclusions',
                statistics:{
                  'Indexed Papers':'33244',
                  'Automatically Extracted Sentences':'5298063'
                }
              }
            
            }
        }, 
        {
          step:2,
          title:'Classify', 
          content:'Annotate each article and each sentence with the processed information.',
          source:'approach/annotation.svg', 
          info:{
            motivation:{
              title:'Motivation',
              text:'Grouping drugs related with COVID 19 treatment to use them in shortage situations'
            },
            problems:{
              title:'Problems',
              text:'text',
              lists:[[
                {type:'value', text:'Massive processing of scientific papers'},
                {type:'value', text:'Automatic drug identification'},
                {type:'value', text:'Automatic symptom identification'},
                {type:'value', text:'Automatic disease identification'},
                {type:'value', text:'Automatic disorder identification'},

              ], {
                title:'Relation Extraction:',
                data:[
                  {type:'value', text:'Drug vs Symptom'},
                  {type:'value', text:'Drug vs Disease'},
                  {type:'value', text:'Drug vs Disorder'},
                ]
              }]

            },
            hypothesis:{
              title:'Hypothesis',
              text:'The description of drugs by means of symptoms, diseases and disorders automatically extracted from the scientific publication will allow grouping those that are related.'
            },
            methodology:{
              title:'Methodology',
              lists:[[
                {type:'link', text:'Creation of a service to identify drugs and ATC codes', link:'http://librairy.github.io/bio-nlp'},
                {type:'value', text:'Development and execution of a drug and disease annotator based of NER models.'},
                {type:'value', text:'Annotations in two levels: sentence and paper.'},
                {type:'value', text:'Generation of grouping models (global and hierarchical) apart from representations of the drugs obtained with the annotations.'},
              ], {
                title:'Evaluation of the results obtained:',
                data:[
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_2.png', text:'For 100 Groups (0.436208445103141)'},
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_3.png', text:'For 110 Groups (0.4494331459873356)'},
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_4.png', text:'For 120 Groups (0.4576435692957037)'},
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_5.png', text:'For 130 Groups (0.4553701275038375)'},
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/silouette-latest_6.png', text:'For 140 Groups (0.46024923069398316)'}
                ]
              }]
            },
            results:{
              title:'Results',
              lists:[{
                title:'Annotations: 5.274.655 sentences y 33.244 papers',
                data:[
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_diseases_t', text:'Diseases (scipacy_diseases_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_problems_t', text:'Symptoms (annot_cliner_problems_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid/terms?terms.fl=annot_cliner_treatments_t', text:'Disorders (annot_cliner_treatments_t)'},
                  {type:'title', text:'Drugs:'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=scispacy_chemicals_t', text:'chemical substance: (scispacy_chemicals_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc5_t', text:'active ingredient: (bionlp_atc5_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc4_t', text:'therapeutic group: (bionlp_atc4_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc3_t', text:'chemical group: (bionlp_atc3_t)'},
                  {type:'link', link:'http://librairy.linkeddata.es/data/covid-sentences/terms?terms.fl=bionlp_atc2_t', text:'pharmacological group: (bionlp_atc2_t)'},
                  {type:'image', text:'',link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/annotations-donut2.png'}
                ]
              }, 
              {
                title:'Distribution of drugs from annotations',
                data:[
                  {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-bidimensional-latest.png', text:'Bidimensional space'},
                  {type:'image', link:'https://raw.githubusercontent.com/oeg-upm/drugs4covid19web/master/web/src/assets/approach/drugs-atc5-dendrogram-latest.png', text:'By levels'}
                  ]
              }]
            },
            conclusions:{
              title:'Conclusions',
              lists:[[
                {type:'image', link:'https://raw.githubusercontent.com/librairy/covid19/master/atc-codes/drugs-atc5-cluster-latest.png',text:'We have identified 120 groups of drugs amongst those mentioned in papers published in CORD-19'},
                {type:'value', text:'Given a drug, we can suggest related drugs based on its commercial name, pharmacological group, therapeutic group or active ingredient.'},
                {type:'value', text:'We can make searches based on diseases, symptoms, treatments or drugs from the scientific papers published in CORD-19.'},
                {type:'link',caption:'(Los medicamentos que combinan la actividad inmunosupresora y antimalárica tienen el principio activo P01BA02; los antibióticos macrólidos pertenecen al grupo terapeútico J01FA)' , link:'https://librairy.linkeddata.es/solr/covid/select?fl=url_s%2C%20name_s%2C%20scispacy_diseases_t&q=labels4_t%3AJ01FA%20AND%20labels5_t%3AP01BA02', text:'For instance, we can now answer to the next question: Have drugs that combine immunosuppressive and anti-malarial activity with macrolide antibiotic been used? In which papers are they mentioned? To which diseases are they related?'},
                {type:'image', link:'https://taiga.vencealvirus.software.imdea.org/media/attachments/7/4/2/c/88032427ea5df8abb15780aed503ade41f27500d1dbe735178f6f96e8986/diseaseschemicals-atcs2.png#_taiga-refresh=wiki_page:1361', text:'Not all the sentences belonging to this corpus contain relevant entities, and in the major part of the papers only one entity can be found.'},
                {type:'value', text:'No se detallan suficientes relaciones entre entidades a nivel de frase. Otras tareas adicionales como la identificación de correferencias para trabajar a nivel de párrafo y generación de nuevos modelos para el corpus específico se contemplan como líneas futuras'}
              ], {
                title:'Drugs related with Aciclovir (J05AB01) in this context',
                data:[
                  {type:'value', link:'', text:'ketamine (N01AX03)'},
                  {type:'value', link:'', text:'piperazine (P02CB01)'},
                  {type:'value', link:'', text:'acefylline piperazine (R03DA09)'},
                  {type:'value', link:'', text:'barium sulfate without suspending agents (V08BA02)'},
                  {type:'value', link:'', text:'barium sulfate with suspending agents (V08BA01)'},
                  {type:'value', link:'', text:'chlorhexidine (S01AX09, S03AA04, S02AA09, D09AA12, R02AA05, B05CA02, D08AC02, A01AB03)'},
                  {type:'value', link:'', text:'chlorhexidine, combinations (D08AC52)'},
                  {type:'value', link:'', text:'artesunate (P01BE03)'},
                  {type:'value', link:'', text:'artesunate and pyronaridine (P01BF06)'},
                  {type:'value', link:'', text:'amodiaquine (P01BA06)'}
                ]
              }]
            }
          
          }
      }, 
      {
        step:3,
        title:'Validate', 
        content:'Review these notes with the help of citizen scientists.',
        source:'approach/medical_research.svg', 
        info:{
          motivation:{
            title:'Motivation',
            text:'Validation of the sentences extracted from the papers that contain information about COVID-19 by citizens with knowledge in Health Science.'
          },
          problems:{
            title:'Problems',
            text:'Keywords related with the disease (symptoms, drugs, diseases and treatments) can appear in different order and with a different meaning. Thus, the automatic identification is complex.'
          },
          hypothesis:{
            title:'Hypothesis',
            text:'The knowledge and interpretation of citizens with experience in Health Science will be essential to validate the automatically extracted sentences from scientific papers.'
          },
          methodology:{
            title:'Methodology',
            lists:[[
              {type:'value', text:'A web application on citizen science will be built. This application will allow the validation of the sentences extracted with an Artificial Intelligence system by users with experience in Health Science.'},
              {type:'value', text:'The input data of the experiment will be the automatically extracted sentences.'},
              {type:'value', text:'In compliance with the GDPR, users will be informed about the treatment of their personal data, the creation of automatic profiles and their right to delete them. Moreover, the servers will be duly secured.'},
              {type:'value', text:'All the raw data from the experiment will be openly published (anonymising previously the user identifiers).'}
            ],{
              title:'The application will allow:',
              data:[
              {type:'value', text:'Registration and classification of users as per their profile (general doctors, nurses, epidemiologists, pharmacists…) Such classification will be made by performing a tutorial.'},
              {type:'value', text:'A phrase extracted from the corpus will be shown to the user and will mark the symptoms, medications and possible treatments.'},
              {type:'value', text:'The users will be shown a sentence extracted from the corpus and they will identify symptoms, drugs and treatments.'},
              {type:'value', text:'Validated data will be sent to an API for their storage in a database.'},
              {type:'value', text:'A confidence index will be calculated for every user, based on gold standards (tasks previously validated by experts).'},
              {type:'link', link:'https://oeg-upm.github.io/drugs4covid19-cs/', text:'Try here our demo.'}
            ]}

          ]
          },
          results:{},
          conclusions:{
            title:'Conclusions',
            lists:[[
              {type:'value', text:'Collection and classification of adequate drugs for the disease.'},
              {type:'value', text:'Collection and classification of symptoms of the disease.'},
              {type:'value', text:'Relations symptom-drug extracted from the sentences.'},
              {type:'value', text:'Relations drug-drug extracted from the sentences.'},
              {type:'value', text:'Relations drug-disease extracted from the sentences.'},

            ]]
          }
        }
    }, 
    {
      step:4,
      title:'Publish', 
      content:'Publish a knowledge graph with the valid data.',
      source:'approach/kg.svg',
      info:{
        motivation:{
          title:'Motivation',
          text:"Several document oriented repositories have been generated from the corpus CORD-19, an updated corpus of scientific papers in COVID-19. Documents can be automatically processed and annotated thanks to the HTTP access interface. The generated repository contains sentences from these papers annotated with diseases, symptoms, disorders and treatments (ATC codes) related with COVID-19. There currently are different repositories of related data that contain detailed descriptions of attributes such as the name of a drug or secondary effects, amongst others. Therefore, the idea is to extend initial annotations with those generated by this type of relations. In order to exploit the information, both for health science related people and general audience, the annotations need to be aligned with a vocabulary that describes the knowledge of the domain. This way, the original repository will be transformed into a knowledge graph by means of mappings between the sentence repository and the developed vocabulary."
        },
        problems:{
          title:'Problems',
          lists:[[
            {type:'value', text:'Information silos'},
            {type:'value', text:'Heterogeneous data sources'},
            {type:'value', text:'Heterogeneous formats and query methods'},
            {type:'value', text:'Lack of consolidated vocabularies'},
          ]]

        },
        hypothesis:{
          title:'Hypothesis',
          text:'A unique and unified access point, graph shaped, allows an effective retrieval of information about drugs and their interactions.'
        },
        methodology:{
          title:'Methodology',
          lists:[[
            {type:'value', text:'Search and generation of data sources'},
            {type:'value', text:'Search of knowledge sources related to drugs, symptoms, disorders and treatments'},
            {type:'value', text:'Exploration of other semantic repositories, generated with information on COVID-19, to research on the possibility of mapping knowledge graphs.'},
            {type:'value', text:'Generation of the vocabulary by reusing ontologies associated to that sources.'},
            {type:'value', text:'Documentation and publication of the vocabulary.'},
            {type:'value', text:'Mapping the data with the vocabulary'},
            {type:'value', text:'Generation of the knowledge graph aligned with the vocabulary'},
            {type:'value', text:'Enrichment of the graph with expert validations (citizen science)'},
            {type:'value', text:'Publication of the knowledge graph'}

          ]]
        },
        results:{
          title:'Results',
          lists:[[
            {type:'link', link:'https://w3id.org/def/DRUGS4COVID19', text:'Vocabulary'},
            {type:'link', link:'https://github.com/oeg-upm/drugs4covid19-kg', text:'Knowledge graph'},
            {type:'link', link:'http://librairy.linkeddata.es/sparql', text:'Sparql endpoint'},
            {type:'link', link:"https://librairy.linkeddata.es/sparql?default-graph-uri=http%3A%2F%2Fdrugs4covid.com%2F542020&query=select+distinct+*+where+%7B%0D%0A%0D%0A%3Fs+a+%3Chttps%3A%2F%2Fw3id.org%2Fdef%2FDRUGS4COVID19%23Paper%3E.%0D%0A%3Fs+%3Chttps%3A%2F%2Fw3id.org%2Fdef%2FDRUGS4COVID19%2Fmenciona%3E+%3Fa+.%0D%0A%3Fa+%3Fp+%3Ft+.%0D%0A%0D%0A%7D+limit+10&should-sponge=&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+", text:'Query example'}
          ]]
        },
        conclusions:{
          title:'Conclusions',
          text:'We have integrated and structured information extracted from scientific papers and their annotations. Moreover, we have enriched them with links to external resources, which is very useful for experts. This way, this unique information resource can be used to easily answer questions.'
        }
      
      } 
  } 
    ]
    },
    tools:{
      title0:'Apps powered by Drugs4Covid',
      title1:'D4C Search Engine',
      text1:'An open web service to exploit the existing scientific literature about coronavirus (more than 60,000 papers) identifying drugs, diseases and articles and displaying their relations inside the corpus. You can search by ATC code, Generic Name, Disease Name or MESH code.',
      title2:'D4C Knowled Graph Interface',
      text2:'A Knowledge Graph interface to run your own queries or run some examples of questions doctors and researchers might find useful.',
      title3:'D4C Query Builder',
      text3:'A simple interface to learn how to use the D4C Api and start to run your own experiments.',
      link1:'https://bio-nlp-dashboard.netlify.app/',
      link2:'https://bio-nlp-dashboard.netlify.app/KG',
      link3:'https://bio-nlp-dashboard.netlify.app/customsearch'


    },
    team:{
      title0:'Who Are We?', 
      title1:'The Team',
      title2:'With the help of:',
      logo1:'logos/oeg.jpg', 
      logo2:'logos/upm.png',
      logo3:'logos/FacInformatica.jpg'
    }
  }
]
const teamData = [
  {
    "source":"teamImages/Fotos/OscarCorcho.jpeg",
    "name": "Oscar Corcho",
    "role": "Promoter",
    "group": "Support",
    "institution": "UPM",
    "twitter": "ocorcho",
    "github": "ocorcho",
    "linkedin": "https://www.linkedin.com/in/ocorcho/",
    "email": "ocorcho@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/asuncion.jpg",
    "name": "Asun Gómez-Pérez",
    "role": "Promoter",
    "group": "Support",
    "institution": "UPM",
    "twitter": "asungomezperez",
    "github": "",
    "linkedin": "http://www.dia.fi.upm.es/es/asun",
    "email": "asun@fi.upm.es"
  },    
  {
    "source":"teamImages/Fotos/DavidChaves.jpg",
    "name": "David Chaves",
    "role": "Knowledge Engineer",
    "group": "KG",
    "institution": "UPM",
    "twitter": "dchavesf",
    "github": "dachafra",
    "linkedin": "https://www.linkedin.com/in/david-chaves-fraga/",
    "email": "dchaves@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/CarlosBadenesOlmedo.png",
    "name": "Carlos Badenes-Olmedo",
    "role": "Product Owner",
    "group": "NLP",
    "institution": "UPM",
    "twitter": "carbadol",
    "github": "cbadenes",
    "linkedin": "https://www.linkedin.com/in/cbadenes",
    "email": "cbadenes@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/luisPozo.png",
    "name": "Luis Pozo",
    "role": "Developer",
    "group": "DEV",
    "institution": "UPM",
    "twitter": "LuispozoDev",
    "github": "w0xter",
    "linkedin": "https://www.linkedin.com/in/luis-pozo-472b6317a/",
    "email": "luis.pozo@upm.es"
  },
  {
    "source":"teamImages/Fotos/PatriciaMartínChozas.png",
    "name": "Patricia Martín-Chozas",
    "role": "Linguist",
    "group": "NLP",
    "institution": "UPM",
    "twitter": "pmchozas",
    "github": "pmchozas",
    "linkedin": "https://www.linkedin.com/in/pmchozas/",
    "email": "pmchozas@fi.upm.es"
  },

  {
    "source":"teamImages/Fotos/MariaPoveda.jpg",
    "name": "María Poveda-Villalón",
    "role": "Ontologist",
    "group": "KG",
    "institution": "UPM",
    "twitter": "MariaPovedaV",
    "github": "mariapoveda",
    "linkedin": "https://www.linkedin.com/in/mpovedavillalon",
    "email": "mpoveda@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/AlbaFernandez.png",
    "name": "Alba Fernández-Izquierdo",
    "role": "Ontologist",
    "group": "KG",
    "institution": "UPM",
    "twitter": "albafizq",
    "github": "albaizq",
    "linkedin": "https://www.linkedin.com/in/albafernandezizquierdo/",
    "email": "albafernandez@fi.upm.es"
  },
  {
    "source":"teamImages/Fotos/AnaIglesiasMolina.jpg",
    "name": "Ana Iglesias-Molina",
    "role": "Knowledge Engineer",
    "group": "KG",
    "institution": "UPM",
    "twitter": "_aieme",
    "github": "anaigmo",
    "linkedin": "https://www.linkedin.com/in/ana-iglesias-molina/",
    "email": "ana.iglesiasm@upm.es"
  },

  {
    "source":"teamImages/Fotos/PaolaEspinozaArias.jpg",
    "name": "Paola Espinoza-Arias",
    "role": "Ontologist",
    "group": "KG",
    "institution": "UPM",
    "twitter": "mijaspao",
    "github": "paoespinozarias",
    "linkedin": "https://www.linkedin.com/in/paolaespinoza-arias/",
    "email": "pespinoza@fi.upm.es"
  },
  { "source":"teamImages/Fotos/PabloCallejaIbañez.jpg",
    "name": "Pablo Calleja Ibáñez",
    "role": "Computational Linguistic",
    "group": "NLP",
    "institution": "UPM",
    "twitter": "SPabloCalleja",
    "github": "serpablo",
    "linkedin": "https://www.linkedin.com/in/pablo-calleja-ib%C3%A1%C3%B1ez-63799064/",
    "email": "pcalleja@fi.upm.es"
  },
  { "source":"teamImages/Fotos/VirginiadePablo.png",
    "name": "Virginia de Pablo",
    "role": "Comunicación",
    "group": "Support",
    "institution": "UPM",
    "twitter": "v_depablo",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/vdepablo/",
    "email": "vdepablo@fi-upm.es"
  },
  { "source":"teamImages/Fotos/DanielBermejoSánchez.jpg",
    "name": "Daniel Bermejo Sánchez",
    "role": "Back End Programmer",
    "group": "CS",
    "institution": "UPM",
    "twitter": "",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/daniel-bermejo-sánchez-020712160",
    "email": "daniel.bermejos@alumnos.upm.es"
  },
  { "source":"teamImages/Fotos/ElviraAmador.JPG",
    "name": "Elvira Amador Domínguez",
    "role": "Machine Learning Engineer",
    "group": "NLP",
    "institution": "UPM",
    "twitter": "elviamador",
    "github": "eamadord",
    "linkedin": "https://www.linkedin.com/in/elvira-amador-dom%C3%ADnguez-746607116/",
    "email": "eamador@fi.upm.es"
  },
  { "source":"teamImages/Fotos/EdnaRuckhaus.png",
    "name": "Edna Ruckhaus Magnus",
    "role": "Knowledge Graph exploitation",
    "group": "KG",
    "institution": "UPM",
    "twitter": "eruckhaus",
    "github": "ednaru",
    "linkedin": "https://www.linkedin.com/in/eruckhaus/",
    "email": "eruckhaus@fi.upm.es"
  },
  { "source":"teamImages/Fotos/SocorroBernardos.png",
    "name": "Socorro Bernardos Galindo",
    "role": "Ayuda en ontología y consultas",
    "group": "KG",
    "institution": "UPM",
    "twitter": "",
    "github": "",
    "linkedin": "",
    "email": ""
  },
  { "source":"teamImages/Fotos/EstebanGonzálezGuardia.jpeg",
    "name": "Esteban González Guardia",
    "role": "Frontend programmer",
    "group": "CS",
    "institution": "UPM",
    "twitter": "eglezguardia",
    "github": "esgg",
    "linkedin": "",
    "email": "egonzalez@fi.upm.es"
  },
  { "source":"teamImages/Fotos/BeatrizLópezCenteno.jpg",
  "name": "Beatriz López Centeno",
  "role": "Hospital Pharmacist",
  "group": "Support",
  "institution": "SERMAS",
  "twitter": "blopezcenteno",
  "github": "",
  "linkedin": "https://www.linkedin.com/in/blopezcenteno/",
  "email": "blcenteno@salud.madrid.org"
},
{ "source":"teamImages/Fotos/JU_N.jpg",
"name": "Juan Utande",
"role": "Advisor",
"group": "Support",
"institution": "UPM",
"twitter": "jutande",
"github": "",
"linkedin": "https://www.linkedin.com/in/juan-utande/",
"email": "jutande@fi.upm.es"
},
{ "source":"teamImages/Fotos/MaydadePabloLlorente.png",
"name": "Mayda de Pablo Llorente",
"role": "Support",
"group": "Support",
"institution": "",
"twitter": "maydadepablo",
"github": "",
"linkedin": "https://www.linkedin.com/in/maydadepablo/",
"email": "mayda.depablo.llorente@alumnos.upm.es"
}
]
const navText = [
  {
    introduction:'Introduction',
    problem:'Problem',
    resources:'Resources',
    approach:'Approach',
    tools:'Tools',
    team:'Who Are We?',
    lang:'ES'  
  },
  {
    introduction:'Introducción',
    problem:'Problema',
    resources:'Recursos',
    approach:'Nuestro Enfoque',
    tools:'Herramientas',
    team:'¿Quiénes Somos?',
    lang:'EN'
  }
]
export default {MedicineStock, pie, ArticlesPerYear, radar,donut, bubble, graph, graphConfig, teamData, languages, navText, List}
