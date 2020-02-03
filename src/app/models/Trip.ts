export interface Trip {
    id: string;
    name: string;
    destination: string;
    startDate: Date;
    endDate: Date;
    description?: string;
    isPublic?: boolean;
    ownerId: string;
    participantsId: string[];
}