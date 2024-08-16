export const subtractDates = (date1, date2) => {
    if (!date1 || !date2) {
        return; 
    };
    
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    const differenceInMilliseconds = endDate - startDate;

    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    return Math.round(differenceInDays);
};