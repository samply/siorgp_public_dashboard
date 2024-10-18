import { Chart, ChartData } from 'chart.js';
  

export function initPatientsByProjectBarChart() {
    const ctx = document.getElementById('patientsByProjectBarChartCanvas') as HTMLCanvasElement;  
    if (ctx) {
      new Chart(ctx, {      
        data: {
          labels: ['MetPredict', 'NeoMatch'],
          datasets: [
            {data: [10, 10], label: 'Project'}
          ]
        },
        type: 'bar',
        options: {        
          responsive: true,
          maintainAspectRatio: true,
          indexAxis: 'x',
          scales: {
            y: {
              title: {
                display: true,
                text: 'Number of Patients'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Age'
              }
            }
          },
          plugins: {
            tooltip: {            
              callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    let value = context.formattedValue;
                    return `${label}: ${value}`;
                }
              }
            },
          }
        },
      });
    } else {
      console.log("Element with id 'patientsByProjectBarChartCanvas' not found");
    }
  }

  export function initPatientsByAgeBarChart() {
    const ctx = document.getElementById('patientsByAgeBarChartCanvas') as HTMLCanvasElement;  
    if (ctx) {
      new Chart(ctx, {      
        data: {
            labels: ['<30', '31-40', '41-50', '51-60', '>61'],
            datasets: [
              {data: [1, 1, 1, 1, 1], label: 'Count'}          
            ]
        },
        type: 'bar',
        options: {        
          responsive: true,
          maintainAspectRatio: true,
          indexAxis: 'x',
          scales: {
            y: {
              title: {
                display: true,
                text: 'Number of Patients'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Age'
              }
            }
          },
          plugins: {
            tooltip: {            
              callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    let value = context.formattedValue;
                    return `${label}: ${value}`;
                }
              }
            },
          }
        },
      });
    } else {
      console.log("Element with id 'patientsByAgeBarChartCanvas' not found");
    }
  }
  
  export function initOrganoidsByProjectBarChart() {
    const ctx = document.getElementById('organoidsByProjectBarChartCanvas') as HTMLCanvasElement;  
    if (ctx) {
      new Chart(ctx, {      
        data: {        
          labels: ['NeoMatch', 'MetPredict'],
          datasets: [
            {data: [10, 10], label: 'Projects'}
          ]
        },
        type: 'bar',
        options: {        
          responsive: true,
          maintainAspectRatio: true,
          indexAxis: 'x',
          scales: {
            y: {
              title: {
                display: true,
                text: 'Number of Organoids'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Project'
              }
            }
          },
          plugins: {
            tooltip: {            
              callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    let value = context.formattedValue;
                    return `${label}: ${value}`;
                }
              }
            },
          }
        },
      });
    } else {
      console.log("Element with id 'organoidsByProjectBarChartCanvas' not found");
    }
  }
  
  export function initPatientsByGenderPieChart() {
    const ctx = document.getElementById('patientsByGenderPieChartCanvas') as HTMLCanvasElement;  
    if (ctx) {
      new Chart(ctx, {      
        data: {        
          labels: ['Male', 'Female'],
          datasets: [
            {data: [10, 10], label: 'Count'}
          ]
        },
        type: 'pie',
        options: {        
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            tooltip: {            
              callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    let value = context.formattedValue;
                    return `${label}: ${value}`;
                }
              }
            },
          }
        },
      });
    } else {
      console.log("Element with id 'patientsByGenderPieChartCanvas' not found");
    }
  }
  
  export function initOrganoidsByBiopsySitePieChart() {
    const ctx = document.getElementById('organoidByBiopsySitePieChartCanvas') as HTMLCanvasElement;  
    if (ctx) {
      new Chart(ctx, {      
        data: {
          labels: ['Metastasis', 'untreated primary tumor', 'treated tumor'],
          datasets: [
            {data: [1, 1, 1], label: 'Count'}          
          ]
        },
        type: 'pie',
        options: {        
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            tooltip: {            
              callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    let value = context.formattedValue;
                    return `${label}: ${value}`;
                }
              }
            },
          }
        },
      });
    } else {
      console.log("Element with id 'organoidByBiopsySitePieChart' not found");
    }
  }

  export function initMetPPatientsAfterPdoPieChart() {
    const ctx = document.getElementById('metPPatientsAfterPdoPieChartCanvas') as HTMLCanvasElement;  
    if (ctx) {
      new Chart(ctx, {      
        data: {
          labels: ['after neoCX', 'before neoCX', 'before/after neoCX'],
          datasets: [
            {data: [1, 1, 1], label: 'Count'}          
          ]
        },
        type: 'pie',
        options: {        
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            tooltip: {            
              callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    let value = context.formattedValue;
                    return `${label}: ${value}`;
                }
              }
            },
          }
        },
      });
    } else {
      console.log("Element with id 'neoMPatientsByTherapyStatusPieChartCanvas' not found");
    }
  }

  export function initNeoMPatientsByTherapyStatusPieChart() {
    const ctx = document.getElementById('neoMPatientsByTherapyStatusPieChartCanvas') as HTMLCanvasElement;  
    if (ctx) {
      new Chart(ctx, {      
        data: {
          labels: ['after neoCX', 'before neoCX', 'before/after neoCX'],
          datasets: [
            {data: [1, 1, 1], label: 'Count'}          
          ]
        },
        type: 'pie',
        options: {        
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            tooltip: {            
              callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    let value = context.formattedValue;
                    return `${label}: ${value}`;
                }
              }
            },
          }
        },
      });
    } else {
      console.log("Element with id 'neoMPatientsByTherapyStatusPieChartCanvas' not found");
    }
  }