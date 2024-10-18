import { Spot, ResponseStatus } from './spot';
import * as chartInits from './initCharts';

import { Chart, ChartData, BarController, BarElement, CategoryScale, 
  LinearScale, Tooltip, PieController, ArcElement, Legend, LegendElement} from 'chart.js';

export const colors = {
  white: '#ffffff',
  ghostWhite: '#f8f8ff',
  black: '#000000',
  gray: '#a7a7a7',
  lightGray: '#dee2e6',
  lightestGray: '#efefef',
  darkGray: '#323232',
  blue: '#007bff',
  lightBlue: '#007bff',
  lightestBlue: '#adc7f3',
  darkBlue: '#002d80',
  green: '#00882d',
  lightGreen: '#00b33c',
  darkGreen: '#00591a',
  red: '#b90000',
  lightRed: '#ff0000',
  darkRed: '#800000',
  orange: '#e95713',
  lightOrange: '#ffa750',
};

export type ResponseStore = {site: string, response: PatientsResponse | OrganoidsResponse};
let patientsResponses: Array<ResponseStore> = [];

/* patient statistics focused query
site
project
gender
count_age_lt_30
count_age_in_31_to_40
count_age_in_41_to_50
count_age_in_51_to_60
count_age_gt_61
*/
//@todo: calculate count male/female/other total
export type PatientsResponse = {
  status: ResponseStatus, data: {
    date: string, responseDetails: [{
        site: string, 
        project:string, 
        gender: string,
        count_age_lt_30: number, 
        count_age_in_31_to_40: number,
        count_age_in_41_to_50: number,
        count_age_in_51_to_60: number,
        count_age_gt_61: number            
    }]
  }
};

/* organoid centric query
count_organoids
project
//@todo extend with
from_untreated_primary_tumor
from_treated_primary_tumor
from_metastasis
*/
export type OrganoidsResponse = {
  status: ResponseStatus, data: {
      date: string, responseDetails: [{
          count_organoids: number, 
          project: string
      }]
  }
};


// Create a new Spot instance
/*
const url = new URL('');
const sites = [''];
const spot = new Spot(url, sites);

const payload = JSON.stringify({ payload: "SELECT_TABLES" });
const query = btoa(payload);

// Create an AbortController to cancel the request if needed
const controller = new AbortController();

// Send the query
spot.send(query, controller).then(() => {
  console.log('Query sent successfully');
}).catch((err) => {
  console.error('Error sending query:', err);
});
*/

//init all visual elements with blank/default initial values
function initBlank() {

}

window.addEventListener('load', () => {  
  Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip,
    PieController, ArcElement, Legend
  );
  chartInits.initPatientsByProjectBarChart();
  chartInits.initOrganoidsByProjectBarChart();
  chartInits.initPatientsByAgeBarChart();
  chartInits.initOrganoidsByBiopsySitePieChart();
  chartInits.initPatientsByGenderPieChart();
  chartInits.initMetPPatientsAfterPdoPieChart();
  chartInits.initNeoMPatientsByTherapyStatusPieChart();


  /*
  renderPatientsBarChart(patientsBarChartDatasets);
  initPatientsByProjectPieChart();
  initPatientsBySitePieChart();
  initOrganoidsBySitePieChart();
  */
});