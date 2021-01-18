window.onload = ()=>{

    const fullDateToday = new Date();
    const monthToday = fullDateToday.getMonth();
    const yearToday = fullDateToday.getFullYear();

    const firstDay = new Date(yearToday, monthToday, 1);
    const prevMonth = new Date(yearToday, monthToday-1);
    const nextMonth = new Date(yearToday, monthToday+1);

    // const calDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // let calTable = document.getElementById('calendar');
    let calBody = document.getElementById('cal-body');
    
    if(prevMonth.getMonth === 1){
        console.log('Month is february');
    }else{
        if(firstDay.getDay() != 0){
            let count = 0;
            // let 
            let cellArray = [];
            let mnt = prevMonth.getMonth();
            let yrs = (calMonths[mnt] == 'Dec') ? yearToday - 1 : yearToday;
            
            while(count < 42){
                let newString = '';
                const newCellDate = new Date(yrs, mnt, count+(31-(firstDay.getDay()-1)));
                
                if(newCellDate.getMonth() != monthToday){
                    newString = `<span class="${newCellDate.getMonth() == fullDateToday.getMonth() && newCellDate.getDate() == fullDateToday.getDate()? 'today' : ''} faded-color"  >${newCellDate.getUTCDate()}</span>`;
                }else{
                    newString = `<span ${newCellDate.getMonth() == fullDateToday.getMonth() && newCellDate.getDate() == fullDateToday.getDate() ? 'class="today"' : ''}>${newCellDate.getUTCDate()}</span>`;
                }
                cellArray.push(newString);
                
                if (cellArray.length === 7){
                    const newRow = document.createElement('tr');
                    cellArray.forEach(cell=>{
                        const newCell = document.createElement('td');
                        const newContainer = document.createElement('div');
                        newContainer.style.height = '100%';
                        newContainer.innerHTML = cell;
                        newCell.appendChild(newContainer);
                        newRow.appendChild(newCell);
                    })
                    calBody.appendChild(newRow);
                    cellArray = [];
                }
                count++       
            }
        }else{
            console.log("Start from the begining");
        }
    }
    
}