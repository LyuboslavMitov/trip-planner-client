export interface ScheduleItem {
    id: string;
    name: string;
    location: string;
    date: string;
    duration?: string;
    description?: string;
    dayOfTrip?: string;
    tripId: string;
    participantsId: string[];
    participantsNames: string[];
}