import newyork from '../assets/image/newyork.jpg';
import eiffelTower from '../assets/image/eiffel-tower.jpg';
import milan from '../assets/image/milan.jpg';
import singapore from '../assets/image/singapore.jpg';
import venice from '../assets/image/venice.jpg';
import stockholm from '../assets/image/stockholm.jpg';
import dubai from '../assets/image/dubai.jpg';
import barcelona from '../assets/image/barcelona.jpg';
import berlin from '../assets/image/berlin.jpg';
import london from '../assets/image/london.jpg';
import norway from '../assets/image/norway.jpg';
import greece from '../assets/image/greekland0.jpg';

export const SlideData = [
  // London Flights
  { id: 1, from: 'London', title: 'NEW YORK', price: 999, date: '2025-05-10', img: newyork, flightType: 'direct' },
  { id: 2, from: 'London', title: 'PARIS', price: 299, date: '2025-05-11', img: eiffelTower, flightType: 'connecting' },
  { id: 3, from: 'London', title: 'BERLIN', price: 220, date: '2025-05-12', img: berlin, flightType: 'direct' },
  { id: 4, from: 'London', title: 'ROME', price: 350, date: '2025-05-14', img: milan, flightType: 'connecting' },

  // Paris Flights
  { id: 5, from: 'Paris', title: 'DUBAI', price: 799, date: '2025-05-15', img: dubai, flightType: 'direct' },
  { id: 6, from: 'Paris', title: 'STOCKHOLM', price: 450, date: '2025-05-17', img: stockholm, flightType: 'connecting' },
  { id: 7, from: 'Paris', title: 'BARCELONA', price: 380, date: '2025-05-18', img: barcelona, flightType: 'direct' },
  { id: 8, from: 'Paris', title: 'ATHENS', price: 420, date: '2025-05-19', img: greece, flightType: 'connecting' },

  // Dubai Flights
  { id: 9, from: 'Dubai', title: 'NEW YORK', price: 1200, date: '2025-06-01', img: newyork, flightType: 'direct' },
  { id: 10, from: 'Dubai', title: 'PARIS', price: 850, date: '2025-06-02', img: eiffelTower, flightType: 'connecting' },
  { id: 11, from: 'Dubai', title: 'BERLIN', price: 700, date: '2025-06-04', img: berlin, flightType: 'direct' },
  { id: 12, from: 'Dubai', title: 'STOCKHOLM', price: 750, date: '2025-06-06', img: stockholm, flightType: 'connecting' },

  // New York Flights
  { id: 13, from: 'New York', title: 'LONDON', price: 950, date: '2025-05-22', img: london, flightType: 'direct' },
  { id: 14, from: 'New York', title: 'BERLIN', price: 780, date: '2025-05-24', img: berlin, flightType: 'connecting' },
  { id: 15, from: 'New York', title: 'DUBAI', price: 1100, date: '2025-05-26', img: dubai, flightType: 'direct' },
  { id: 16, from: 'New York', title: 'ATHENS', price: 620, date: '2025-05-28', img: greece, flightType: 'connecting' },

  // Rome Flights
  { id: 17, from: 'Rome', title: 'LONDON', price: 300, date: '2025-05-20', img: london, flightType: 'direct' },
  { id: 18, from: 'Rome', title: 'PARIS', price: 350, date: '2025-05-21', img: eiffelTower, flightType: 'connecting' },
  { id: 19, from: 'Rome', title: 'BERLIN', price: 250, date: '2025-05-22', img: berlin, flightType: 'direct' },
  { id: 20, from: 'Rome', title: 'NEW YORK', price: 950, date: '2025-05-23', img: newyork, flightType: 'connecting' },

  // Berlin Flights
  { id: 21, from: 'Berlin', title: 'STOCKHOLM', price: 230, date: '2025-05-25', img: stockholm, flightType: 'direct' },
  { id: 22, from: 'Berlin', title: 'ATHENS', price: 310, date: '2025-05-26', img: greece, flightType: 'connecting' },
  { id: 23, from: 'Berlin', title: 'DUBAI', price: 900, date: '2025-05-28', img: dubai, flightType: 'direct' },
  { id: 24, from: 'Berlin', title: 'BARCELONA', price: 400, date: '2025-05-30', img: barcelona, flightType: 'connecting' },

  // Tokyo Flights
  { id: 25, from: 'Tokyo', title: 'LONDON', price: 1300, date: '2025-06-05', img: london, flightType: 'direct' },
  { id: 26, from: 'Tokyo', title: 'PARIS', price: 1200, date: '2025-06-07', img: eiffelTower, flightType: 'connecting' },
  { id: 27, from: 'Tokyo', title: 'DUBAI', price: 950, date: '2025-06-09', img: dubai, flightType: 'direct' },
  { id: 28, from: 'Tokyo', title: 'STOCKHOLM', price: 1050, date: '2025-06-11', img: stockholm, flightType: 'connecting' },

  // Madrid Flights
  { id: 29, from: 'Madrid', title: 'NEW YORK', price: 800, date: '2025-05-15', img: newyork, flightType: 'direct' },
  { id: 30, from: 'Madrid', title: 'ROME', price: 370, date: '2025-05-17', img: milan, flightType: 'connecting' },
  { id: 31, from: 'Madrid', title: 'ATHENS', price: 400, date: '2025-05-19', img: greece, flightType: 'direct' },
  { id: 32, from: 'Madrid', title: 'BERLIN', price: 320, date: '2025-05-21', img: berlin, flightType: 'connecting' },

  // Stockholm Flights
  { id: 33, from: 'Stockholm', title: 'BERLIN', price: 250, date: '2025-05-23', img: berlin, flightType: 'direct' },
  { id: 34, from: 'Stockholm', title: 'PARIS', price: 460, date: '2025-05-25', img: eiffelTower, flightType: 'connecting' },
  { id: 35, from: 'Stockholm', title: 'DUBAI', price: 980, date: '2025-05-27', img: dubai, flightType: 'direct' },
  { id: 36, from: 'Stockholm', title: 'NEW YORK', price: 1200, date: '2025-05-30', img: newyork, flightType: 'connecting' },

  // Athens Flights
  { id: 37, from: 'Athens', title: 'ROME', price: 280, date: '2025-06-01', img: milan, flightType: 'direct' },
  { id: 38, from: 'Athens', title: 'STOCKHOLM', price: 500, date: '2025-06-03', img: stockholm, flightType: 'connecting' },
  { id: 39, from: 'Athens', title: 'DUBAI', price: 850, date: '2025-06-05', img: dubai, flightType: 'direct' },
  { id: 40, from: 'Athens', title: 'PARIS', price: 470, date: '2025-06-07', img: eiffelTower, flightType: 'connecting' },

  // Zurich Flights
  { id: 41, from: 'Zurich', title: 'LONDON', price: 320, date: '2025-06-09', img: london, flightType: 'direct' },
  { id: 42, from: 'Zurich', title: 'BERLIN', price: 290, date: '2025-06-11', img: berlin, flightType: 'connecting' },
  { id: 43, from: 'Zurich', title: 'DUBAI', price: 970, date: '2025-06-13', img: dubai, flightType: 'direct' },
  { id: 44, from: 'Zurich', title: 'STOCKHOLM', price: 510, date: '2025-06-15', img: stockholm, flightType: 'connecting' },

  // Amsterdam Flights
  { id: 45, from: 'Amsterdam', title: 'PARIS', price: 300, date: '2025-06-17', img: eiffelTower, flightType: 'direct' },
  { id: 46, from: 'Amsterdam', title: 'NEW YORK', price: 850, date: '2025-06-19', img: newyork, flightType: 'connecting' },
  { id: 47, from: 'Amsterdam', title: 'ROME', price: 390, date: '2025-06-21', img: milan, flightType: 'direct' },
  { id: 48, from: 'Amsterdam', title: 'ATHENS', price: 410, date: '2025-06-23', img: greece, flightType: 'connecting' },

  // Singapore Flights
  { id: 49, from: 'Singapore', title: 'DUBAI', price: 950, date: '2025-06-25', img: dubai, flightType: 'direct' },
  { id: 50, from: 'Singapore', title: 'NEW YORK', price: 1350, date: '2025-06-27', img: newyork, flightType: 'connecting' },

  // Los Angeles Flights
  { id: 51, from: 'Los Angeles', title: 'PARIS', price: 1150, date: '2025-06-29', img: eiffelTower, flightType: 'direct' },
  { id: 52, from: 'Los Angeles', title: 'DUBAI', price: 1400, date: '2025-07-01', img: dubai, flightType: 'connecting' },
  { id: 53, from: 'Los Angeles', title: 'NORWAY', price: 1500, date: '2025-07-10', img: norway, flightType: 'connecting' },
  { id: 54, from: 'Los Angeles', title: 'VENICE', price: 1300, date: '2025-06-15', img: venice, flightType: 'direct' },
  { id: 54, from: 'Los Angeles', title: 'SINGAPORE', price: 1800, date: '2025-06-18', img: singapore, flightType: 'direct' },
];
