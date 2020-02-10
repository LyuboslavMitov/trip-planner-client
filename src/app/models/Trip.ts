export interface Trip {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description?: string;
    isPublic?: boolean;
    ownerId: string;
    participants:string[];
    participantsId: string[];
}