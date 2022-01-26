export interface Tasks {

    Id: number;
    OwnerName: string;
    Details: string;
    DueDate: string;
    Completed: string;
}

export class Convert {
    public static toTask(json: string): Tasks {
        return JSON.parse(json);
    }

    public static taskToJson(value: Tasks): string {
        return JSON.stringify(value);
    }
}