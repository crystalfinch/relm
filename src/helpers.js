export function formatPrice(dollars) {
  return `$${(dollars / 1).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function formatNumber(number) {
  return `${(number / 1).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function formatDate(timestamp,formatStyle) {
    let d = new Date(timestamp);
    let monthNamesLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    switch (formatStyle) {
        case "short":
            return `${monthNamesShort[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        case "long":
            return `${monthNamesLong[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        default:
            return `${(d.getMonth()+1)}/${d.getDate()}/${d.getFullYear().toString().substr(2,2)}`;
    }
}

export function getYear() {
    const today = new Date();
    const year = today.getFullYear();
    return year;
}

export function printPage(e) {
    e.preventDefault();
    window.print();
}
