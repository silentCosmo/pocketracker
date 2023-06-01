import { db } from "./LocalDatabase";

export const autoReset = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const month = currentDate.getMonth()
  const lastResetDate = localStorage.getItem('lastResetDate');
  
  console.log('Day:',currentDay,'Month', month);
  console.log('LastResetDate:', parseInt(lastResetDate));

  if (!lastResetDate || parseInt(lastResetDate) !== currentDay){
    if (currentDay === 1) {
      console.log('Data Reset Warning');
      //Reset process
      localStorage.removeItem('lastResetDate');
      db.archive(month)
      db.reset()
      localStorage.setItem('lastResetDate', currentDay);
    }
  } 
}

// Check if it's the 1st of the month every minute
setInterval(autoReset, 60000);
