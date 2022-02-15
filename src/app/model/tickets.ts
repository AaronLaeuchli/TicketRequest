export class Tickets {
    id: string | undefined;
    ticketId: string;
    ticketTitle: string;
    exists: boolean;
    workflowstate: string | undefined;

    constructor(ticketId: string, ticketTitle: string, exists: boolean, workflowstate?: string ) {
        this.ticketId = ticketId;
        this.ticketTitle = ticketTitle;
        this.exists = exists;
        this.workflowstate = workflowstate;
    }
}