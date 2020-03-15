export default function getDayOfTheWeek(fullDate) {
    let date = new Date(fullDate).getDay() +1 ;
    if (date === 7) {
        return "Dimanche"
    } else if (date === 1) {
        return "Lundi"
    } else if (date === 2) {
        return "Mardi"
    } else if (date === 3) {
        return "Mercredi"
    } else if (date === 4) {
        return "Jeudi"
    } else if (date === 5) {
        return "Vendredi"
    } else if (date === 6) {
        return "Samedi"
    }
}
