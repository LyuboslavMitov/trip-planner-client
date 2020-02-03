export interface ScheduleItem {
    id: string;
    name: string;
    location: string;
    date: Date;
    duration?: string;
    description?: string;
    dayOfTrip?: string;
    tripId: string;
    participantsId: string[];
}