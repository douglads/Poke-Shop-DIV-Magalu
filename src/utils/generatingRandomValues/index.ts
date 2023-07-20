export default function generatinRandomValues(): string {
  
    const random = Math.random();
    let maxValue = 0;
  
    if (random <= 0.5) {
      maxValue = 300;
    } else if (random <= 0.8) {
      maxValue = 1000;
    } else if (random <= 0.95) {
      maxValue = 2000;
    } else  {
      maxValue = 13000;
    }
    
    const valueRandom = Math.round(Math.random() * maxValue * 100) / 100;
    return String(valueRandom.toFixed(2)).replace('.', ',') + ' R$'
  }
  