const helpers = {
    friendlyDate: function (a: Date) {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];

        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const day = days[a.getDay()];

        const hour = a.getHours();
        const min = a.getMinutes();
        const sec = a.getSeconds();

        const time = {
            date: a.getDate(),

            day: day,
            month: month,
            year: year,

            hour: hour,
            min: min,
            sec: sec,

            time_friendly: this.getTime(a)
        };

        return time;
    },

    getTime: function (date: Date): string {
        let hours = date.getHours();

        const minutes = date.getMinutes().toString().padStart(2);

        const ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        return `${hours}:${minutes} ${ampm}`;
    },

    stringToFriendlyDate: function (date_string: string) {
        const date = helpers.friendlyDate(new Date(date_string));
        return `${date.month} ${date.date}, ${date.year}`;
    }
};

export default helpers;
