export default function converHourToMinutes(time: string) {

    const [hour, minutes] = time.split(':').map(Number);
    const timeInMunutes = (hour * 60) + minutes;
    return timeInMunutes;
}