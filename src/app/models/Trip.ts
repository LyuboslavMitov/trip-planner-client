export interface Trip {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description?: string;
    isPublic?: boolean;
    ownerId: string;
    participantsNames:string[];
    participantsId: string[];
}